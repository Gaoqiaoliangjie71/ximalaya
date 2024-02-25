<template>
  <div class="context">
    <div class="open">
      <div class="logo"></div>
      <div class="group"></div>
      <div class="middle">
        <div class="btn red">下载喜马拉雅APP</div>
        <div class="btn" @click="back">返回页面</div>
        <p class="txt">已有6亿用户下载</p>
      </div>
      <div class="bottom">
        <div class="txt">开发者：喜大（上海）网络科技有限公司</div>
        <div class="txt">
              <span class="text">版本: V9.2.15</span>
              <span class="blue text"><a
              href="https://m.ximalaya.com/gatekeeper/growth-landing-page-h5/user-permisssion"
              >用户权限</a></span>
              <span class="blue text"><a
              href="https://passport.ximalaya.com/page/privacy_policy">隐私政策</a></span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Open',
};
</script>
<script lang="ts" setup>
import router from "@/router"
const back=()=>{
  router.go(-1)
}
</script>

<style lang="scss" scoped>
body,
html {
  font-family: 'lucida grande', 'lucida sans unicode', lucida, helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
}

.context {
  .open {
    .logo {
      margin: 14vh auto 0;
      height: 132px;
      width: 145px;
      background: url(https://imagev2.xmcdn.com/storages/6456-audiofreehighqps/2C/B4/GKwRINsGbH2dAABpVQFiAg3l.png) no-repeat;
      background-size: 100%;
    }

    .group {
      margin: 4vh auto 0;
      width: 280px;
      height: 47px;
      background: url(https://imagev2.xmcdn.com/storages/b227-audiofreehighqps/62/0D/GKwRIaIGbJK9AAAXzgFiEyYe.png) no-repeat;
      background-size: 100% 100%;
    }

    .middle {
      margin-top: 5vh;
      height: 137px;
      width: 100%;
      text-align: center;

      .btn {
        width: 240px;
        height: 36px;
        border-radius: 8px;
        line-height: 34px;
        text-align: center;
        font-size: 16px;
        background-color: #fff;
        color: #d1382d;
        border: 1px solid #d1382d;
        display: block;
        margin: 0 auto 2.7vh;
      }

      .red {
        color: #fff;
        background: #d1382d;
      }

      .txt {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #96a0ad;
        letter-spacing: 0;
        text-align: center;
        margin-top: 14px;
      }
    }

    .bottom {
      position: absolute;
      bottom:0;
      color: #202020;
      line-height: 16px;
      font-size: 12px;
      width: 100%;
      text-align: center;
      margin: 0 auto 12px;
      padding-top: 15px;
      left: 0;
      .txt{
        margin-bottom: 10px;
      }
      .text{
        padding-right:5px;
        margin-right:5px;
        border-right:1px solid #96a0ad;
      }
      .text:last-child{
        border-right:none;
      }
    }
  }
}
</style>
