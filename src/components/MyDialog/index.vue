<template>
  <div>
    <el-dialog :title="title" v-model="visible" :close-on-click-modal="false">
      <span>{{ content }}</span>
      <template v-slot:footer class="dialog-footer">
        <el-button @click="visible = false">{{ cancelText }}</el-button>
        <el-button type="primary" @click="parentMethod">{{ okText }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<!--<script>-->
<!--  export default {-->
<!--    name: 'MyDialog',-->
<!--    props: {-->
<!--      // eslint-disable-next-line vue/require-default-prop-->
<!--      visible: Boolean,-->
<!--      title: String,-->
<!--      // eslint-disable-next-line vue/require-default-prop-->
<!--      content: String,-->
<!--      cancelText: {-->
<!--        type: String,-->
<!--        default: '取消',-->
<!--      },-->
<!--      okText: {-->
<!--        type: String,-->
<!--        default: '确定',-->
<!--      },-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        visible1: visible,-->
<!--      };-->
<!--    },-->
<!--    methods: {-->
<!--      ok() {-->
<!--        this.$emit('ok');-->
<!--        this.visible1 = false;-->
<!--      },-->
<!--    },-->
<!--  };-->
<!--</script>-->

<script setup>
  import { ref } from 'vue';
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
  });
  const emit = defineEmits(['ok']);
  const changeTotal = () => {
    emit('ok');
  };
  const visible = ref(false);
  const ok = () => {
    context.emit('ok');
    visible.value = false;
  };
  defineExpose({
    setdialogvisible(res) {
      visible.value = res;
    },
    getFirstData() {
      return visible.value;
    },
  });
</script>
