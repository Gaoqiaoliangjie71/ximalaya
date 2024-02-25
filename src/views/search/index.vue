<template>
  <div class="container">
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <van-tabs v-model:active="active">
      <div class="wrapper">
        <van-tab v-for="(item, index) in categoryList" :key="item.categoryId" :title="item.categoryName">
          内容{{ index + 1 }}
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
::v-deep .van-tab--active {
  font-size: 20px;
}

::v-deep .van-tab--grow {
  height: 40px;
  line-height: 16px;
}

::v-deep .van-tabs__line {
  background-color: red;
}
</style>
