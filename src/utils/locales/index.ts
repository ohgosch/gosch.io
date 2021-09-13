import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextLocizeBackend from 'i18next-locize-backend';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ptBR from './ptBR.json';
import en from './en.json';

i18n
  .use(I18NextLocizeBackend)
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    whitelist: ['pt', 'en'],
    supportedLngs: ['pt', 'en'],
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
    },
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: ptBR,
      },
    },
  });

export default i18n;
