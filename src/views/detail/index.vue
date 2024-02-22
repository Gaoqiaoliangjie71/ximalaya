<template>
  <div class="detail">
    <div class="header">头部</div>
    <div class="content">
      <div class="desc">简介</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Detail',
};
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.detail {
  width:100%;
  height:100%;
  font-size: 14px;
  .header{
    height:50rpx;
    padding: 15rpx 15rpx 5rpx 15rpx;
    background-color: pink;
  }
}
</style>
