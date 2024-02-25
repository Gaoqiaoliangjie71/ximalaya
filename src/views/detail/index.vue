<template>
  <div class="detail">
    <Header></Header>
    <div class="content">

      <!-- 第一个页面,作品介绍 -->
      <div class="desc">
        <div class="top">
          <div class="left">
            <img :src="'//imagev2.xmcdn.com/' + descInfo.albumDetailInfo.albumInfo.cover" alt="郭德纲21年相声精选">
          </div>
          <div class="right">
            <div class="title">{{ descInfo.albumDetailInfo.albumInfo.title }}</div>
            <div class="auth">
              <img :src="'//imagev2.xmcdn.com/' + auth.userInfo.logo" alt="">
              <span class="grey">{{ auth.userInfo.nickname }}</span>
            </div>
            <div class="count grey">
              <span class="watch">
                <van-icon name="play-circle-o" />
                <span class="num">{{ (descInfo.albumDetailInfo.statCountInfo.playCount / 100000000).toFixed(2) }} 亿</span>
              </span>
              <span class="watch">
                <van-icon name="certificate" />
                <span class="num">{{ (descInfo.albumDetailInfo.statCountInfo.subscribeCount / 10000).toFixed(2) }}
                  万</span>
              </span>
            </div>
          </div>
        </div>
        <div class="middle" :style="{ 'height': isTextShow ? 'auto' : '100px' }">
          <div class="text" v-html="str"></div>
          <div class="transparent" v-show="!isTextShow"></div>
          <div class="showMore" @click="isTextShow = true" v-show="!isTextShow">
            <van-icon name="arrow-double-right" color="red" class="rotate-90" />
          </div>
        </div>
        <div class="btn">
          <div class="actionBtn">打开APP,完整收听</div>
        </div>
      </div>


      <!-- 第二个页面，课程列表 -->
      <div class="courseList">
        <div class="courseTop">
          <div class="courseLeft">节目（{{ totalCount }}）</div>
          <div class="courseRight grey" @click="sortHandle">
            <van-icon name="sort" />
            <span>切换顺序</span>
          </div>
        </div>
        <div class="courseMiddle" v-for="(item, index) in courseList" :key="index">
          <div class="leftMiddle">
            <div class="titleMiddle">{{ item.trackInfo.title }}</div>
            <div class="descMiddle grey">
              <span><van-icon name="play-circle-o" /> 9744.94万</span>
              <span><van-icon name="clock-o" /> 22:57</span>
            </div>
          </div>
          <div class="rightMiddle">
            <van-icon color="#ff4646" name="play-circle-o" />
          </div>
        </div>
        <div class="courseMore">
          <span>加载更多</span>
          <van-icon name="arrow-down" />
        </div>
      </div>
      <!-- 主播作品 -->
      <div class="comment">
        <div class="comTitle">
          主播作品
        </div>
        <div class="album">
          <div class="album-item" v-for="(item, index) in albumBriefDetailInfos" :key="index">
            <img class="top" :src="baseurl + item.albumInfo.cover">
            <p class="center">
            <div class="care">
              <van-icon name="play" />
            </div>
            <div class="text"> {{ (item.statCountInfo.playCount / 10000).toFixed(2) }}万 </div>
            </p>
            <p class="bottom">{{ item.albumInfo.title }}</p>
          </div>
        </div>
      </div>

      <!-- 第三个页面，评价信息 -->
      <div class="comment">
        <div class="comTitle">
          用户评价
        </div>
        <ul class="comContext" :style="{ 'height': isComShow ? 'auto' : '300px' }">
          <li v-for="item in commentList" :key="item.id">
            <div class="comLeft">
              <img :src="'//imagev2.xmcdn.com/' + item.smallHeader" alt="">
            </div>
            <div class="comRight">
              <div class="comTop">{{ item.nickname }}</div>
              <div class="comMiddle" v-html="item.content"></div>
              <div class="comBottom">
                <div class="bomLeft">
                  <span>回复 </span>
                  <span> {{ makeData(item.createdAt) }}</span>
                </div>
                <div class="bomRight">
                  <span>976 </span>
                  <van-icon name="good-job-o" />
                </div>
              </div>
            </div>
          </li>
          <div class="comBom" v-show="!isComShow">
            <div class="transparent"></div>
            <div class="showMore" @click="isComShow = true">
              <van-icon name="arrow-double-right" color="red" class="rotate-90" />
            </div>
          </div>
        </ul>
        <div class="moreCom">
          查看更多评价
        </div>
      </div>

      <!-- 相似专辑 -->
      <div class="comment">
        <div class="comTitle">
          相似专辑
        </div>
        <div class="album-ver">
          <div class="album-item" v-for="(item, index) in sameWorkList" :key="index">
            <img class="top" :src="`https://imagev2.xmcdn.com/${item.coverPath}`">
            <p class="center">
            <div class="care">
              <van-icon name="play" />
            </div>
            <div class="text"> {{ (item.playCount / 10000).toFixed(2) }}
              万</div>
            </p>
            <p class="bottom">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <!-- 换一批 -->
      <div class="refresh">
        <van-button class="refreshBtn" type="danger" round>
          <van-icon name="replay" />
          换一批
        </van-button>
      </div>
      <!-- 猜你喜欢 -->
      <div class="hotspot">
        <div class="hot">猜你喜欢</div>
        <div class="item" v-for="item in likeList" :key="item.albumId">
          <div class="img">
            <img :src="`https://imagev2.xmcdn.com/${item.albumCoverPath}`" alt="">
            <div class="caret">
              <van-icon name="play" />
            </div>
          </div>
          <div class="right">
            <h4>{{ item.albumTitle }}</h4>
            <div class="descMiddle">{{ item.intro }}</div>
            <div class="decsBottom">
              <span>
                <van-icon name="manager-o" />
                <span>{{ item.albumUserNickName }}</span>
              </span>
              <span>
                <van-icon name="service" />
                <span>{{ item.albumPlayCount > 100000000 ? (item.albumPlayCount / 100000000).toFixed(2) :
                  (item.albumPlayCount /
                    10000).toFixed(2) }} {{ item.albumPlayCount > 100000000 ? "亿" : "万" }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="btn" v-show="localBtnShow">
        <div class="localBtn">APP内打开</div>
      </div>
    </div>

     <!-- 底部 -->
     <div class="footer">
        <img class="bg-img"
          src="https://imagev2.xmcdn.com/storages/2165-audiofreehighqps/52/6D/GKwRIDoF6Ml9AAESnAEaI6xF.png!magick=webp">
        <img
          class="footer-logo"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png!magick=webp">
        <div class="copyright grey">
          <p>© 2014-<!-- -->2024<!-- --> 喜马拉雅 版权所有</p>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Detail',
};
</script>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import detailApi, { AuthData, AuthWorkItemInfo, ComItemInfo, LikeWorkItemInfo, SameWorkItemInfo } from '../../api/detail'
import { DescData } from '../../api/detail';

