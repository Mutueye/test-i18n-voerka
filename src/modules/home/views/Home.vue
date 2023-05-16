<template>
  <ScrollableContent>
    <div class="w-full flex flex-col items-center">
      <div class="w-full py-50px text-center font-bold">{{ t('首页') }}</div>
      <HelloWorld msg="Hello World" />
      <el-button>{{ t('按钮文字') }}</el-button>
      <div class="p-spacing-sm">
        <el-select v-model="value" class="m-2" :placeholder="t('请选择')">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
  </ScrollableContent>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import ScrollableContent from '@/components/ScrollableContent.vue';
  import { t } from '@/languages';

  const value = ref('');

  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ];
</script>
