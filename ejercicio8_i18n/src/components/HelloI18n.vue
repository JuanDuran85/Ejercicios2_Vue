<template>
  <div>
    <p>{{ $t('message', {name}) }}</p>
    <p>{{ $t('email', {email}) }}</p>
    <p>{{ $tc('file', 2) }}</p>
    <p>{{ $tc('person', 0) }}</p>
    <p>{{ $tc('person', 1) }}</p>
    <p>{{ $tc('person', 2) }}</p>
    <p>{{ $tc('person', 3) }}</p>
    <p>{{ $tc('apple', 0) }}</p>
    <p>{{ $tc('apple', 1) }}</p>
    <p>{{ $tc('apple', 2) }}</p>
    <p>{{ $tc('apple', 3) }}</p>

    <hr>

    <h2>Formatos de fechas</h2>
    <p>{{ $d(new Date(), "short") }}</p>
    <p>{{ $d(new Date(), "short", "en-GB") }}</p>
    <p>{{ $d(new Date(), "long") }}</p>
    <p>{{ $d(new Date(), "long", "en-GB") }}</p>
    <div>
      <button @click="setLocal('en')">English</button>
      <button @click="setLocal('es')">Castellano</button>
      <button @click="setLocal('ca')">Català</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
  data() {
    return {
      name: "Juan",
      email: "user@user.com"
    }
  },
  methods: {
    setLocal(idioma){
      this.$i18n.locale = idioma;
      localStorage.setItem('local',idioma);
    }
  },
}
</script>
