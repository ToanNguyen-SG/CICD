import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '../locales/en.json'
import translationVI from '../locales/vi.json'
import translationLAOS from '../locales/laos.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    vi: { translation: translationVI },
    laos: { translation: translationLAOS },
  },
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
