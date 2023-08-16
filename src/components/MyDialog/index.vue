<template>
  <el-dialog :title="title" :visible.sync="visible" :close-on-click-modal="false">
    <span>{{ content }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">{{ cancelText }}</el-button>
      <el-button type="primary" @click="ok">{{ okText }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    // eslint-disable-next-line vue/require-default-prop
    content: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    ok() {
      this.$emit('ok')
      this.visible = false
    }
  }
}
</script>

