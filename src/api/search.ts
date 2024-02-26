import request from '@/utils/request'

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

export default {
  findHotWord: () => request.get<any, HotWordData>('/hotWordBillboardCategory'),
  //https://search.ximalaya.com/
  findCategory2List: ({ categoryId, size }: categoryIdAndSize) => 
  request.get<any, keySon>(`/hotWordBillboard/list/2.0?categoryId=${categoryId}&size=${size}`),
  findCategory3List: ({ kw, paidFilter, }: keywordList) => 
  request.get<any, requestParameter>(`/revision/suggest?kw=${kw}&paidFilter=${paidFilter}&scope=all`)
}
// hotWordResultList