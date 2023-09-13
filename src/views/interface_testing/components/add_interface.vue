<template>
  <el-dialog v-model="visible" :title="title" :close-on-click-modal="false" append-to-body>
  </el-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(true);
  // const title = ref('标题');
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
