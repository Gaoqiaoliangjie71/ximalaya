import request from '@/utils/request'
import postcss from 'postcss/lib/postcss'

export interface HotWordData {
  categoryName: string
  categoryId: string
}

interface categoryIdAndSize {
  categoryId: number,
  size: number
}
export interface keySonr {
  word: string,
  shift: number,
}

interface keySon {
  hotWordResultList: keySonr[]

}

interface keywordList {
  kw: string,
  paidFilter: String,
  scope: string,
}
interface album {
  id: 14967392,
  keyword: string,
  category: string,
  url: string,
  imgPath: string,
  tracks: number,
  highlightKeyword: string,
  play: number,
  isNoCopyright: boolean,
  is_paid: boolean,
}
interface query {
  id: number,
  keyword: string,
  recallCount: number,
  highlightKeyword: string,
}

interface res {
  albumResultNum: number,
  queryResultNum: number,
  albumResultList: album[],
  queryResultList: query[],
}

interface requestParameter {
  data: res,
  msg: string,
  ret: string,
}
interface searchResultsList {
  kw: string,
  core: string,
  page: number,
  rows: number,
}

interface albuminfolist {
  play: string,
  user_source: string,
  cover_path: string,
  title: string,
  uid: number,
  category_id: number,
  intro: string,
  recommend_reason: string,
  id: number,
  is_paid: boolean,
  is_finished: number,
  tags: string,
  category_title: string,
  created_at: number,
  albumType: number,
  type: string,
  is_v: true,
  refund_support_type: number,
  count_comment: number,
  score: number,
  price_type_id: number,
  updated_at: number,
  isVipFree: boolean,
  nickname: string,
  custom_title: string,
  verify_type: number,
  vipFreeType: number,
  albumVipPayType: number,
  serialState: number,
  price_type_enum: number,
  tracks: number,
  isNoCopyright: boolean,
  comments_count: number,

}
interface albumlist {
  albumInfo: albuminfolist,
}
interface album {
  albums: albumlist[],
  totalPage: number,
  start: number,
  pageSize: number,
  currentPage: number,
  total: number,
}
interface track {
  created_at: number,
  title: string,
  duration: number
  uid: number,
  category_id: number,
  updated_at: number,
  nickname: string,
  is_paid: false,
  id: number,
  verify_type: number,
  category_title: string,
  album_id: number,
  album_title: string,
  count_play: number,
  count_comment: number,
  count_share: number,
  count_like: number,
  album_cover_path: string,
  cover_path: string,
  type: number,
}
interface pageidex {
  id: number,
  categoryId: number,
  categoryName: string,
  categoryCode: string,
  pinyin: string,
  url: string

}
interface tracklist {
  trackInfo: track,
  pageUriInfo: pageidex,

}
interface track {
  tracks: tracklist[],
  totalPage: number,
  start: number,
  pageSize: number,
  currentPage: number,
  total: number,
}
interface users {
  uid: number,
  create_time: number,
  gender: string,
  isVerified: boolean,
  logoPic: string,
  last_update: number,
  nickname: string,
  isLoginBan: boolean,
  smallPic: string,
  vLogoType: number,
  verifyType: number,
  tracks_counts: number,
  followers_counts: number,
  followings_counts: number,
  updated_at: number,
  isVip: boolean,
  userGrade: number,
  anchorGrade: number
}

interface stat {
  id: string,
  albumCount: string
}

interface userslist {
  userInfo: users,
  statCountInfo: stat,
  url: string,
}
interface user {
  users: userslist[],
  start: number,
  pageSize: number,
  currentPage: number,
  total: number,
}
interface tabulation {
  albumViews: album,
  trackViews: track,
  userViews: user,
}
interface searchResult {
  ret: number;
  data: tabulation;
}

export default {
  findHotWord: () => request.get<any, HotWordData>('/hotWordBillboardCategory'),
  
  //https://search.ximalaya.com/
  findCategory2List: ({ categoryId, size }: categoryIdAndSize) =>
    request.get<any, keySon>(`/hotWordBillboard/list/2.0?categoryId=${categoryId}&size=${size}`),

  findCategory3List: ({ kw, paidFilter, }: keywordList) => 
  request.get<any, requestParameter>(`/revision/suggest?kw=${kw}&paidFilter=${paidFilter}&scope=all`),

  findCategory4List: ({ kw, core, page, rows }: searchResultsList) =>
   request.get<any, searchResult>(`/m-revision/page/search?kw=${kw}&core=${core}&page=${page}&rows=${rows}`)

}
// hotWordResultList