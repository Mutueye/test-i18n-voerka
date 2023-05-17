<script setup lang="ts">
  import { ref } from 'vue';
  import { t } from '@/languages';

  defineProps<{ msg: string }>();

  const count = ref(0);
  const inputStr = ref('');
</script>

<template>
  <div>{{ msg }}</div>
  <div class="py-spacing-sm flex flex-col items-center">
    <el-button type="primary" @click="count++">
      {{ count ? t('按钮点击了{}次', () => count) : t('点击按钮赚钱') }}
    </el-button>
    <div class="my-spacing-sm">{{ t('您的余额为：{ value | currency }', () => count) }}</div>
    <el-input v-model="inputStr" class="mt-spacing-sm" :placeholder="t('请输入')" />
  </div>
</template>
