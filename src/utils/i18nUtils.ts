export const i18nKey = 'i18n-lang';

export const setCurrentLang = (lang: string) => {
  localStorage.setItem(i18nKey, lang);
};

export const getCurrentLang = () => {
  const storageLang = localStorage.getItem(i18nKey);
  return storageLang ? storageLang : 'zh';
};

/**
 * 中文	zh 繁体中文	cht	英语	en 日语	jp 韩语	kor	法语 fra
 * 西班牙语	spa 泰语	th	阿拉伯语	ara	俄语	ru
 * 葡萄牙语	pt	德语	de	意大利语	it 希腊语	el
 * 荷兰语	nl	波兰语	pl 保加利亚语	bul	爱沙尼亚语 est
 * 丹麦语	dan 芬兰语	fin	捷克语	cs	罗马尼亚语 rom
 * 斯洛文尼亚语	slo	瑞典语	swe	匈牙利语	hu 越南语	vie
 */
export type LangCode =
  | 'zh'
  | 'cht'
  | 'en'
  | 'jp'
  | 'kor'
  | 'fra'
  | 'spa'
  | 'th'
  | 'ara'
  | 'ru'
  | 'pt'
  | 'de'
  | 'it'
  | 'el'
  | 'nl'
  | 'pl'
  | 'bul'
  | 'est'
  | 'dan'
  | 'fin'
  | 'cs'
  | 'rom'
  | 'slo'
  | 'swe'
  | 'hu'
  | 'vie';

/**
 * voerka-i18n的语言代码用的是百度翻译的代码，
 * 为了对应标准的国际化代码，通过此对象进行关联
 * */
export const i18nCode: Partial<Record<LangCode, string>> = {
  /** 简体中文 */
  zh: 'zh-CN',
  /** 繁体中文 */
  cht: 'zh-TW',
  /** 美国英语 */
  en: 'en',
  // TODO 更多语言
};
