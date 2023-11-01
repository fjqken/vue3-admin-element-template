<template>
  <MyDialog2
    ref="dataDialog2"
    :title="title"
    :content="1111111"
    :parentMethod="onOk"
    :flag1="visible2"
  >
    <div class="a">aaaa111111</div>
  </MyDialog2>
</template>

<script setup>
  import { ref } from 'vue';
  import MyDialog2 from '@/components/MyDialog2/index.vue';
  // const title = ref('标题');
  const emit = defineEmits(['clickcancel']);
  const onOk = () => {
    console.log('点击了确定按钮');
    emit('clickcancel', false);
    console.log(false);
  };
  const props = defineProps({
    title: {
      type: String,
      default: 'tittle',
    },
    visible2: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  //scoped 只运用在当前文件
  .a {
    color: $base-color-yellow;
  }
</style>
