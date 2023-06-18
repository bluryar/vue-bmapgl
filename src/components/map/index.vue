<script setup lang="tsx">
import { shallowRef } from 'vue';
import { useBMapGL } from './hooks/useBMapGL';

defineOptions({
  name: 'BMap',
});

const DOM = shallowRef<null | HTMLDivElement>(null);

const { loading } = useBMapGL({
  domRef: DOM,
});
</script>

<template>
  <div ref="DOM"></div>
</template>
