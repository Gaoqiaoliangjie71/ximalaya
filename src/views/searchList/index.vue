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

    <!--主播  -->
    <div>
      <!--Popup 弹出层  -->
      <van-cell title="‘米小圈’相关的主播" is-link @click="showPopup" />
      <van-popup v-model:show="show" :style="{ padding: '64px' }">
        内容
      </van-popup>

      <!--  -->
      <ul class="userList _wJ">
        <a class="userItem _wJ" href="/zhubo/68394601">
          <img class="anchorImage"
            src="http://imagev2.xmcdn.com/group76/M01/43/4C/wKgO3l5cYSaS5So6AADlDJbMOgU364.jpg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;712.01万</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/204618617"><img class="anchorImage"
            src="http://imagev2.xmcdn.com/group84/M0A/46/E5/wKg5Hl7godqgfkziAAD6IGosZk841.jpeg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈学堂</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;16.41万</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/130698896"><img class="anchorImage"
            src="http://imagev2.xmcdn.com/storages/a010-audiofreehighqps/BA/E3/GKwRINsGgx6cAAPoKQFtIsOZ.jpg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈的真真真真爱粉</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;1773</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/338991720"><img class="anchorImage"
            src="//imagev2.xmcdn.com/group61/M01/57/F1/wKgMcF1D2W-S6tE2AAADUIJ3rgc368.png">
          <div class="keepToTheRight">
            <p class="mixiaoquang">吾乃米小圈的老粉丝</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;952</p>
          </div>
        </a><a class="userItem _wJ" href="/zhubo/159752488"><img class="anchorImage"
            src="//imagev2.xmcdn.com/group61/M01/57/F1/wKgMcF1D2W-S6tE2AAADUIJ3rgc368.png">
          <div class="keepToTheRight">
            <p class="mixiaoquang">米小圈另一版本</p>
            <p class="ketang"><i class="xm-icon icon-user"></i>&nbsp;5350</p>
          </div>
        </a>
      </ul>
    </div>

    <!--专辑  -->
    <div>
      <!--Popup 弹出层  -->
      <van-cell title="‘米小圈’相关的专辑 " is-link @click="showPopup" />
      <van-popup v-model:show="show" :style="{ padding: '64px' }">
        专辑
      </van-popup>
      <ul class=" _wJ">
        <li class="resultItem _wJ">
          <div class="itemWrapper _wJ"><a href="/album/6233693">
              <div class="xm-album ">
                <div class="xm-album-cover rel cover cover _cC UX_" style="width: 70px; height: 70px;">
                  <img class="albumPictures" key=""
                    src="http://imagev2.xmcdn.com/group47/M0A/9C/59/wKgKk1tYNLzyfxrAAAIVC-YGMlU958.jpg!op_type=3&amp;columns=290&amp;rows=290&amp;magick=webp">
                  <div class="xm-album-cover__wrap UX_">
                    <div class="mask UX_"></div>
                    <div class="play-btn UX_"></div>
                  </div>
                </div>
                <div class="content _cC"
                  style="display: flex; flex-flow: row; justify-content: space-between; align-items: center;">
                  <div class="_cC">
                    <h3 class="xm-album__title" style="color: rgb(51, 51, 51);">米小圈上学记:一二三年级 |
                      畅销出版物&nbsp; </h3>
                    <p class="xm-album__subtitle">
                      上学趣事一箩筐，轻松搞定写日记！affjlg防水科技风扇电机开了个老顾客打开过考虑到高科技大家离开轨顶风道科技馆开了个店发了个考虑到设计费可好看了考虑肯定是付款计划考虑圣诞快乐很费劲看来是货到付款拉个领导看见回来看就开了格局啊感觉快进到佛冈看到过看到了看过第几个考虑机构贷款拉菲离开家阿哥
                    </p>
                    <div class="xm-album__info"><span class="user-channel ellipsis-1 _cC"><i
                          class="xm-icon icon-user"></i>&nbsp; 米小圈</span><span class="count _cC"><i
                          class="xm-icon icon-sound"></i>&nbsp; 282</span><span class="count _cC"><i
                          class="xm-icon icon-data"></i>&nbsp; 71.03亿</span></div>
                  </div>
                </div>
              </div>
            </a></div>
        </li>
      </ul>
    </div>

    <!-- 声音 -->
    <div>
      <!--Popup 弹出层  -->
      <van-cell title="‘米小圈’相关的声音 " is-link @click="showPopup" />
      <van-popup v-model:show="show" :style="{ padding: '64px' }">
        声音
      </van-popup>

      <!-- 相关的声音 -->
      <div class="hot-l w">
        <a href="javascript:;" class="hot-list">
          <div class="image">
            <img
              src="http://imagev2.xmcdn.com/group47/M0A/9C/59/wKgKk1tYNLzyfxrAAAIVC-YGMlU958.jpg!op_type=3&columns=290&rows=290&magick=webp" />
            <div class="mask">
              <van-icon name="play" size="20" />
            </div>
          </div>
          <div class="_cC">
            <h3 class="xm-album__title txt-1 ellipsis _cC" style="color: rgb(51, 51, 51);">米小圈上学记:一二三年级 | 畅销出版物&nbsp;
            </h3>
            <p class="xm-album__subtitle c9 _cC">上学趣事一箩筐，轻松搞定写日记！</p>
            <div class="xm-album__info c9 _cC"><span class="user-channel ellipsis-1 _cC"><i
                  class="xm-icon icon-user"></i>&nbsp; 米小圈</span><span class="count _cC"><i
                  class="xm-icon icon-sound"></i>&nbsp; 282</span><span class="count _cC"><i
                  class="xm-icon icon-data"></i>&nbsp; 71.03亿</span></div>
          </div>
        </a>
        <div class="line"></div>
      </div>
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
import { defineProps, ref, onMounted } from "vue";
import type { hot } from "../../api/home";
import { Swipe, SwipeItem } from 'vant';
import { createApp } from 'vue';
import { Tab, Tabs } from 'vant';
import type { tracklist, userslist, albumlist } from '@/api/search'
import searchApi from '@/api/search'

