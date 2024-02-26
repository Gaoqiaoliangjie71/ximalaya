import { defineStore } from "pinia";
import rankApi from "../api/rank";
import type { tabList, RankListData } from "../api/rank";

interface RankStoreStateData {
  tabLists: tabList[];
  rankingId: number;
  rankListData: RankListData;
}

export const useRankStore = defineStore({
  id: "rank",
  state(): RankStoreStateData {
    return {
      tabLists: [],
      rankingId: 100006,
      rankListData: {
        currentUid: 0,
        rankList: [],
        rankingIds: [0],
      },
    };
  },
  actions: {
    async getTabLists() {
      try {
        const res = await rankApi.findRankTabs(1);
        // console.log(res);

        this.tabLists = res.data.tabLists;
      } catch (error) {
        console.log(error);
      }
    },
    async getRankListData(rankingid?: any) {
      try {
        rankingid && (this.rankingId = rankingid);
        const res = await rankApi.findRankList(this.rankingId);
        // console.log(res.data);

        this.rankListData.rankList = res.data.rankList[0].albums;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});
