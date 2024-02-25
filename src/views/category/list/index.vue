<template>
  <div class="container">
    <div class="fixed">
      <div class="header ">
        <div class="back">
          <van-icon name="arrow-left" />
          {{ head }}
        </div>

        <div class="login">登 录</div>
      </div>
      <van-tabs @change="changeTabs" v-model:active="active">
        <div class="wrapper">
          <van-tab v-for="( item, index ) in  category1List " :key="item.id" :title="item.name" :name="item.id">
            <div class="tabs" @click="changeSortIndex">
              <div :data-index="1" :class="['tabs-item', sortIndex === 1 ? 'active' : '']">综合排序</div>
              <div :data-index="3" :class="['tabs-item', sortIndex === 3 ? 'active' : '']">最多播放</div>
              <div :data-index="2" :class="['tabs-item', sortIndex === 2 ? 'active' : '']">最近更新</div>
              <div class="select" @click.stop="changeSelect" v-if="index">
                <img src="../../../assets//icon/筛选.png" alt="">
                <span v-if="!isSelect">筛选</span>
                <span v-else>收起</span>
              </div>
            </div>
            <div class="tabs" v-if="isSelect && index !== 0" @click="changeSortIndex2">
              <div class="wrapper1" ref="scroll">
                <div class="wrapper1-content">
                  <div :class="['wrapper1-item', 'tabs-item', c2Index === index ? 'active' : '']"
                    v-for="(info, index) in item.metadataValues[0].metadataValues[0].metadataValues[0].metadataValues"
                    :key="index" @click="c2Handle(index)">
                    {{ info.name }}
                  </div>
                </div>

              </div>


            </div>
            <div class="category-list">
              <div class="category-item" v-for="item in albumsList" :key="item.albumId">
                <div class="img">
                  <img :src="`https://imagev2.xmcdn.com/${item.albumCoverPath}`" alt="">
                </div>
                <div class="content">
                  <div class="title">{{ item.albumTitle }}</div>
                  <div class="detail">
                    {{ item.intro }}
                  </div>
                  <div class="bottom">
                    <div class="play cc">
                      <img src="../../../assets/icon/sound.png" alt="">
                      {{ item.albumTrackCount }}
                    </div>
                    <div class="listen cc">
                      <van-icon name="service-o" />
                      {{ (item.albumPlayCount / 100000000).toFixed(2) }}亿
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <div class="down" @click.native="showCategory2 = !showCategory2">
            <van-icon name="arrow-down" v-if="!showCategory2" />
            <van-icon name="arrow-up" color="#FE8494" v-else />
          </div>
        </div>

      </van-tabs>
      <div class="please" v-if="showCategory2">
        请选择分类
      </div>
      <!-- 二级目录 -->
      <div class="category2" v-if="showCategory2">
        <div v-for=" (item, index)  in  category1List " :key="item.id" class="category2-item"
          @click="category2Handle(item.id,item.name)">
          {{ item.name }}
        </div>
      </div>

    </div>

  </div>
</template>
<script lang="ts">
export default {
  name: 'CategoryList',
};
</script>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import router from '@/router/index.ts'

import categoryApi from '@/api/category'
import type { subCategoriesData, AlbumsData } from '@/api/category'

const head = computed({
  get() {
    return router.currentRoute.value.params.title
  },
  set() { }
})

//tabs 选中的标题
const titleStr = ref('')

const active = ref(0);

const showCategory2 = ref(false);

const c2Index = ref(0)


//获得分类列表
//#region
onMounted(() => {

  getCategoryList()

})

const category1List = ref<subCategoriesData[]>([])

//获取分类列表的功能函数
async function getCategoryList() {
  try {
    const id = router.currentRoute.value.params.id
    const result = await categoryApi.findCategoryList(id)

    result.data.metadata[0].metadataValues.unshift({
      "id": 1,
      "displayName": "全部",
      "name": "全部",
      "metadataValues": []
    })
    category1List.value = result.data.metadata[0].metadataValues


  } catch (error) {
    console.log(error);

  }
}

const pageNum = ref(1)
const pageSize = ref(10)

const albumsList = ref<AlbumsData[]>([])
//获取列表的功能函数
async function getCategoryListDetail(metadataValues: string) {
  const id = router.currentRoute.value.params.id
  try {
    const result = await categoryApi.findCategoryListDetail({
      pageNum: pageNum.value,
      pageSize: pageSize.value,
      sort: sortIndex.value,
      categoryId: id,
      metadataValues
    })
    albumsList.value = result.data.albums

  } catch (error) {
    console.log(error);
  }
}

function getList(title:string){
  //如果点击的是全部
  if (title === '全部') {
    getCategoryListDetail('')
    return
  }

  const metadataValues: string = `${head.value},${title}`

  //重新获取列表
  getCategoryListDetail(metadataValues)
}
//#endregion

