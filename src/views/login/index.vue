<template>
  <div class="container">
    <div class="loginPage">
      <div class="title-Picture">
        <!-- <img class="home-logo W_l" src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png"> -->
        <img class="image" src="../../assets/404_images/5eeac5376d63257e67421a3e6e0985bc.jpeg" alt="">
      </div>

      <van-tabs v-model:active="active">
        <van-tab title="密码登录">
          <div class="input-container">
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="tel" type="tel" label="手机号：" label-width="" placeholder="请输入手机号" />
            <van-field v-model="password" label="密码：" label-width="" placeholder="请输入密码" />

          </div>
          <van-button class="btn" color="#454545" size="large" round @click="loginHandle">登录</van-button>
          <van-checkbox v-model="checked" shape="square">首次登录会自动创建新账号，且代表同意
            <span class="orange">《用户服务协议》</span>
            和
            <span class="orange">《隐私政策》</span>
          </van-checkbox>
          <van-divider :hairline="false">其他登录方式</van-divider>
          <div class="icon">
            <img src="../../assets//icon/qq.png" alt="">
            <img src="../../assets//icon/weibo.png" alt="">
          </div>
        </van-tab>
        <van-tab title="验证码登录">内容 2</van-tab>
      </van-tabs>





    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
// import { } from ''
import loginApi from '@/api/login'
import { codeReg, phoneReg } from '@/utils/reg.ts'
import { showToast } from 'vant';
import { ElMessage } from 'element-plus'
import router from '@/router/index.ts'

const active = ref(0);
const tel = ref('13700000000');
const password = ref('111111');
const checked = ref(false);

//点击登录按钮的回调
async function loginHandle() {
  //验证手机号
  if (!phoneReg.test(tel.value)) {
    ElMessage({
      message: '请填写正确的手机号',
    })
    return
  }
  //验证密码
  if (!codeReg.test(password.value)) {
    ElMessage({
      message: '请填写正确的格式的密码',
    })
    return
  }
  if (!checked.value) {
    ElMessage({
      message: '请勾选用户协议',
    })
    return
  }

  await login()

  //登录成功跳转首页
  router.push('/home')


}

//登录的功能函数
async function login() {
  try {
    await loginApi.login({
      phone: tel.value,
      password: password.value
    })
    showToast('登录成功');
  } catch (error) {
    console.log(error);
  }
}


</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
}

.container {
  margin: 0 auto;

}

.loginPage {
  width: 90%;
  padding-top: 30px;
  margin: 0 auto;
  text-align: center;

  .title-Picture {

    // height:200px;
    //   width:200px;
    margin-bottom: 40px;

    .image {
      display: block;
      /* 让图像成为块元素 */
      margin-left: auto;
      /* 左边外边距自动调整到最大值 */
      margin-right: auto;
      /* 右边外边距自动调整到最大值 */
      height: 120px;
      width: 250px;
      backdrop-filter: 20px 20px;
    }

  }

  .input-container {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 40px;
  }


}

:deep(.van-tab--active) {
  color: #f86442;
}

:deep(.van-field__label) {
  font-weight: bold;
}

:deep(.van-checkbox__label) {
  font-size: 14px;
  color: #C1BCB3;
  margin-left: 0;
}

.van-checkbox {
  align-items: self-start;
}

.van-button {
  width: 300px;
}


.btn {
  margin-bottom: 40px;
}

.orange {
  color: #FF6243;
}

.van-checkbox {
  margin-bottom: 40px;
}

.van-divider {
  border-color: #D0CFD0;
  margin-bottom: 40px;

}

.icon {
  display: flex;
  justify-content: space-around;

  img {
    height: 20px;
    width: 20px;
  }
}
</style>