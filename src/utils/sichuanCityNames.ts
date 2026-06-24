export const SICHUAN_CITY_NAMES_EN: Record<string, string> = {
  成都市: "Chengdu",
  绵阳市: "Mianyang",
  德阳市: "Deyang",
  乐山市: "Leshan",
  眉山市: "Meishan",
  广安市: "Guang'an",
  南充市: "Nanchong",
  达州市: "Dazhou",
  遂宁市: "Suining",
  广元市: "Guangyuan",
  内江市: "Neijiang",
  资阳市: "Ziyang",
  自贡市: "Zigong",
  攀枝花市: "Panzhihua",
  泸州市: "Luzhou",
  宜宾市: "Yibin",
  巴中市: "Bazhong",
  雅安市: "Ya'an",
  甘孜藏族自治州: "Ganzi Tibetan Autonomous Prefecture",
  凉山彝族自治州: "Liangshan Yi Autonomous Prefecture",
  阿坝藏族羌族自治州: "Aba Tibetan and Qiang Autonomous Prefecture",
};

export function getSichuanCityNameEn(name: string) {
  return SICHUAN_CITY_NAMES_EN[name] ?? name;
}
