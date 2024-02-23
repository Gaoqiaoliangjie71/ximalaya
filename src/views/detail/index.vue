<template>
  <div class="detail">
    <div class="header">头部</div>
    <div class="content">

    <!-- 第一个页面 -->
      <div class="desc">
        <div class="top">
          <div class="left">
            <img
              src="//imagev2.xmcdn.com/storages/5a86-audiofreehighqps/D8/E5/GKwRIJEFfkl9AAOIigD9zcBJ.png!op_type=3&columns=144&rows=144"
              alt="郭德纲21年相声精选">
          </div>
          <div class="right">
            <div class="title">郭德纲21年相声精选</div>
            <div class="auth">
              <img
                src="//imagev2.xmcdn.com/group1/M00/0B/3D/wKgDrlESHqyTqakZAADewk1yMt8360.jpg!op_type=5&device_type=ios&name=web_meduim&upload_type=cover&magick=webp"
                alt="">
              <span class="grey">德云社郭德纲相声VIP</span>
            </div>
            <div class="count grey">
              <span class="watch">
                <van-icon name="play-circle-o" />
                <span class="num">34.17亿</span>
              </span>
              <span class="watch">
                <van-icon name="certificate" />
                <span class="num">877.76万</span>
              </span>
            </div>
          </div>
        </div>
        <div class="middle" :style="{ 'height': isTextShow ? 'auto' : '100px' }">
          <div class="text" v-html="str"></div>
          <div class="transparent"></div>
          <div class="showMore">
            <van-icon name="arrow-double-right" color="red" class="rotate-90"/>
          </div>
        </div>
        <div class="btn">
          <div class="actionBtn">打开APP,完整收听</div>
        </div>
      </div>


    <!-- 第二个页面 -->
      <div class="courseList"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Detail',
};
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import detailApi, { type TrademarkData } from '@/api/detail'
// import { ElMessage } from 'element-plus';
// import { Plus } from '@element-plus/icons-vue'
// import type { UploadProps } from 'element-plus'

const str = ref("")
const isTextShow = ref(false)
onMounted(() => {
  const oldStr = "<p style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica,Arial,sans-serif;hyphens:auto;text-align:justify;\"><b><span><span><a ref=\"nofollow\" href=\"https://www.ximalaya.com/album/75632628\" style=\"color:#4990E2;text-decoration:none;\"><b>2023德云社线下相声专场，超全合集，点击收听~</b></a></span></span></b></p><p data-flag=\"normal\" style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica,Arial,sans-serif;hyphens:auto;text-align:justify;\"><b><a ref=\"nofollow\" href=\"https://www.ximalaya.com/album/77673191\" style=\"color:#4990E2;text-decoration:none;\"><b>张九龄2023年线下专场，全新上线~</b></a></b></p><p style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica,Arial,sans-serif;hyphens:auto;text-align:justify;\" data-flag=\"normal\"><b><a ref=\"nofollow\" href=\"https://www.ximalaya.com/album/77673191\" style=\"color:#4990E2;text-decoration:none;\"><b>孟鹤堂2023年线下专场，爆笑收听~</b></a></b></p><p style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica,Arial,sans-serif;hyphens:auto;text-align:justify;\" data-flag=\"normal\"><b><a ref=\"nofollow\" href=\"https://www.ximalaya.com/album/77673191\" style=\"color:#4990E2;text-decoration:none;\"><b>高峰栾云平2023年线下专场，独家首发~</b></a></b></p><p style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica,Arial,sans-serif;hyphens:auto;text-align:justify;\" data-flag=\"normal\"><b><a ref=\"nofollow\" href=\"https://www.ximalaya.com/album/75940105\" style=\"color:#4990E2;text-decoration:none;\"><b>2023张鹤伦线下相声专场，最新专场~</b></a></b></p><span><br /></span><span><br /></span><p style=\"color:#333333;font-weight:normal;font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;hyphens:auto;text-align:justify;\" data-flag=\"normal\"><b>高清！经典！免费！</b></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><b>郭德纲21年相声精选 强势来袭！</b></p><span><br /></span><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>老郭经典相声，入坑必备！</span></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>每一集都有你意料之外的包袱</span></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>每一场都是德云粉丝的必修课</span></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>每一句都是老郭的经典爆笑演绎</span></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>每一秒都是你不容错过的快乐时光</span></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><b>本专辑为喜马拉雅【音频独家】节目</b></p><p style=\"font-size:16px;line-height:30px;font-family:Helvetica, Arial, sans-serif;color:#333333;font-weight:normal;text-align:left;\" data-flag=\"normal\"><span>【德云更多精彩专辑，点击直达】</span></p><span><br /><br /></span>"
  str.value = oldStr.replace('\"', '"')
  console.log(str.value);
})


</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  font-size: 14px;

  .header {
    height: 50px;
    padding: 15px 15px 5px 15px;
    background-color: pink;
  }

  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

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

          .grey {
            color: #7e8c8d;
          }

          .title {
            font-size: 20px;
            font-weight: 600;
          }

          .auth>img {
            width: 24px;
            height: 24px;
            border-radius: 12px;
            margin: 10px 10px -8px 0;
          }

          .auth>span {
            display: inline-block;
            height: 34px;
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
        height:40px;
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

    }

    // 第二个页面
    

  }
}</style>
