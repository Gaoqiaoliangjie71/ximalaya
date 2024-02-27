<template>
  <div class="container">
    <!-- 头部搜索 -->
    <div class="header">
      <div class="back">
        <van-icon name="arrow-left" />
        音乐
      </div>
      <div class="center">搜索</div>
      <div class="right">打开APP</div>
    </div>

    <!-- 导航标签页 -->
    <van-tabs
      v-model:active="active"
      color="#FA2800"
      @change="changeStoreTitle(active)"
    >
      <div class="wrapper">
        <van-tab v-for="item in navList" :key="item.cid">
          <template #title> {{ item.title }}</template>
          <!-- card列表 -->
          <div class="categoryList">
            <!-- card -->
            <div
              class="categoryItem"
              v-for="item in subjectsList"
              :key="item.id"
            >
              <div class="categoryItem-content">
                <img :src="item.coverPathSmall" alt="" />
                <div class="article-description">
                  <div class="title">{{ item.title }}</div>
                  <div class="data-message">
                    <div class="play-message">
                      <van-icon name="play-circle-o" />
                      <div class="play-counts">{{ item.pageView }}</div>
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
              />
            </div>
          </div>
        </van-tab>
        <div class="down" @click.native="showCategory2 = !showCategory2">
          <van-icon name="arrow-down" v-if="!showCategory2" />
          <van-icon name="arrow-up" color="#FE8494" v-else />
        </div>
      </div>
    </van-tabs>
    <div class="please" v-if="showCategory2">&nbsp;&nbsp;请选择分类</div>
    <!-- 二级目录 -->
    <div class="category2" v-if="showCategory2">
      <div
        class="category2-item"
        v-for="(item, index) in navList"
        :key="item.cid"
        @click="category2Handle(index, item.name)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="loading">
      <van-loading
        type="spinner"
        color="#fa3c18"
        size="30"
        text-size="16"
        text-color="#fa3c18"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",
};
</script>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useListenStore } from "../../stores/listen";
import { storeToRefs } from "pinia";
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const listenStore = useListenStore();
const active = ref(1);
const showCategory2 = ref(false);
const { navList, subjectsList } = storeToRefs(listenStore);

onMounted(() => {
  listenStore.getListenCategoryData();
  listenStore.getNewListenCategoryData();
});

function category2Handle(id: number, name: string) {
  showCategory2.value = false;
  active.value = id;
  listenStore.title = navList.value[id].name;
  //重新获取列表
  listenStore.getNewListenCategoryData();
}

const changeStoreTitle = (active: number) => {
  listenStore.title = navList.value[active].name;
  // listenStore.title = "yinyue";
  listenStore.getNewListenCategoryData();
};
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
      justify-content: space-around;
      margin-top: 20px;
      // border: 1px solid blue;
      .tagbor {
        width: 125px;
        height: 50px;
        // border: 1px solid red;
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
    margin-top: 88px;
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

.header {
  position: fixed;
  top: 0;
  height: 32px;
  width: 100%;
  padding-top: 12px;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 12;
  // border: 2px solid red;
  .back {
    font-size: 18px;
    // border: 1px solid green;
  }
  .center {
    width: 180px;
    height: 28px;
    font-size: 12px;
    font-weight: 600;
    line-height: 28px;
    border-radius: 14px;
    color: #bbb;
    background-color: #eee;
    // border: 2px solid rgb(255, 45, 45);
    padding-left: 20px;
    margin: 0 10px;
  }
  .right {
    text-align: center;
    width: 65px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: rgb(255, 36, 36);
    border: 1.5px solid rgb(255, 36, 36);
    border-radius: 14px;
  }
}
.down {
  position: fixed;
  right: 0px;
  top: 44px;
  font-size: 14px;
  color: #a6a3ac;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 50px;
  z-index: 99;
  background-color: #fff;
  border-left: 0.5px solid #bbb;
  // border: 1px solid red;
}

.category2 {
  position: absolute;
  background-color: #fff;
  top: 88px;
  width: 100%;
  padding: 7.5px 2%;
  max-height: 330px;
  overflow-y: auto;
  border-bottom: 1px solid #e8e8e8;
}

.category2-item {
  width: 27.733%;
  height: 32px;
  margin: 7.5px 2%;
  font-size: 16px;
  color: #40404c;
  text-align: center;
  line-height: 32px;
  background: #f3f4f5;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.please {
  position: absolute;
  z-index: 10;
  top: 45px;
  width: 100%;
  background-color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #a3a3ac;
  letter-spacing: 0;
  text-align: left;
  line-height: 45px;
  display: inline-block;
  border-bottom: 1px solid #ddd;
  // border: 1px solid red;
}

:deep(.van-tabs__wrap) {
  border-bottom: 1px solid rgb(213, 213, 213);
}

:deep(.van-tabs__wrap) {
  position: fixed;
  top: 44px;
  z-index: 10;
}

.loading {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
</style>
