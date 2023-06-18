import { type UseBMapGLScriptOptions, useBMapGLScript } from '@bluryar/composables';
import { isNil } from '@bluryar/shared';
import { tryOnMounted, tryOnScopeDispose } from '@vueuse/core';
import {
  type MaybeRefOrGetter,
  type ShallowRef,
  computed,
  effectScope,
  nextTick,
  ref,
  shallowRef,
  toValue,
  unref,
  watch,
} from 'vue';
import { useOfflineBMapGLScript } from './useOfflineBMapGLScript';

export interface UseBMapGLOptions {
  /** 百度地图的ak */
  ak?: string;

  /**
   * 是否使用离线脚本
   */
  offline?: boolean;

  /**
   * 挂载地图的dom节点, 不传会在内部创建一个
   */
  domRef?: ShallowRef<HTMLDivElement | null>;

  /**
   * 百度地图的配置项
   */
  options?: MaybeRefOrGetter<BMapGL.MapOptions>;

  /** 异步加载sdk的配置项 */
  asyncLoadOptions?: Omit<UseBMapGLScriptOptions, 'ak' | 'manual'>;
}

export const isMapLoaded = () => 'BMapGL' in window && 'Map' in (window as any).BMapGL;

function createElement() {
  const dom = document.createElement('div');
  dom.setAttribute('data-x-bmapgl', 'bluryar');
  return dom;
}

export function useBMapGL(options?: UseBMapGLOptions) {
  const loading = ref(!!0);
  const scoop = effectScope(!!1);
  const mapInstance = shallowRef<BMapGL.Map | null>(null);

  const {
    ak = '',
    asyncLoadOptions: loader = {},
    domRef = shallowRef(null),
    options: mapOptions = {},
    offline = false,
  } = options || {};

  const _domRef = shallowRef(isNil(toValue(domRef)) ? createElement() : toValue(domRef));
  const mapOptionsRef = ref(toValue(mapOptions));
  const displayOptionsRef = computed(() => unref(mapOptionsRef).displayOptions);

  const {
    setup,
    loading: scriptLoading,
    loaded,
    error,
  } = !offline
    ? useBMapGLScript({
        ...loader,
        manual: !!1,
        ak,
      })
    : useOfflineBMapGLScript(ak);

  // 加载脚本
  loading.value = !!1;
  tryOnMounted(setup);

  async function onLoaded() {
    const mapInst = new BMapGL.Map(_domRef.value as HTMLDivElement, {
      ...toValue(mapOptions),
    });

    watch(
      displayOptionsRef,
      () => {
        mapInst.setDisplayOptions(toValue(displayOptionsRef));
      },
      { deep: !!1 },
    );

    await nextTick();

    mapInstance.value = mapInst;
  }

  function onUnloaded() {
    mapInstance.value?.clearOverlays();
    mapInstance.value?.destroy();
    mapInstance.value = null;
    scoop.stop();
  }

  watch([loaded, _domRef], ([val, dom]) => {
    if (val && dom) {
      scoop.run(() => {
        loading.value = !!0;
        onLoaded();
      });
    }
  });

  watch(error, (val) => {
    if (val) {
      loading.value = !!0;
    }
  });

  tryOnScopeDispose(onUnloaded);

  return {
    domRef: _domRef,
    mapInstance,
    loading: computed(() => [loading, scriptLoading].some(toValue)),
  };
}
