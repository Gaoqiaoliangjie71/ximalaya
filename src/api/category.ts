import request from '@/utils/request'

interface resData<T> {
  data: T
  ret: number
}

export interface category1ListData {
  "id": number,
  "name": string,
  "title": string,
  "categoryType": number,
  "orderNum": number,
  "parentId": number,
  "isDisplay": boolean,
  "subCategories": subCategoriesData[]
}

export interface subCategoriesData {
  "id": number,
  "name": string,
  "displayName": string,
  "metadataValues": metadataValuesData[],
  "materialType"?: string
}

interface metadataValuesData {
  "id": number,
  "name": string,
  "displayName": string,
  "metadataValues"?: metadataValuesData[],
}

interface Detail {
  pageNum: number,
  pageSize: number,
  sort: number,
  categoryId: number
  metadataValues: string
}

interface DetailData {
  ret: number,
  data: ListData
}

export interface AlbumsData {
  albumCoverPath: string,
  albumId: number,
  albumPlayCount: number,
  albumSubscript: number,
  albumTitle: string,
  albumTrackCount: number,
  intro: string
}

interface ListData {
  currentUid: number,
  total: number,
  pageNum: number,
  pageSize: number,
  albums: AlbumsData[]
}





export default {
  findCategory: () => request.get<any, resData<category1ListData[]>>('/m-revision/page/category/queryCategoriesV2'),
  findCategoryList: (id: number) => request.get<any, resData<subCategoriesData[]>>(`/revision/category/v2/metadata/info?categoryId=${id}`),
  findCategoryListDetail: ({ pageNum, pageSize, sort, categoryId, metadataValues = '' }: Detail) => request.get<any, DetailData>(`/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=${sort}&categoryId=${categoryId}&metadataValues=${metadataValues}`),
}
