import request from '@/utils/request'

interface HotWordData {
  categoryName: string
  categoryId: string
}

interface categoryIdAndSize {
  categoryId: number,
  size: number
}

export default {
  findHotWord: () => request.get<any, HotWordData>('/hotWordBillboardCategory'),
  //https://search.ximalaya.com/
  findCategory2List: ({ categoryId, size }: categoryIdAndSize) => request.get(`/hotWordBillboard/list/2.0?categoryId=${categoryId}&size=${size}`)
}