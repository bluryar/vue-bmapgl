import type { MaybeRef } from '@vueuse/core';
import { nextTick, ref, toValue } from 'vue';
import { isMapLoaded } from './useBMapGL';

export function useOfflineBMapGLScript(ak: MaybeRef<string>) {
  const error = ref<null | Error>(null);
  const loaded = ref(!!0);
  const loading = ref(!!0);

  async function setup() {
    await nextTick();

    if (isMapLoaded()) {
      error.value = null;
      loaded.value = !!1;
      loading.value = !!0;
      return;
    }

    loading.value = !!1;
    try {
      (window as any).BMAP_AUTHENTIC_KEY = toValue(ak);

      await import('@/assets/bmapgl.js');
      await import('@/assets/bmap.css');

      loaded.value = !!1;
    } catch (err: any) {
      err.message = `加载百度地图失败: ${err.message}`;
      error.value = err;
    } finally {
      loading.value = !!0;
    }
  }

  return {
    setup,
    error,
    loaded,
    loading,
  };
}
