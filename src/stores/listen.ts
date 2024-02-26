import { defineStore } from "pinia";
import listenApi from '../api/listen'
import type { ListenCategoryData, navList, SubjecData } from '../api/listen'

interface ListenStoreStateDate {
    navList: navList[],
    ab: string,
    title: string,
    pageNum: number,
    pageSize: number,
    subjectsList: SubjecData,
}

export const useListenStore = defineStore({
    id: 'listen',
    state(): ListenStoreStateDate {
        return {
            navList: [],
            ab: 'dsd',
            title: 'remen',
            pageNum: 1,
            pageSize: 20,
            subjectsList: {}
        }
    },
    actions: {
        async getListenCategoryData() {
            try {
                const res = await listenApi.findListenCategory();
                this.navList = res.data.categories;
            } catch (error) {
                console.log(error);
            }
        },
        async getNewListenCategoryData() {
            try {
                const res = await listenApi.findListenCategorySubjectList(this.title, this.pageNum, this.pageSize);
                this.subjectsList = res.data.subjects;
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {},
})
