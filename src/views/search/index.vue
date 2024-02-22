<template>
  <div class="container">
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <van-tabs v-model:active="active">
      <van-tab v-for="index in 7" :title="'选项 ' + index">
        内容 {{ index }}
      </van-tab>
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
import searchApi from '@/api/search'

onMounted(() => {
  getHotWord()
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
    console.log(123);
    searchApi.findHotWord().then((result: any) => {
      console.log(result.category);
      categoryList.value = result.category
    })


  } catch (error) {
    console.log(error);

  }
}

//#endregion




</script>

<style lang="scss" scoped></style>
