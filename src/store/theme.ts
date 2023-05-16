import { defineStore } from 'pinia';
import { setThemeClassByIndex } from '@itshixun/qst-ui-system';

interface ThemeState {
  currentThemeIndex: number;
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    currentThemeIndex: 0,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'qst-theme',
        storage: localStorage,
      },
    ],
  },
  actions: {
    setCurrentThemeIndex(themeIndex: number) {
      // set theme class name on "html" tag
      setThemeClassByIndex(themeIndex);
      this.currentThemeIndex = themeIndex;
    },
  },
});
