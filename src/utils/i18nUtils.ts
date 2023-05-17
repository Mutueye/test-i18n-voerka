export const i18nKey = 'i18n-lang';

export const setCurrentLang = (lang: string) => {
  localStorage.setItem(i18nKey, lang);
};

export const getCurrentLang = () => {
  const storageLang = localStorage.getItem(i18nKey);
  return storageLang ? storageLang : 'zh';
};

/** voerka-i18n的语言代码用的是百度翻译的代码，name为百度翻译用的语言代码，standardCode为国际标准代码 */
export const i18nCode = {
  zh: {
    title: '简体中文',
    name: 'zh',
    standardCode: 'zh-CN',
  },
  cht: {
    title: '繁体中文',
    name: 'cht',
    standardCode: 'zh-TW',
  },
  en: {
    title: '英语',
    name: 'en',
    standardCode: 'en',
  },
};
