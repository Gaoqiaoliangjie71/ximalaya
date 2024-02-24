import request from '@/utils/request'

interface resData {
  data: category1ListData[]
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

interface subCategoriesData {
  "id": number,
  "name": string,
  "displayName": string,
  "metadataValues": metadataValuesData[],
  "materialType": string
}

interface metadataValuesData {
  "id": number,
  "name": string,
  "displayName": string,
}

export default {
  findCategory: () => request.get<any, resData>('/m-revision/page/category/queryCategoriesV2')
}
