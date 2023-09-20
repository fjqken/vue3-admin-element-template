<template>
  <my-dialog
    ref="dataDialog"
    :title="title"
    :content="111"
    :cancel-text="111"
    :ok-text="111"
    @ok="onOk"
    :visible1="true"
    :parentMethod="onOk"
  >
    aaaa
  </my-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  import MyDialog from '@/components/MyDialog/index.vue';
  const visible = ref(true);
  // const title = ref('标题');
  const onOk = () => {
    console.log('点击了确定按钮');
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

<style scoped>

</style>