//筛选
const isSelect = ref(false)

//点击筛选的回调
function changeSelect() {
  isSelect.value = !isSelect.value
  c2Index.value = 0
}

//排序
const sortIndex = ref(1)
const sortIndex2 = ref(0)

//点击第一行排序的回调函数
function changeSortIndex(e: any) {
  sortIndex.value = e.target.dataset.index / 1

  //重新获取列表数据
  getList(titleStr.value)
}

//点击第二行排序的回调函数
function changeSortIndex2(e: any) {
  sortIndex2.value = e.target.dataset.index / 1
}

//点击tab栏和tab栏激活改变的回调
function changeTabs(_:number,title:string) {

  // 初始化数据
  sortIndex.value = 1
  sortIndex2.value = 0

  //设置一个ref sort的时候用
  titleStr.value = title

  getList(title)

}

//点击展开的目录列表的回调
function category2Handle(id: number,name:string) {

  showCategory2.value = false
  active.value = id

  //重新获取列表
  getList(name)

}

function c2Handle(index: number) {
  c2Index.value = index
}




</script>

<style lang="less" scoped>
.container {
  height: 50px;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.back {}

.login {
  background: #fa2800;
  border: none;
  color: #fff;
  width: 76px;
  font-size: 14px;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
}

:deep(.van-tabs__wrap) {
  border-bottom: 1px solid #bbb;
}


:deep(.van-tab--active) {
  font-size: 20px;
}

:deep(.van-tab--grow) {
  height: 40px;
  line-height: 16px;
}

:deep(.van-tabs__line) {
  background-color: red;
}

.van-tabs {
  width: 375px;
}

.down {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  color: #A6A3AC;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 50px;
  z-index: 99;
  background-color: #fff;
  border-left: 0.5px solid #bbb;
}

.tabs {
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  height: 30px;

  .wrapper1 {
    width: 100%;
    // position: relative;
  }

  .wrapper1-content {
    overflow-x: scroll;
    white-space: nowrap;
    display: flex;
    // flex-
    width: 100%;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      background: transparent;
      width: 0;
      height: 0;
    }


  }

  .select {
    padding: 6px 12px;
    display: inline-block;
    background: #f3f4f5;
    border-radius: 14px;
    text-align: center;
    color: #a3a3ac;
    margin-left: 9%;
    vertical-align: middle;
    font-size: 12px;
    height: 27px;
    box-sizing: border-box;
    margin-top: 5px;
    display: flex;
    align-items: flex-end;

    img {
      height: 14px;
      width: 14px;
    }

    span {
      line-height: 12px;
      height: 14px;
      margin-top: -2px;
    }
  }

  .tabs-item {
    color: #A9A9B1;
    font-size: 14px;
    margin: 6px 2px;
    width: 80px;
    height: 26px;
    line-height: 28px;
    text-align: center;

    &.active {
      border: 1px solid #F86442;
      color: #F86442;
      border-radius: 15px;
    }
  }
}

.category-list {
  margin-left: 10px;
}

.category-item {
  display: flex;
  height: 121px;
  width: 360px;
  border-bottom: 1px solid #F3F4F5;
  padding: 15px 10px 15px 0;
  box-sizing: border-box;
  max-width: 100%;


  .img {
    height: 70px;
    width: 70px;
    margin-right: 15px;

    img {
      height: 100%;
    }
  }

  .content {
    .title {
      color: #333;
      font-size: 14px;
    }

    .detail {
      margin: 5px 0 7px;
      font-size: 13px;
      line-height: 1.38;
      color: #999;
    }

    .bottom {
      display: flex;

      .play {
        img {
          width: 11px;
          height: 12px;
        }
      }

      .cc {
        margin-right: 10px;
        display: inline-block;
        line-height: 20px;
        vertical-align: top;
        min-width: 55px;
        color: #999;
        font-size: 11px;
      }
    }
  }
}

.category2 {
  position: absolute;
  background-color: #fff;
  top: 88px;
  width: 100%;
  padding: 7.5px 2%;
  max-height: 330px;
  overflow-y: auto;
  border-bottom: 1px solid #E8E8E8;
}

.category2-item {
  width: 27.733%;
  height: 32px;
  margin: 7.5px 2%;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #40404c;
  letter-spacing: 0;
  text-align: center;
  line-height: 32px;
  background: #f3f4f5;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.please {
  position: absolute;
  z-index: 10;
  top: 40px;
  width: 100%;
  background-color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #a3a3ac;
  letter-spacing: 0;
  text-align: left;
  line-height: 45px;
  display: inline-block;
  padding-left: 15px;
  border-bottom: 1px solid #999;
}
</style>