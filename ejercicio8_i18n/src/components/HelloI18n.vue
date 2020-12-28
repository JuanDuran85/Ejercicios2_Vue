<template>
  <div>
    <p>{{ $t('adios') }}</p>
    <p>{{ $t('agua') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<i18n>
{
  "es": {
    "hola": "Hola a todos"
  }
}
</i18n>
