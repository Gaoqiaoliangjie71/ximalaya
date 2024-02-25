import request from "@/utils/request";

interface tabWraps {
  tabId: number;
  id: number;
  name: string;
  position: number;
  rankingId: number;
}

export interface tabList {
  id: number;
  name: string;
  position: number;
  sceneId: number;
  tabWraps: tabWraps[];
}

interface TabData {
  sceneId: number;
  tabLists: tabList[];
  msg: string;
  ret: number;
}

interface rankList {
  id?: string;
  albumTitle?: string;
  playCount?: string;
  lastUptrackAtStr?: string;
  cover?: string;
}

export interface RankListData {
  currentUid: 0;
  rankList: rankList[];
  rankingIds: [number];
}

export default {
  // https://m.ximalaya.com/revision/rank/v4/rankTabs?sceneId={sceneId}
  findRankTabs: (sceneId: number) =>
    request.get<any, TabData>(`/revision/rank/v4/rankTabs?sceneId=${sceneId}`),

  // https://m.ximalaya.com/revision/rank/v4/element?rankingId={rankingId}
  findRankList: (rankingId: number) =>
    request.get<any, RankListData>(
      `/revision/rank/v4/element?rankingId=${rankingId}`
    ),
};
