<template>
  <div class="container">
    <!-- 头部logo -->
    <Header></Header>

    <!-- 搜索栏 -->
    <div class="search w">
      <van-icon name="search" />
      <input type="text" placeholder="搜索" />
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="transparent">
      <van-swipe-item>
        <img
          src="http://fdfs.xmcdn.com/storages/e6f1-audiofreehighqps/E2/BA/GMCoOSAHjVI3AAJDaQHpJk0H.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://fdfs.xmcdn.com/storages/e6f1-audiofreehighqps/E2/BA/GMCoOSAHjVI3AAJDaQHpJk0H.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://fdfs.xmcdn.com/storages/e6f1-audiofreehighqps/E2/BA/GMCoOSAHjVI3AAJDaQHpJk0H.jpg"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 导航栏 -->
    <div class="nav">
      <a class="nav-list" href="javascript:;">
        <img
          src="https://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png"
          alt=""
        />
        <text>排行榜</text>
      </a>
      <a class="nav-list" href="javascript:;">
        <img
          src="https://fdfs.xmcdn.com/group60/M02/18/F4/wKgLeVziZxHRlc-lAAAO9ZkPU-I489.png"
          alt=""
        />
        <text>分类</text>
      </a>
      <a class="nav-list" href="javascript:;">
        <img
          src="https://fdfs.xmcdn.com/group57/M0A/3B/D0/wKgLgVyQuqWRZsJtAAAnr8tg4rs307.png"
          alt=""
        />
        <text>电台</text>
      </a>
    </div>

    <!-- 广告 -->
    <a class="advertising" href="javascript:;">
      <img
        src="//imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png"
        alt=""
      />
    </a>

    <!-- 新人必听 -->
    <div class="listens-title">新人必听</div>
    <div class="listens w">
      <Listens
        v-for="item in listens"
        :key="item.albumId"
        :item="item"
        marking="ting"
      ></Listens>
    </div>

    <!-- 限时免费 -->
    <div class="time">
      <div class="listens-title">限时免费</div>
      <!-- 倒计时 -->
      <div class="timeLimit">{{ countdownDisplay }}</div>
    </div>
    <div class="time-list">
      <!-- 限时免费轮播图 -->
      <van-swipe :loop="false" indicator-color="transparent" :width="125">
        <van-swipe-item v-for="item in limitDatas" :key="item.id">
          <Listens :info="item" marking="xian"></Listens>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 今日热点 -->
    <div class="listens-title">今日热点</div>
    <div class="hot w">
      <HotList
        :type="true"
        v-for="item in hotDatas"
        :key="item.id"
        :item="item"
      ></HotList>
    </div>

    <!-- 博客推荐 -->
    <div class="listens-title">博客推荐</div>
    <div class="blog w">
      <HotList
        :type="false"
        v-for="item in hotDatas"
        :key="item.id"
        :item="item"
      ></HotList>
    </div>

    <!-- 底部 -->
    <div class="foot">
      <img
        src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png!magick=webp"
        alt=""
      />
      <p>© 2014-2024 喜马拉雅 版权所有</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import home from "../../api/home";

//新人必听
const listens = ref();
const total = ref();
const pageNum = ref(1);
const pageSize = ref(6);

//限时免费 今日热点
const limitOrHot = ref();
const limitDatas = ref();
const hotDatas = ref();

//新人必听 发请求获取数据
const findListen = async () => {
  try {
    const result = await home.getListen(pageNum.value, pageSize.value);
    total.value = result.data.total;
    listens.value = result.data.albums;
  } catch (error) {
    console.log(error);
  }
};

//限时免费 今日热点
const findLimitOrHot = async () => {
  try {
    const result = await home.getLimitOrHot();
    limitOrHot.value = result.data;
    limitDatas.value = result.data.limitedFreeAlbum.limitedTimeFreeAlbums;
    hotDatas.value = result.data.hotTrack.hotTracks;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 倒计时
const endTime = new Date("2024-02-25s 17:00:00").getTime(); //倒计时结束时间
const countdown = ref(Math.round((endTime - Date.now()) / 1000)); //初始化剩余时间
const countdownDisplay = computed(() => {
  const hours = Math.floor((countdown.value % 86400) / 3600);
  const minutes = Math.floor(((countdown.value % 86400) % 3600) / 60);
  const seconds = Math.floor(countdown.value % 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});
onMounted(() => {
  //倒计时
  setInterval(() => {
    //算出秒数
    countdown.value = (endTime - Date.now()) / 1000;
  }, 1000);

  //新人必听 挂载时获取数据
  findListen();
  //限时免费 今日热点
  findLimitOrHot();
});
</script>

<style lang="scss" scoped>
// 版心
.w {
  width: 96%;
  margin: 0 auto;
}
.container {
  height: 100%;
  width: 100%;
  .search {
    box-sizing: border-box;
    background-color: #eff1f4;
    height: 30px;
    display: flex;
    border-radius: 20px;
    .van-icon {
      font-size: 18px;
      margin: 7px 5px 0 5px;
    }
    input {
      width: 80%;
      font-size: 12px;
      border: none;
      height: 20px;
      margin-top: 5px;
      background-color: #eff1f4;
    }
  }

  .my-swipe {
    height: 100%;
    width: 98%;
    margin: 10px auto 0;
    .van-swipe__track {
      display: flex;
      width: 100%;
      .van-swipe-item {
        width: 100%;
        text-align: center;
        img {
          width: 332px;
          height: 130px;
          border-radius: 10px;
        }
      }
    }
  }

  .nav {
    width: 308px;
    height: 54px;
    margin: 20px auto 15px;
    display: flex;
    justify-content: space-around;
    .nav-list {
      display: inline-block;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 34px;
        height: 34px;
      }
      text {
        font-size: 12px;
        color: #666;
        line-height: 18px;
      }
    }
  }

  .advertising {
    width: 100%;
    height: 89px;
    display: block;
    img {
      width: 100%;
      height: 100%;
    }
  }

  //头部样式
  .listens-title {
    font-size: 18px;
    color: #40404c;
    line-height: 25px;
    margin: 17px 0 17px 15px;
    font-weight: 700;
  }

  .listens {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    flex-wrap: wrap;
    box-sizing: border-box;
    &::after {
      content: "";
      width: 115px;
    }
  }

  .time {
    display: flex;
    .timeLimit {
      width: 96px;
      height: 25px;
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      margin: 17px 0 17px 5px;
      background-color: #fa2800;
    }
  }
<<<<<<< HEAD

  .foot {
    width: 100%;
    height: 180px;
    background-image: url("https://imagev2.xmcdn.com/storages/2165-audiofreehighqps/52/6D/GKwRIDoF6Ml9AAESnAEaI6xF.png!magick=webp");
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;

    img {
      margin-top: 34px;
      width: 120px;
      height: 30px;
    }
    p {
      color: gray;
      font-size: 13px;
      font-weight: 400;
    }
  }
=======
>>>>>>> yxk
}
</style>
