import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './ar.json';
import en from './en.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
