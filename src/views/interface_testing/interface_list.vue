<template>
  <div>
    <addInterface @clickcancel="changevisible" :title="MyDialog_body.title" v-if="visible">
    </addInterface>
    <div class="flex_headers">
      <div style="margin-bottom: 20px">
        <el-input
          style="width: 200px; margin-left: 20px"
          v-model="name"
          placeholder="请输入接口名称"
          clearable
        />
        <el-input
          style="width: 200px; margin-left: 20px"
          v-model="methods"
          placeholder="请输入请求方式"
          clearable
        />
        <el-button type="primary" :icon="Search" @click="getWorkshopPageFn">搜索</el-button>
      </div>
      1111
      <el-button type="primary" plain style="margin-right: 20px" @click="showDialog2"
        >添加接口
        <icon-fingerprint theme="multi-color" size="24" :fill="['#333' ,'#2c5288' ,'#FFF' ,'#43CCF8']"/>
      </el-button>
      <el-button type="primary" plain style="margin-right: 20px" @click="showDialog1"
        ><i class="iconfont icon-tianjia"></i>添加接口1</el-button
      >
    </div>
    <div>
      <proTable
        :tableHeader="tableHeaderData"
        :handleSelection="handleSelectionChange"
        :isMoreSelect="true"
        :tableData="tableList"
        :currentChange="handleCurrentChange"
        :sizeChange="handleSizeChange"
        :pageSize="pageSizes"
        :currentPage="currentPages"
        :totalNum="total"
      >
        <template v-slot:default="{ rows, cols }">
          <!-- 显示其他内容 -->
          <span v-show="!['状态'].includes(cols.label)"> {{ rows[cols.props] }} </span>
          <!-- 过滤一些内容-->
          <el-tag v-show="cols.label === '状态'" :type="rows.status === 1 ? 'danger' : ''">
            {{ rows.status === 1 ? '停用' : '正常' }}
          </el-tag>
          <div v-show="cols.label === '操作'">
            <el-button size="small" type="primary" @click="editWorkshopFn(rows)" text :icon="Edit"
              >编辑
            </el-button>
            <el-button size="small" type="danger" text :icon="Delete" @click="deleteBtn(rows)"
              >删除
            </el-button>
          </div>
        </template>
      </proTable>
    </div>
    <addInterface2 :title="MyDialog_body.title" :visible2="visible2"> </addInterface2>
  </div>
</template>

<script setup>
  import proTable from '@/components/proTable/index.vue';
  import { Search, Delete, Edit } from '@element-plus/icons-vue';
  import addInterface from './components/add_interface.vue';
  import addInterface2 from './components/add_interface2.vue';
  import { onMounted, provide, ref } from 'vue';
  import { useHandleData } from '@/utils/useHandleData';
  import {
    updata_interface_test,
    crate_interface_test,
    get_interface_list,
    delete_interface_test,
  } from '@/api/interface_test';
  // import { getWorkshopPage, deleteWorkshop } from "@/api/factory/workshop";
  const tableList = ref([]);
  const total = ref(0);
  const currentPages = ref(1);
  const pageSizes = ref(10);
  const name = ref('');
  const methods = ref('');
  const visible = ref(false)
  const MyDialog_body = ref({
    title: '弹窗标题1',
    content: '弹窗内容1111',
    cancelText: '取消',
    okText: '确定',
    visible: true,
  });
  const tableHeaderData = [
    {
      label: 'ID',
      props: 'id',
    },
    {
      label: '接口名称',
      props: 'name',
    },
    {
      label: '请求方式',
      props: 'methods',
    },
    {
      label: '最近执行时间',
      props: 'last_time',
    },
    {
      label: '创建时间',
      props: 'create_time',
    },
    {
      label: '排序',
      props: 'order',
    },
    {
      label: '状态',
      props: 'status',
    },
    {
      label: '操作',
      props: 'controls',
    },
  ];
  onMounted(() => {
    //初始化
    getWorkshopPageFn();
  });

  // 选择
  const handleSelectionChange = (val) => {
    console.log('多选', val);
  };

  //删除按钮
  const deleteBtn = async (row) => {
    try {
      console.log('删除', row);
      await useHandleData(delete_interface_test, { id: row.id }); //deleteWorkshop为接口， row.workshopId为接口参数
      await getWorkshopPageFn();
      // getWorkshopPageFn();
    } catch (err) {
      console.log(err);
    }
  };

  // 编辑按钮
  const editWorkshopFn = async (row) => {
    console.log('编辑', row);
    try {
      let res = await updata_interface_test(row);
      // console.log(res.total);
    } catch (err) {
      console.log(err);
    }
  };
  //
  //分页方法
  const getWorkshopPageFn = async () => {
    //调接口拿数据
    try {
      let res = await get_interface_list({
        current_page: currentPages.value,
        page_size: pageSizes.value,
        methods: methods.value,
        name: name.value,
      });
      total.value = res.total;
      // console.log(res.total);
      tableList.value = res.data;
    } catch (err) {
      console.log(err);
    }
  };
  // //分页相关按钮
  const handleSizeChange = (page) => {
    pageSizes.value = page;
    getWorkshopPageFn();
  };
  const handleCurrentChange = (page) => {
    currentPages.value = page;
    getWorkshopPageFn();
  };
  const onOk = () => {
    console.log('点击了确定按钮');
  };
  //设置弹窗显示
  const dataDialog = ref(null);
  const visible2 = ref(false);
  const showDialog1 = () => {
    // console.log(dataDialog.value.getFirstData());
    visible2.value = !visible2.value;
  };
  const showDialog2 = () => {
    visible.value = true;
  };
  const changevisible = (data) => {
    visible.value = data;
  };
  provide('visible1', visible)
</script>
<style lang="scss" scoped>
  .flex_headers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
