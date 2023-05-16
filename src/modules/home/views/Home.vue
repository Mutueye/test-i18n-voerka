<template>
  <ScrollableContent>
    <div class="w-full flex flex-col items-center">
      <div class="w-full py-50px text-center font-bold">首页</div>
      <HelloWorld msg="Hellow World" />
      <el-button>按钮文字</el-button>
      <div class="p-spacing-sm">
        <el-select v-model="selectedSchool" value-key="id" placeholder="请选择">
          <el-option v-for="item in schoolList" :key="item.id" :label="item.name" :value="item" />
        </el-select>
      </div>
      <div class="w-full px-spacing mb-spacing">
        <el-table border :data="configList">
          <el-table-column type="index" width="80" align="center" label="index" />
          <el-table-column property="configKey" label="configKey" />
          <el-table-column property="configValue" label="configValue" />
        </el-table>
      </div>

      <!-- <div v-for="config in configList" :key="config.id">{{ config.configKey }}</div> -->
    </div>
  </ScrollableContent>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { get } from 'lodash-es';
  import HelloWorld from '@/components/HelloWorld.vue';
  import ScrollableContent from '@/components/ScrollableContent.vue';
  import { ConfigModel, getSchoolList, SchoolModel, getConfigList } from '../api/dicts';

  const selectedSchool = ref<SchoolModel>();
  const schoolList = ref<SchoolModel[]>([]);

  const configList = ref<ConfigModel[]>([]);

  onMounted(() => {
    getSchoolList().then((res) => {
      schoolList.value = get(res, 'data.data.rows', []);
    });
    getConfigList().then((res) => {
      configList.value = get(res, 'data.data', []);
    });
  });
</script>
