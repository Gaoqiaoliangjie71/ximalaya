<template>
  <div class="container">
    <!-- 头部 -->
    <Header />
    <!-- 主体部分 -->
    <div class="main">
      <!-- 左侧导航区 -->
      <div class="sider-bar" ref="siderBar">
        <div ref="leftItem" :class="{ 'sider-bar-item': true, active: index === activeIndex }"
          v-for="(item, index) in category1List" :key="item.id" @click="setShow(index)">{{
            item.title }}</div>
      </div>
      <!-- 右侧内容区 -->
      <div class="right" @scroll="getScroll" ref="rightScroll">
        <div ref="rightItem" class="right-item" v-for="item in category1List" :key="item.id">
          <!-- 右侧小标题 -->
          <van-cell :title="item.title" is-link to="index" @click="toList(item.id,item.title)"/>
          <!-- 小标题下的内容 -->
          <div class="item-content">
            <div class="item" v-for="info in item.subCategories[0]?.metadataValues" :key="info.id">{{ info.name }}</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
export default {
  name: 'Category',
};
</script>
<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import categoryApi from '@/api/category'
import type { category1ListData } from '@/api/category'
import router from '@/router/index.ts'

// 右侧每一项小标题和内容的div(数组)
const rightItem = ref()

const siderBar = ref()

//左侧的每一项
const leftItem = ref()


//右侧内容的总高度

const rightTotalHeight = ref()

//右侧部分div
const rightScroll = ref()

//右侧部分div的高度
let hv = 0

//左侧每一项的高度
let leftItemHeight = 0

//获取目录列表
//#region
onMounted(() => {
  getCategoryList()
})

const category1List = ref<category1ListData[]>([])

//获取分类列表的功能函数
async function getCategoryList() {
  try {
    const result = await categoryApi.findCategory()
    category1List.value = result.data

    //等待DOM更新后
    nextTick(() => {
      //右侧每一项内容的高度
      let arr: any = []

      rightItem.value.forEach((item: any) => {
        arr.push(item.clientHeight)
      });

      //右侧内容的总高度
      rightTotalHeight.value = arr.reduce((prev: number, item: number) => {
        prev += item
        return prev
      }, 0)

      //左侧每一项的高度
      leftItemHeight = leftItem.value.clientHeight

      //算出右侧div高度
      hv = rightScroll.value.offsetHeight


    })

  } catch (error) {
    console.log(error);
  }
}
//#endregion


//#region
//被选中siderBar 的下标
const activeIndex = ref(0)

//点击siderBar的回调函数
function setShow(index: number) {
  activeIndex.value = index

  //计算右侧要滑动的距离
  let scrollHeight = rightItem.value.reduce((prev: any, item: any, i: number) => {
    if (i < index) return prev + item.clientHeight
    else return prev
  }, 0);

  rightScroll.value.scrollTop = scrollHeight

}

//#endregion

// 右侧滚动的回调函数
function getScroll() {
  rightItem.value.forEach((item: any, index: number) => {

    if (item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > 0) {
      //设置siderBar哪个高亮
      activeIndex.value = index

      //设置siderBar 向上滚动的距离

      let leftItemHeight = leftItem.value[0].clientHeight
      siderBar.value.scrollTop = leftItemHeight * index




    }
  })
}

//跳转列表页
function toList(id : number,title:string){
  router.push(`/category/list/${id}/${title}`)
}


</script>

<style lang="scss" scoped>
.container {}

.main {
  // display: flex;
  // height: calc(100% - 50px);
  font-size: 14px;
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  box-sizing: border-box;

}

.sider-bar {
  // overflow: scroll;
  // width: 100px;
  // height: calc(100% - 50px);

  width: 25%;
  height: calc(100% - 50px);
  overflow-y: scroll;
  box-sizing: border-box;


  // 隐藏滚动条
  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
    height: 0;
  }
}

.right {
  // flex: 1;
  // overflow-y: scroll;
  // height: 1000px;

  overflow-y: scroll;

  padding-left: 20px;
  box-sizing: border-box;
  width: 75%;
  height: 100%;

  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
    height: 0;
  }
}

.sider-bar-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #72727b;
  width: 92px;
  border-bottom: 1px solid #F0F0F0;
  box-sizing: border-box;
  border-left: 4px solid transparent;
}

.van-cell {
  height: 50px;
  border-bottom: 1px solid #E8E8E8;
  box-sizing: border-box;
}

:deep(.van-cell__title) {
  font-weight: bold;
}

.item-content {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.item {
  height: 50px;
  padding: 7.5px;
  box-sizing: border-box;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  color: #7e8c8d;
}

.active {
  border-left: 4px solid #FF0000;
}
</style>
