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
      {{ t('按钮点击了{}次', () => count) }}
    </el-button>
    <el-input v-model="inputStr" class="mt-spacing-sm" :laceholder="t('请输入')" />
  </div>
</template>
