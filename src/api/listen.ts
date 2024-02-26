import request from '@/utils/request';

interface navList {
    cid?: number,
    title?: string,
    name?: string,
    pageView?: number,
}

interface ListenCategoryData {
    ret: number;
    msg: string;
    data: navList[];
}

interface SubjecData {
    id?: number,
    coverPathSmall?: string,
    title?: string,
    pageView?: string,
}

interface SubjectListData {
    pageNo: number,
    pageSize: number,
    hasMore: false,
    totalCount: number,
    categoryId: number,
    categoryName: string,
    categoryTitle: string,
    subjects: SubjecData[]
}

interface ListenCategorySubjectListData {
    ret: number,
    msg: string,
    data: SubjectListData
}

export default {
    // https://m.ximalaya.com/revision/subject/category
    findListenCategory: () =>
        request.get<any, ListenCategoryData>(`/revision/subject/category`),

    // https://m.ximalaya.com/revision/subject/categorySubjectList/{title}?pageNum={pageNum}&pageSize={pageSize}
    findListenCategorySubjectList: (title: string, pageNum: number, pageSize: number) =>
        request.get<any, ListenCategorySubjectListData>(`/revision/subject/categorySubjectList/${title}?pageNum=${pageNum}&pageSize=${pageSize}`)
}


