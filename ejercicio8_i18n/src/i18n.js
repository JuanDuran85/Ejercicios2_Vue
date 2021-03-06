import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const setDateTimeFormats = {
  short: {
    year: "2-digit",
    month: "short",
    day: "2-digit"
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric"
  }
}

const dateTimeFormats = {
  en: setDateTimeFormats,
  'en-GB': setDateTimeFormats,
  es: setDateTimeFormats,
  ca: setDateTimeFormats
};

const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
    }
  },
  'es': {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'code'
    }
  },
  'ca': {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'name'
    }
  },
}

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
  dateTimeFormats,
  numberFormats
})
