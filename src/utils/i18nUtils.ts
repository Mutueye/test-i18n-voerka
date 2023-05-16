export const i18nKey = 'i18n-lang';

export const setCurrentLang = (lang: string) => {
  localStorage.setItem(i18nKey, lang);
};

export const getCurrentLang = () => {
  const storageLang = localStorage.getItem(i18nKey);
  return storageLang ? storageLang : 'zh';
};
