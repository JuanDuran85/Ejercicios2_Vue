<template>
  <div>
    <p>{{ $t('message') }}</p>
    <div>
      <button @click="setLocal('es')">Castellano</button>
      <button @click="setLocal('ca')">Catalan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
  methods: {
    setLocal(idioma){
      this.$i18n.locale = idioma;
      localStorage.setItem('local',idioma);
    }
  },
}
</script>

<i18n>
{
  "en": {
    "message": "Message from i18n"
  },
  "es": {
    "message": "Mensaje desde i18n"
  },
  "ca": {
    "message": "Missatge des i18n"
  }
}
</i18n>
