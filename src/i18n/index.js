import { createI18n } from "vue-i18n";

// i18n 인스턴스 생성
const i18n = createI18n({
  legacy: false, //Composition API 사용 여부 (현재 사용안함 상태)
  locale: localStorage.getItem("language") || "ko", //기본 언어 설정
  fallbackLocale: "ko", //번역이 없을 경우 사용할 언어
  messages: {
    ko,
    en,
    ja,
  },
});
export default i18n;