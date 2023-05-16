<template>
  <div class="w-full flex flex-col flex-1 min-h-0">
    <el-scrollbar>
      <div class="p-spacing-xl flex-shrink-0">
        <slot />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts"></script>