// 第一个页面
const str = ref("")
const isTextShow = ref(false)
const descInfo = ref<DescData>(
  {
    "albumDetailInfo": {
      "albumInfo": {
        "cover": '',
        "title": '',
        "albumWrap": {
          "title": '',
          "coverPath": '',
        }
      },
      "statCountInfo": {
        "subscribeCount": 0,
        "playCount": 0,
      }
    },
    "albumRichInfo": { "richIntro": "" }
  })
const getDesc = async () => {
  try {
    const res = await detailApi.findCourseDesc()
    descInfo.value = res.data
    str.value = descInfo.value.albumRichInfo.richIntro.replace('\"', '"')
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}
const auth = ref<AuthData>({
  userInfo: {
    "logo": "",
    "nickname": "",
  }
})
const getAuth = async () => {
  try {
    const res = await detailApi.findAuth()
    auth.value = res.data
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}
// 第二个页面
const flag = ref(true)
const totalCount = ref()
const courseList = ref()
const getList = async () => {
  try {
    const res = await detailApi.findCourseList(flag.value)
    totalCount.value = res.data.totalCount
    courseList.value = res.data.trackDetailInfos
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}
const sortHandle = () => {
  flag.value = !flag.value
  getList()
}
// 第三个页面，评价
const isComShow = ref(false)
const commentList = ref<ComItemInfo[]>()
const getComment = async () => {
  try {
    const res = await detailApi.findComment({})
    commentList.value = res.data.comments
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}
// 对时间戳处理的函数
const makeData = (time: number) => {
  // 创建一个新的Date对象，并传入时间戳作为参数
  const dateObj = new Date(time); // 注意时间戳单位是秒，而不是毫秒

  // 使用Date对象的方法获取年、月、日等日期信息
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');

  // 组合得到完整的日期字符串
  const formattedDateTime = `${year}-${month}-${day}`;
  return formattedDateTime
}

// 固定定位的按钮是否展示
const localBtnShow = ref(false)
const scrolling = () => {
  // 滚动条距文档顶部的距离
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  // console.log("header 滚动距离 ", );
  if (scrollTop > 600) {
    localBtnShow.value = true
  } else {
    localBtnShow.value = false
  }

};

const baseurl = ref('https://imagev2.xmcdn.com/');
const albumBriefDetailInfos = ref<AuthWorkItemInfo[]>([]);
// 作者作品
const getAuthWork = async () => {
  try {
    const res = await detailApi.findAuthWork({})
    albumBriefDetailInfos.value = res.data.albumBriefDetailInfos
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}


const sameWorkList = ref<SameWorkItemInfo[]>([])
// 相似作品
const getSameWork = async () => {
  try {
    const res = await detailApi.findSameWork({})
    sameWorkList.value = res.data.album.docs
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}

// 猜你喜欢
const likeList = ref<LikeWorkItemInfo[]>([])
const getGuessLike = async () => {
  try {
    const res = await detailApi.findLike({})
    likeList.value = res.data.albums
  } catch (error) {
    console.log("获取介绍信息失败");
  }
}
// 挂载请求数据
onMounted(async () => {
  getDesc()
  getAuth()
  getList()
  getComment()
  window.addEventListener("scroll", scrolling);
  getAuthWork()
  getSameWork()
  getGuessLike()
})
onUnmounted(() => {
  window.removeEventListener("scroll", scrolling);
})

</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  font-size: 14px;

  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    .grey {
      color: #7e8c8d;
    }

    // 第一个页面
    .desc {
      .top {
        display: flex;

        .left {
          height: 120px;
          padding: 10px;

          img {
            width: 120px;
            height: 120px;
            border-radius: 10px;
          }
        }

        .right {
          margin-top: 10px;
          width: 200px;
          height: 110rpx;

          .title {
            font-size: 20px;
            font-weight: 600;
          }

          .auth {
            display: flex;
          }

          .auth>img {
            width: 24px;
            height: 24px;
            border-radius: 12px;
            margin: 10px 10px -8px 0;
          }

          .auth>span {
            margin-top: 5px;
            display: block;
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            overflow: hidden;
          }

          .count {
            font-size: 12px;

            .watch {
              margin-right: 15px;

              .num {
                margin-left: 5px;
              }
            }
          }
        }
      }

    }

    .middle {
      position: relative;
      margin-top: 15px;
      padding-left: 10px;
      padding-bottom: 5px;
      overflow: hidden;

      .text :deep(*) {
        color: rgba(0, 0, 0, .8) !important;
        font-size: 14px !important;
        line-height: 21px !important;
        margin: 0;
      }

      .transparent {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 40px;
        height: 60px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .showMore {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: #fff;
        height: 40px;
        line-height: 40px;
        background-color: #fff;

        .rotate-90 {
          transform: rotate(90deg);
        }
      }
    }

    .btn {
      width: 345px;

      .actionBtn {
        margin: 20px auto 0;
        width: 250px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #ff4646;
        color: #fff;
        font-size: 15px;
        border-radius: 20px;
        animation: jump 1s linear infinite alternate;
      }

      @keyframes jump {
        0% {
          transform: scale(0.95);
        }

        25% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.05);
        }

        75% {
          transform: scale(1);
        }

        100% {
          transform: scale(0.95);
        }
      }

      .localBtn {
        margin: 20px auto 0;
        width: 110px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background-color: #ff4646;
        color: #fff;
        font-size: 14px;
        border-radius: 20px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 20px;
      }
    }

    // 第二个页面
    .courseList {
      margin-top: 20px;
      padding: 10px;

      .courseTop {
        display: flex;
        justify-content: space-between;

        .courseLeft {
          font-size: 18px;
          font-weight: 700;
        }

        .courseRight {
          font-size: 14px;
        }
      }

      .courseMiddle {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #f3f4f5;

        .leftMiddle {
          .titleMiddle {
            font-size: 16px;
          }

          .descMiddle {
            font-size: 12px;
            padding-left: 7px;
            padding-top: 7px;

            span {
              margin-right: 40px;
            }
          }
        }

        .rightMiddle {
          font-size: 30px;
          text-align: center;
        }
      }

      .courseMore {
        color: #ff4646;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
    }

    // 第三个页面
    .comment {
      padding: 10px 10px 0;

      .comTitle {
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        color: #333;
        margin-bottom: 20px;
      }

      .comContext {
        position: relative;
        overflow: hidden;

        li {
          margin-top: 10px;
          display: flex;
        }

        .comLeft {
          width: 40px;
          margin-right: 10px;

          img {
            width: 36px;
            height: 36px;
            border-radius: 18px;
          }
        }

        .comRight {
          width: 280px;

          .comTop {
            line-height: 20px;
            margin-bottom: 4px;
            color: #666;
            display: inline-block;
          }

          .comMiddle {
            text-align: justify;
            color: #333;
            line-height: 23.5px;

            :deep(.emoji) {
              width: 16px;
              height: 16px;
            }
          }

          .comBottom {
            display: flex;
            justify-content: space-between;
            line-height: 18px;
            margin-top: 8px;
            font-size: 12px;
            color: #666;
          }
        }

        .comBom {
          .transparent {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 40px;
            height: 100px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
          }

          .showMore {
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: #fff;
            height: 40px;
            line-height: 40px;
            background-color: #fff;

            .rotate-90 {
              transform: rotate(90deg);
            }
          }
        }
      }

      .moreCom {
        color: #ff4646;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        height: 50px;
        line-height: 50px;
        margin-top: 10px;
      }
    }

    .album {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .album-item {
        width: 103.5px;
        position: relative;
        margin-bottom: 5px;

        .top {
          width: 103.5px;
          height: 103.5px;
          border-radius: 3%;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 73px;

          .care {
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            background-color: #62626477;
            border-radius: 50%;
            overflow: hidden;
            padding-right: 2px;
            margin-right: 5px;
            margin-left: 3px;
            color: #fff;

          }

          .text {
            color: rgb(255, 255, 255);
            font-weight: 700;
            font-size: 12px;
          }
        }

        .bottom {
          overflow: hidden;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          font-size: 14px;
        }
      }
    }

    .album-ver {

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .album-item {
        width: 103.5px;
        position: relative;
        margin-bottom: 5px;

        .top {
          width: 103.5px;
          height: 103.5px;
          border-radius: 3%;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 73px;

          .care {
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            background-color: #62626477;
            border-radius: 50%;
            overflow: hidden;
            padding-right: 2px;
            margin-right: 5px;
            margin-left: 3px;
            color: #fff;

          }

          .text {
            color: rgb(255, 255, 255);
            font-weight: 700;
            font-size: 12px;
          }
        }

        .bottom {
          overflow: hidden;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          font-size: 14px;
        }
      }
    }

    .refresh {
      text-align: center;

      .refreshBtn {
        width: 90px;
        height: 30px;
        text-align: center;
        font-size: 12px;
      }
    }

    .hotspot {
      padding: 15px 15px 0;
      background-color: #fff;

      .hot {
        color: #333;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 15px;
      }

      .item {
        padding: 15px 0;
        display: flex;
        border-bottom: 1px solid #f3f4f5;

        .img {
          width: 70px;
          height: 70px;
          margin-right: 15px;
          overflow: hidden;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          position: relative;

          img {
            width: 70px;
            height: 70px;
          }

          .caret {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 70px;
            font-size: 35px;
            background: rgba(0, 0, 0, .3);
            color: #fff;
          }
        }

        .right {
          h4 {
            width: 250px;
            margin: 5px 0;
            color: #40404c;
            height: 20px;
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .descMiddle {
            margin-bottom: 5px;
            width: 250px;
            font-size: 13px;
            color: #999;
            height: 20px;
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .decsBottom {
            font-size: 12px;
            line-height: 1.5;
            color: #999;

            span {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  .footer{
    position: relative;
    width:375px;
    height:160px;
    text-align: center;
    .bg-img{
      width:100%;
      height:180px;
      position: absolute;
      bottom:0;
      left:0;
      right:0;
      z-index: -1;
    }
    .footer-logo{
      width:120px;
      margin: 20px auto 0;
    }
    .copyright{
      font-size: 12px;
      width:100%;
      padding: 0;
    }
  }
}
</style>
