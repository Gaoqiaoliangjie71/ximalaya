<template>
  <div class="detail">
    <div class="header">头部</div>
    <div class="content">
      <div class="desc">
        <div class="top">
          <div class="left">
            <img src="//imagev2.xmcdn.com/storages/5a86-audiofreehighqps/D8/E5/GKwRIJEFfkl9AAOIigD9zcBJ.png!op_type=3&columns=144&rows=144" alt="郭德纲21年相声精选" >
          </div>
          <div class="right">
            <div class="title">郭德纲21年相声精选</div>
            <div class="auth">
              <img src="//imagev2.xmcdn.com/group1/M00/0B/3D/wKgDrlESHqyTqakZAADewk1yMt8360.jpg!op_type=5&device_type=ios&name=web_meduim&upload_type=cover&magick=webp" alt="">
              <span class="grey">德云社郭德纲相声VIP</span>
            </div>
            <div class="count">
              <div class="left">
                <van-icon name="eye-o" />
                <span>34.17亿</span>
              </div>
              <div class="right">
                <van-icon name="certificate" />
                <span>877.76万</span>
              </div>
            </div>
          </div>
        </div>
        <div class="middle"></div>
      </div>
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
    height:50px;
    padding: 15px 15px 5px 15px;
    background-color: pink;
  }
  .desc{
    .top{
      display: flex;
      .left{
        height:150px;
        padding: 10px;
        img{
          width:120px;
          height:120px;
          border-radius: 10px;
        }
      }
      .right{
        width:200px;
        height:150rpx;
        .grey{
          color:#7e8c8d;
        }
        .title{
          font-size: 20px;
          font-weight: 600;
        }
        .auth>img{
          width:24px;
          height:24px;
          border-radius: 12px;
          margin: 10px 10px -8px 0;
        }
        .auth>span{
          display: inline-block;
          height:34px;
        }
      }
    }

  }
}
</style>
