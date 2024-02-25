import request from '@/utils/request'

export type DescData = {
  "id"?: number,
  "albumDetailInfo": DetailInfo,
  "albumRichInfo": {
    "richIntro": string,
  },
}
interface DetailInfo {
  "albumInfo": {
    "cover": string,
    "title": string,
    "albumWrap": {
      "title": string,
      "coverPath": string
    }
  },
  "statCountInfo": {
    "subscribeCount": number,
    "playCount": number,
  },
}
export type AuthData = {
  "id"?: number,
  "userInfo": {
    "logo": string,
    "nickname": string,
  },
}
export type ListData = {
  "id"?: number,
  "totalCount": number,
  "trackDetailInfos": ItemInfo[]
}
interface ItemInfo {
  "trackInfo": {
    "title": string,
  }
}
export type CommentData = {
  "comments": ComItemInfo[]
}
export interface ComItemInfo {
  "id": number,
  "nickname": string,
  "smallHeader": string,
  "content":string,
  "createdAt": number,
}
export type AuthWorkData={
  "albumBriefDetailInfos":AuthWorkItemInfo[]
}
export interface AuthWorkItemInfo {
  "albumInfo":{
    "cover":string,
    "title":string
  },
  "statCountInfo":{
    "playCount":number,
  }
}
export type SameWorkData={
  "album":{
    "docs":SameWorkItemInfo[]
  }
}
export interface SameWorkItemInfo {
  "coverPath":string,
  "title":string,
  "playCount":number
}
export type LikeWorkData={
  "albums":LikeWorkItemInfo[]
}
export interface LikeWorkItemInfo {
  "albumId":number,
  "albumCoverPath":string,
  "albumUserNickName":string,
  "albumTitle":string,
  "albumPlayCount":number,
  "intro":string,
}
export default {
  findCourseDesc: (id = 9723091) => request.get<any, DescData>(`/m-revision/page/album/v2/queryAlbumPage/${id}`),
  findAuth: (anchorId = 1000202) => request.get<any, AuthData>(`/m-revision/common/user/queryUserInfo/${anchorId}?userCountKeys=follower`),
  findCourseList: (flag: boolean) => request.get<any, ListData>(`/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=9723091&page=1&pageSize=10&asc=${flag}&countKeys=play%2Ccomment&v=1692018651710`),
  findComment: ({ page = 1, pageSize = 10, albumId = 9723091, v=1692064693595}) =>
    request.get<any, CommentData>(`/m-revision/common/album/queryAlbumCommentsByPage?page=${page}&pageSize=${pageSize}&albumId=${albumId}&v=${v}`),
  // 作者作品
  findAuthWork:({anchorId=1000202,page=1,pageSize=3,asc=false})=>
    request.get<any, AuthWorkData>(`/m-revision/common/anchor/queryAnchorAlbumsByPage?anchorId=${anchorId}&page=${page}&pageSize=${pageSize}&asc=${asc}`),
  // 相似专辑
  findSameWork:({kw="郭德纲21年相声精选",page=1,rows=6,device="iPhone",condition="relation",spellchecker=true,core='album'})=>
    request.get<any, SameWorkData>(`/revision/search/seo?kw=${kw}&page=${page}&rows=${rows}&device=${device}&condition=${condition}&spellchecker=${spellchecker}&core=${core}`),
  // 猜你喜欢
  findLike:({pageNum= 1,pageSize= 5,sort= 1})=>
    request.get<any, LikeWorkData>(`/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=${sort}`),
}