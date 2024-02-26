<template>
  <div class="searchListPage">

    <div class="listHeader">
      <div class="listPicture">
        <!-- <img class="home-logo W_l" src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png"> -->
        <img class="image" src="../../assets/imge.png" alt="">
      </div>
      <van-search show-action v-model="value" placeholder="请输入搜索关键词" @update:model-value="onSearch" />
      <van-button round type="success">打开APP</van-button>
    </div>

    <!-- Tab 标签页-->
    <van-tabs v-model:active="activeName">
      <van-tab title="全部"></van-tab>
      <van-tab title="专辑"></van-tab>
      <van-tab title="声音"></van-tab>
      <van-tab title="主播"></van-tab>
    </van-tabs>
    <div>
      <!--Popup 弹出层  -->
      <van-cell title="‘米小圈’相关的主播" is-link @click="showPopup" />
      <van-popup v-model:show="show" :style="{ padding: '64px' }">
        内容
      </van-popup>

      <!--  -->
      <ul class="userList _wJ">
        <a class="userItem _wJ" href="/zhubo/68394601">
          <img class="userCover _wJ"
            src="http://imagev2.xmcdn.com/group76/M01/43/4C/wKgO3l5cYSaS5So6AADlDJbMOgU364.jpg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;712.01万</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/204618617"><img class="userCover _wJ"
            src="http://imagev2.xmcdn.com/group84/M0A/46/E5/wKg5Hl7godqgfkziAAD6IGosZk841.jpeg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈学堂</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;16.41万</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/130698896"><img class="userCover _wJ"
            src="http://imagev2.xmcdn.com/storages/a010-audiofreehighqps/BA/E3/GKwRINsGgx6cAAPoKQFtIsOZ.jpg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈的真真真真爱粉</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;1773</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/338991720"><img class="userCover _wJ"
            src="//imagev2.xmcdn.com/group61/M01/57/F1/wKgMcF1D2W-S6tE2AAADUIJ3rgc368.png">
          <div class="keepToTheRight">
            <p class="mixiaoquang">吾乃米小圈的老粉丝</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;952</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/159752488"><img class="userCover _wJ"
            src="//imagev2.xmcdn.com/group61/M01/57/F1/wKgMcF1D2W-S6tE2AAADUIJ3rgc368.png">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈另一版本</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;5350</p>
          </div>
        </a>
      </ul>
    </div>

    <!--  Swipe 轮播 -->
    <van-swipe>
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <!-- <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template> -->
    </van-swipe>

    <div class="hot-2 w">
      <a href="javascript:;" class="hot-list">
        <div class="image">
          <img :src="item && item.albumCoverPath" alt="" />
          <div class="mask">
            <van-icon name="play" size="20" />
          </div>
        </div>
        <div class="context">
          <h4>{{ item && item.title }}</h4>
          <div class="play">
            <div>
              <van-icon name="user-o" />
              喜马头条
            </div>
            <div class="wan" v-if="type">
              <van-icon name="audio" />
              {{ item && item.playCount }}
            </div>
          </div>
        </div>
      </a>
      <div class="line"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HotList",
});




</script>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { hot } from "../../api/home";
import { Swipe, SwipeItem } from 'vant';
import { createApp } from 'vue';
import { Tab, Tabs } from 'vant';
// import { createApp } from 'vue';
// import { Popup } from 'vant';
// app.use(Popup);
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const app = createApp();
app.use(Tab);
app.use(Tabs);

app.use(Swipe);
app.use(SwipeItem);
const activeName = ref(0);
// return { active };
const onSearch = (val: string) => {

  // 这个是搜索的接口,根据输入的数据回车后调用接口根据关键词查询的数据
  // val其实也是搜索输入框的数据，用kw还是val都可以，一样的值
  try {
    // kw 没有传值把，你给我看看
  } catch (error) {
    console.log(error);
  }
};
//给一个标识判断是今日热点还是博客推荐
const props = defineProps<{
  type: boolean;
  item: hot;
}>();
</script>

<style lang="less" scoped>
.searchListPage {
  padding: 15px;

  .listHeader {
    display: flex;
    /* 创建Flex容器 */
    justify-content: center;
    /* 水平居中对齐子元素 */
    align-items: center;

    .image {
      // vertical-align: bottom; //设置垂直对齐方法
      height: auto;
      width: 95px;
      // border: 1px solid red;
      // backdrop-filter: 20px 20px;
    }
  }

  .van-search {
    width: 190px;
    height: 100%;
    border-radius: 5px;
    border-radius: var(--van-button-round-radius)
  }

  .userList._wJ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow-x: auto;
    margin: 15px 15px 0 15px;
    padding-bottom: 15px;
  }




  :deep(.van-field__control) {
    font-size: 10px;
  }

  :deep(.van-button--success) {
    width: 76px;
    height: 40px;
    color: red;
    background:red;
    color:#fff;
    border: var(--van-button-border-width) solid red;
    font-size: 10px;
    // padding-top: 10p;
    
  }



  :deep(van-button--normal) {
    margin: 20px;
  }

  .custom {
    width: 80px;
    font-size: 14px;
    text-align: center;
  }

  :deep(.van-cell__title) {
    // padding-top: 25px;
    font-size: 20px;

  }

  :deep(.van-cell--clickable) {
    padding-top: 30px;
    // font-size: 20px;
    // margin-top: 20PX;

  }

  .userItem._wJ {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 30px;
  }

  a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    border: none;
    outline: 0;
  }

  .keepToTheRight {
    display: block;

    .mixiaoquang {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 10px;
    }

    .ketang {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 10px;
    }
  }



  // .userCover _wJ img {
  //   width: 20px;
  //   height: 20px;
  // }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // margin-right: 5px;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    // background: rgba(0, 0, 0, 0.8);
  }


  .hot-2 {
    .hot-list {
      padding: 10px 0;
      box-sizing: border-box;
      display: flex;

      .image {
        position: relative;
        width: 70px;
        height: 70px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

        .mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.3);
          text-align: center;
          color: #fff;
          line-height: 70px;
        }
      }

      .context {
        width: 260px;
        margin: 0 auto;

        h4 {
          margin: 0;
          width: 100%;
          line-height: 20px;
          font-weight: 400;
          vertical-align: baseline;
          color: #40404c;
          font-size: 16px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }

        .play {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
          color: #7e8c8d;

          .wan {
            margin-left: 10px;
          }
        }
      }
    }

    .line {
      width: 100%;
      border-bottom: 1px solid #f6f7f8;
    }
  }
}
</style>





