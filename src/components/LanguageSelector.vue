<template>
  <el-select v-model="selectedLang" value-key="name" @change="onSelect">
    <el-option v-for="item in langs" :key="item.name" :label="item.title" :value="item.name" />
  </el-select>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { VoerkaI18nScope } from '@/languages';
  import { setCurrentLang } from '@/utils/i18nUtils';

  const langs = ref(VoerkaI18nScope.languages);
  const selectedLang = ref(VoerkaI18nScope.activeLanguage);

  const onSelect = (val: string) => {
    if (val !== VoerkaI18nScope.activeLanguage) {
      setCurrentLang(val);
      window.location.reload();
    }
  };
</script>
