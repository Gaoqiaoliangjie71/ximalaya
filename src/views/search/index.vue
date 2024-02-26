<template>
  <div class="container">
    <!-- 搜索组件是单独的，不用form表单包括，除非有多个条件搜索 -->
    <van-search v-model="kw" show-action placeholder="请输入搜索关键词" @update:model-value="onSearch" />
    <!-- 因为这里有判断，所以kw就是kwywords关键词，不能省略声明变量 -->
    <van-tabs v-if="!kw" v-model:active="active" @click-tab="clickToGet">
      <div class="wrapper">
        <van-tab :name="item.categoryId" v-for="(item, index) in categoryList" :key="item.categoryId"
          :title="item.categoryName">
          <!-- <ul>ll</ul>  内容{{ index + 1 }} -->
          <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="(item, index) in category1List" :key="item.category1List" :title="item.word">
              <template #icon>
                <span class="title">{{ index + 1 }}</span>
              </template>
              <template #title>
                <span>{{ item.word }}</span>
              </template>
              <template #extra>
                <van-image v-if="item.shift > 0" width="20" height="20" src="/src/assets/up-arrow.png" />
                <van-image v-else width="20" height="20" src="/src/assets/down-arrow.png" />
              </template>
            </van-cell>
          </van-list>
        </van-tab>

      </div>

    </van-tabs>
    <!-- 搜索内容 -->
    <div class="wr" v-else>
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item, index) in category2List" :key="item.keyword">
          <template #title>
            <span>{{ item.keyword }}</span>
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Search',
};
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import { showToast } from 'vant';
import BetterScroll from 'better-scroll'
import searchApi from '@/api/search'
import type { HotWordData, keySonr } from '@/api/search'


onMounted(() => {
  getHotWord()
  //better-scroll
  new BetterScroll('.wrapper', {
    movable: true,
    zoom: true
  })
})
const active = ref(0);

const onSearch = (val: string) => {

  // 这个是搜索的接口,根据输入的数据回车后调用接口根据关键词查询的数据
  // val其实也是搜索输入框的数据，用kw还是val都可以，一样的值
  try {
    // kw 没有传值把，你给我看看
    searchApi.findCategory3List({ kw: kw.value, paidFilter: paidFilter.value }).then((result: any) => {
      category2List.value = result.data.result.queryResultList;
      console.log(result);
    })
  } catch (error) {
    console.log(error);
  }
};

//获取目录列表
//#region

//目录列表
const categoryList = ref<HotWordData[]>([])
const category1List = ref<keySonr[]>([])
const category2List = ref<keySonr[]>([])
const categoryId = ref()

// list列表
const list = ref<any>([]);
const loading = ref(false);
const finished = ref(false);
// const default = ref (true);

// 实时关键字列表
const kw = ref()
const paidFilter = ref(false)
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 11; i++) {
      // 需要是一个对象，此处把数据处理一下就好了
      list.value.push({
        id: list.value.length + 1,
        title: "标题" + i,
        isUp: i % 2 === 0 ? true : false
      });
    }
// 搜索列表 Search list
    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 10) {
      finished.value = true;
    }
  }, 1000);
};


function clickToGet({ name }: { name: number }) {
  // console.log(name)
  categoryId.value = name
  // console.log(id)
  requestExample()
}
//获取热词的函数
function getHotWord() {
  try {
    searchApi.findHotWord().then((result: any) => {
      categoryList.value = result.category
      categoryId.value = result.category[0].categoryId
      requestExample()


    })


  } catch (error) {
    console.log(error);

  }
}
const size = 10;

// 获取请求实例的函数
function requestExample() {
  try {
    searchApi.findCategory2List({ categoryId: categoryId.value, size }).then((result: any) => {
      category1List.value = result.hotWordResultList
      // console.log(result.hotWordResultList);
    })
  } catch (error) {
    console.log(error);
  }
}

//#endregion




</script>

<style lang="scss" scoped>
:deep(.van-tab--active) {
  font-size: 20px;


}


:deep(.van-tabs__line) {
  background-color: red;
}


.van-image {
  padding-left: 20px;
  width: 100px;
  height: auto;
}

:deep(.van-list) {
  //   font-size:20px ;
  //   font-weight:520;
  //   color: #333333;
  // margin-right:223px;
  padding-top: 20px;
}

:deep(.van-cell__value) {
  font-size: 20px;
  font-weight: 550;
  color: #818181;
  // padding-right: 40px;
  // margin-right: 200px;
  // display: flex;
  // white-space: nowrap;
  // display: flex;
  /* 创建flex容器 */
  // justify-content: center;
  /* 水平居中内容 */
  // /* 水平居中对齐 */
  // margin-right: 200px;
  // float: right;
  // width: 70%;
  // white-space: nowrap;
}

:deep(.van-cell) {
  display: flex;
  align-items: center;

  .title {
    font-size: 25px;
    width: 50px;
    text-align: center;
    color: #DABDA7;
  }

  &:nth-child(1) {
    .title {
      color: #FF0E0F;
    }
  }

  &:nth-child(2) {
    .title {
      color: #F86442;
    }
  }

  &:nth-child(3) {
    .title {
      color: #F8A845;
    }
  }
}

:deep(.van-cell__title) {
  font-size: 20px;
}

:deep(.van-cell) {
  height: 50px;
  // display: flex;
}

:deep(.van-field__control) {
  font-size: 16px;
}

:deep(.van-cell__value) {
  //   font-size:20px ;
  //   font-weight:520;
  //   color: #333333;
  // margin-right:223px;
  // padding-top: 20px;
  // padding-right: 180px;
}
</style>
