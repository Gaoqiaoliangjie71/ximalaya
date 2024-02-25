<template>
  <a class="listens-list">
    <div class="post">
      <img
        :src="
          marking === 'ting'
            ? baseUrl + (item && item.albumCoverPath)
            : info && info.coverPath
        "
        alt=""
      />
      <div class="mask">
        <van-icon name="play-circle-o" size="20" />
        {{ marking === "ting" ? item && item.albumPlayCount :info && info.playCount }}
      </div>
    </div>
    <div class="texts">
      <p>
        {{ marking === "ting" ? item && item.intro : info && info.title }}
      </p>
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Listens",
});
</script>
<script setup lang="ts">
//传递过来的数据渲染
import type { albumData, limit } from "../../api/home";

//图片地址
const baseUrl = "https://imagev2.xmcdn.com/";
const props = defineProps<{
  item: albumData;
  info: limit;
  marking: string;
}>();
</script>

<style lang="less" scoped>
.listens-list {
  width: 115px;
  height: 168px;
  display: block;
  .post {
    width: 115px;
    height: 115px;
    position: relative;

    img {
      width: 115px;
      height: 115px;
      border-radius: 4px;
    }
    .mask {
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(
        180deg,
        rgba(3, 3, 3, 0) 9%,
        rgba(0, 0, 0, 0.58) 100%
      );
      width: 100%;
      height: 28px;
      line-height: 34px;
      border-radius: 0 0 4px 4px;
      font-size: 14px;
      color: #fff;
      .van-icon {
        .van-badge__wrapper::before {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .texts {
    padding: 6px 0 11px 0;
    font-size: 13px;
    line-height: 18px;
    height: 53px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    letter-spacing: 0.34px;
    p {
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
