export const i18nKey = 'i18n-lang';

export const setCurrentLang = (lang: string) => {
  localStorage.setItem(i18nKey, lang);
};

export const getCurrentLang = () => {
  const storageLang = localStorage.getItem(i18nKey);
  return storageLang ? storageLang : 'zh';
};

/**
 * voerka-i18n的语言代码用的是百度翻译的代码，
 * 为了对应标准的国际化代码，通过此对象进行关联
 * */
export const i18nCode = {
  /** 简体中文 */
  zh: 'zh-CN',
  /** 繁体中文 */
  cht: 'zh-TW',
  /** 美国英语 */
  en: 'en',
  // TODO 更多语言
};
