<template>
  <div class="container">
    <van-sidebar v-model="active">
      <van-sidebar-item v-for="item in 20" title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Category',
};
</script>
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0);
</script>

<style lang="scss" scoped></style>
