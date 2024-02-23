<template>
  <div class="container">
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <van-tabs v-model:active="active">
      <div class="wrapper">
        <van-tab v-for="(item, index) in categoryList" :key="item.categoryId" :title="item.categoryName">
          <!-- <ul>ll</ul> 
          内容{{ index + 1 }} -->

          <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="(item, index) in list" :key="item">
              <template #icon>
                <span class="title">{{ index + 1 }}</span>
              </template>
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <template #extra>
                <van-image v-if="item.isUp" width="20" height="20" src="/src/assets/up-arrow.png" />
                <van-image v-else width="20" height="20" src="/src/assets/down-arrow.png" />
              </template>
            </van-cell>
          </van-list>
        </van-tab>

      </div>
    </van-tabs>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Search',
};
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { showToast } from 'vant';
import BetterScroll from 'better-scroll'

import searchApi from '@/api/search'


onMounted(() => {
  getHotWord()
  //better-scroll
  new BetterScroll('.wrapper', {
    movable: true,
    zoom: true
  })
})
const active = ref(0);
const value = ref('')

const onSearch = (val: string) => showToast(val);
const onCancel = () => {

};

//获取目录列表
//#region

//目录列表
const categoryList = ref([])

// list列表
const list = ref<any>([]);
const loading = ref(false);
const finished = ref(false);
// const default = ref (true);
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

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 10) {
      finished.value = true;
    }
  }, 1000);
};


//获取热词的函数
function getHotWord() {
  try {
    searchApi.findHotWord().then((result: any) => {
      categoryList.value = result.category
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
  padding-right: 40px;
  // margin-right: 200px;
  display: flex;
  // white-space: nowrap;
  display: flex;
  /* 创建flex容器 */
  justify-content: center;
  /* 水平居中内容 */
  // /* 水平居中对齐 */
  // margin-right: 200px;
  float: right;
  width: 70%;
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
</style>
