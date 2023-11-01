<template>
  <div>
    <el-dialog
      :title="title"
      v-model="visible"
      :close-on-click-modal="false"
      @close="visible = false"
    >
      <!--      <span>{{ content }}</span>-->
      <div><component :is="comps"></component></div>
      <slot></slot>
      <template v-slot:footer class="dialog-footer">
        <el-button @click="visible = false">{{ cancelText }}</el-button>
        <el-button type="primary" @click="parentMethod">{{ okText }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps({
    title: {
      type: String,
      default: 'tittle',
    },
    content: {
      type: String,
      default: 'tittle',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    parentMethod: {
      type: Function,
      default: () => {},
    },
    flag1: {
      type: Boolean,
    },
  });
  // const emit = defineEmits(['ok']);
  // const changeTotal = () => {
  //   emit('ok');
  // };
  const visible = ref(false);
  watch(
    () => props.flag1,
    (newVal, oldVal) => {
      console.log(newVal);
      console.log(oldVal);
      test1('aaaaaaaaaaaaaa');
      visible.value = newVal;
      // 处理数据变化的逻辑
    }
  );
  const test1 = (a) => {
    console.log(a);
  };
  const handleWatch = (
    newValue,
    oldValue
  ) => {
    console.log({ newValue, oldValue })
  };

  //目的是把属性和方法暴露出去，可以用于父子组件通信
  defineExpose({});
</script>
