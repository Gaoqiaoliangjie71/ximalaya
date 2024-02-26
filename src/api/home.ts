import request from '../utils/request';

//新人必听
export interface listenDatas {
    ret: number,
    data: listenData
}

export type listenData = {
    currentUid: number,
    total: number,
    pageNum: number,
    pageSize: number,
    albums: albumData[]
}

export interface albumData {
    albumId: number,//专辑id
    albumPlayCount: number,//专辑播放数
    albumTrackCount: number,//专辑数量
    albumCoverPath: string,//专辑封面路径
    albumTitle: string,//专辑名称
    albumUserNickName: string,//专辑用户名称
    anchorId: string,//
    anchorGrade: number,
    isDeleted: boolean,//删除
    isPaid: boolean,//支付
    isFinished: number
    albumUrl: string,
    intro: string,//介绍
    vipType: number,
    logoType: number,
    albumSubscript: number,
}



//限时免费 今日热点
export type limitOrHotData = {
    code: number,
    msg: string,
    data: LimitOrHot
}
export type LimitOrHot = {
    hotTrack: hotData,
    limitedFreeAlbum: limitData
}
export type hotData = {
    hotTracks: hot[]
}

export type hot = {
    id: number,
    index: number,
    trackId: number,
    isPaid: boolean,
    tag: number,
    title: string,
    playCount: number,
    showLikeBtn: boolean,
    isLike: boolean,
    showShareBtn: boolean,
    showForwardBtn: boolean,
    createDateFormat: string,
    url: string,
    duration: number,
    albumId: number,//id
    albumCoverPath: string,//地址
    anchorId: number,
    anchorName: string,
    uid: string
}

export type limit = {
    id: number,
    title: string,
    coverPath: string,
    playCount: number,
    uid: number
}

export type limitData = {
    remainingTime: number,
    limitedTimeFreeAlbums: limit[]
}



//主页请求
export default {
    //新人必听
    //https://m.ximalaya.com/revision/category/v2/albums?pageNum={pageNum}&pageSize={pageSize}&sort=1
    getListen(pageNum: number, pageSize: number) {
        return request.get<any, listenDatas>(`/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=1`)
    },

    //限时免费 今日热点
    //https://m.ximalaya.com/web-site/main/page
    getLimitOrHot() {
        return request.get<any, limitOrHotData>('/web-site/main/page')
    }
}