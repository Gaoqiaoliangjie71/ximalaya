<template>
  <div class="container">
    <!-- 下拉组件测试 -->
    <div class="xiala">
      <van-cell is-link @click="showPopup" />
      <van-popup
        v-model:show="show"
        position="top"
        closeable
        :style="{ height: '30%' }"
      >
        <div class="tags-title">请选择分类</div>
        <div class="tags">
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
          <div class="tagbor">
            <div class="tag">体育资讯</div>
          </div>
        </div></van-popup
      >
    </div>
    <!-- 导航标签页 -->
    <van-tabs v-model:active="active" animated color="#FA2800" sticky>
      <van-tab title="标签 1">
        <!-- card列表 -->
        <div class="categoryList">
          <!-- card -->
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
          <div class="categoryItem">
            <div class="categoryItem-content">
              <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
              <div class="article-description">
                <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
                <div class="data-message">
                  <div class="play-message">
                    <van-icon name="play-circle-o" />
                    <div class="play-counts">34</div>
                  </div>
                  <div class="update-time">2035-2-43更新</div>
                </div>
              </div>
            </div>
            <van-divider
              :style="{
                borderColor: '#bbb',
                padding: '0 0 0 16px',
                margin: '0',
              }"
            >
            </van-divider>
          </div>
        </div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const value1 = ref(0);
const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];

const active = ref(0);
const activeNames = ref(["1"]);
</script>

<style lang="less" scoped>
.container {
  .xiala {
    position: relative;
    top: 40px;
    display: flex;
    width: 40px;
    height: 40px;
    margin-left: auto;
    // border: 2px solid greenyellow;
    z-index: 100;
    .tags-title {
      text-align: center;
      font-size: 16px;
      margin-top: 45px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      // border: 1px solid blue;
      .tagbor {
        width: 33.3%;
        height: 50px;
        // border: 1px solid red;
        margin: auto;
        .tag {
          margin: auto;
          background-color: #f5f5f5;
          text-align: center;
          align-items: center;
          font-size: 16px;
          line-height: 38px;
          width: 84%;
          height: 38px;
          border-radius: 5px;
        }
      }
    }
  }
  .categoryList {
    .categoryItem {
      .categoryItem-content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 94px;
        // border: 1px solid red;
        img {
          margin-left: 8px;
          border-radius: 4px;
          width: 70px;
        }
        .article-description {
          margin: 0 15px 2px 10px;
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // margin-top: -10px;
          // border: 2px solid yellow;
          .title {
            font-size: 16px;
            font-weight: 600;
            // border: 2px solid blue;
          }
          .data-message {
            font-size: 12px;
            color: #999;
            display: flex;
            // border: 1px solid red;
            .play-message {
              display: flex;
              align-items: center;
              // border: 1px solid blue;
              .play-counts {
                margin-left: 6px;
                margin-bottom: 2px;
              }
            }
            .update-time {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
