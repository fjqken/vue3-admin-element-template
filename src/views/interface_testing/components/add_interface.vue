<template>
  <my-dialog ref="dataDialog" :title="title" :content="111" :parentMethod="onOk">
    <div class="a">aaaa</div>
  </my-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  import MyDialog from '@/components/MyDialog/index.vue';
  const visible = ref(true);
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
    // visible: {
    //   type: Boolean,
    //   default: true,
    // },
  });
</script>

<style lang="scss" scoped>
  //scoped 只运用在当前文件
  .a {
    color: $base-color-yellow;
  }
</style>
