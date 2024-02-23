<template>
  <a class="listens-list">
    <div class="post">
      <img
        src="//imagev2.xmcdn.com/storages/b852-audiofreehighqps/F0/C4/GMCoOR8Io4MqAAaN9QJDxSiJ.jpg!op_type=3&columns=144&rows=144&magick=webp"
        alt=""
      />
      <div class="mask">
        <van-icon name="play-circle-o" size="20" />
        1262.86万
      </div>
    </div>
    <div class="texts">
      <p>
        【免费】荒岛求生|我和美女的超级荒岛|末日|野外探险|穿越冒险|末世|AI多播
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
<script setup lang="ts"></script>

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
