<template>
  <div class="rank">
    <van-tabs v-model:active="active" sticky>
      <van-tab v-for="item in tabLists" :id="item.id" :title="item.name">
        <div class="tab_content">
          <div class="left">
            <van-sidebar v-model="actt">
              <van-sidebar-item
                v-for="item2 in item.tabWraps"
                :id="item2.id"
                :title="item2.name"
              >
              </van-sidebar-item>
            </van-sidebar>
          </div>
          <div class="right">
            <div class="categoryList">
              <div
                v-for="item3 in rankListData.rankList"
                :id="item3.id"
                class="categoryItem"
              >
                <div class="categoryItem-content">
                  <img :src="`http://fdfs.xmcdn.com/${item3.cover}`" alt="" />
                  <div class="article-description">
                    <div class="title">
                      {{ item3.albumTitle }}
                    </div>
                    <div class="data-message">
                      <div class="play-message">
                        <van-icon name="play-circle-o" />
                        <div class="play-counts">{{ item3.playCount }}</div>
                      </div>
                      <div class="update-time">
                        {{ item3.lastUptrackAtStr }}更新
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
export default {
  name: "Rank",
};
</script>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRankStore } from "../../stores/rank";
import { storeToRefs } from "pinia";
// import type { SidebarProps, SidebarItemProps } from "vant";
const rankStore = useRankStore();
const active = ref(0);
const actt = ref(0);

const { tabLists, rankListData, rankingId } = storeToRefs(rankStore);
onMounted(() => {
  rankStore.getTabLists();
  rankStore.getRankListData();

  // console.log(tabLists);
});
// const changeRankingId = (rankingid: number) => {
//   rankingId = rankingid;
// };
</script>

<style lang="less" scoped>
// .item {
//   border-bottom: 1px solid gray;
// }
.tab_content {
  width: 100%;
  height: 100%;
  display: flex;
  // border: 1px solid red;
}
.left {
  width: 22%;
  // border: 1px solid green;
}
.right {
  width: 78%;
  // border: 1px solid blue;
}

.categoryList {
  .categoryItem {
    .categoryItem-content {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      border: 1px solid red;
      img {
        margin-left: 8px;
        border-radius: 4px;
        width: 70px;
      }
      .article-description {
        margin: 0 20px 2px 10px;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // margin-top: -10px;
        // border: 2px solid yellow;
        .title {
          font-size: 16px;
          font-weight: 600;
          // border: 2px solid blue  .data-message {
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
</style>