const show = ref(false);
const kw = ref()
const core = ref()
const category3List = ref<albumlist[]>([])
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

onMounted(() => {
  getList()
})
const page = 5;
const rows = 5;

// 获取请求实例的函数
function getList() {
  try {
    searchApi.findCategory4List({ kw: '米小圈', core: 'all', page, rows }).then((result: any) => {

      console.log(result);
      category3List.value=result.data.
      // category3List.value = result.
      console.log(result.data);
    })
  } catch (error) {
    console.log(error);
  }
}


</script>

<style lang="less" scoped>
.searchListPage {
  padding: 15px;

  .xm-album {
    margin-top: 20px;
  }

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
    background: red;
    color: #fff;
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
    // -webkit-box-align: center;
    // -ms-flex-align: center;
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
  .anchorImage {
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

  ._wJ {
    display: block;
    list-style-type: disc;
    // margin-block-start: 1em;
    // margin-block-end: 1em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    // padding-inline-start: 40px;
  }




  .xm-album__title {
    color: rgb(51, 51, 51);
    font-size: 16px;
    line-height: 1.38;
    overflow: hidden;
    white-space: nowrap;
    // text-overflow: ellipsis;
    // margin-top: -1px;
    margin: 1px 0 7px;
  }

  .xm-album .cover._cC {
    float: left;
    padding: 0 15px 0 0;
    background-color: #fff;
    // -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin-bottom: -1px;
  }
}

._cC {
  display: block;
}

.albumPictures {
  max-width: 100%;
  border: none;
  font-size: 10px;
}

.xm-album__subtitle {
  margin: 5px 0 7px;
  font-size: 13px;
  line-height: 1.38;
  color: #999;
  word-break: break-all; //单词内的断句
  overflow: hidden; //溢出隐藏
  text-overflow: ellipsis; //省略号
  display: -webkit-box; //将对象作为弹性伸缩盒子模型显示
  -webkit-box-orient: vertical; //设置弹性盒子的子元素的排列方式
  -webkit-line-clamp: 4; //设置显示文本的行数
}

.xm-album__info {
  font-size: 11px;
  line-height: 1.45;
  white-space: nowrap;
  // display: block;
  display: flex;
}

.relatedSounds {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

.resultItem._wJ {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 15px;
  position: relative;
  list-style: none;
}

.itemWrapper {
  width: 100px px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;

}

.xm-track {
  padding: 15px 0;
}

// .xm-track__wrap {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   position: relative;
//   padding-right: 60px;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   color: #7e8c8d;
//   text-decoration: none;
//   -webkit-backface-visibility: hidden;
//   border: none;
//   outline: 0;
// }

// .xm-track__cover {
//   width: 50px;
//   height: 50px;
//   -ms-flex-negative: 0;
//   flex-shrink: 0;
//   width: 44px;
//   height: 44px;
//   margin-right: 10px;
//   overflow: hidden;
//   border-radius: 50%;
//   float: left;
//   position: relative;
//   color: #7e8c8d;
//   cursor: pointer;
// }

// .play-btn-wrapper {
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, .3);
//   text-align: center;
// }

// .iconPlay-btn {
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, .3);
//   text-align: center;
//   position: relative;
//   left: 2px;
//   width: 16px;
//   height: 100%;
//   font-size: 16px;
//   cursor: pointer;
//   text-align: center;
//   font-size: 16px;
// }

.hot-l {
  .hot-list {
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;

    .image {
      position: relative;
      width: 70px;
      height: 70px;

      // padding-right: 20px;
      // border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        // border-radius: 10px;
        border-radius: 50%;
      }

      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        text-align: center;
        color: #fff;
        line-height: 70px;
        // margin-right: -10px;
        // padding: 20px;
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

  // ._cC {
  //   // margin-left: 40px;f
  //   // padding-lpx;
  // }
}
</style>





