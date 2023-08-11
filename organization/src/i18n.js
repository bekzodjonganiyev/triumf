import i18 from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
let til = localStorage.getItem("i18nextLng")

i18.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: til ? til : 'uz',
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18