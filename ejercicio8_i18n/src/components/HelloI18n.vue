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

    <hr>

    <h2>Formato de monedas</h2>
    <p>{{ $n(100, 'currency') }}</p>
    <br>
    <div>
      <i18n-n :value="2000.4677" format="currency">
        <template v-slot:currency="slotProps">
          <span>{{slotProps.currency}}</span>
        </template>
        <template v-slot:integer="slotProps">
          <span>{{slotProps.integer}}</span>
        </template>
        <template v-slot:decimal="slotProps">
          <span>{{slotProps.decimal}}</span>
        </template>
        <template v-slot:fraction="slotProps">
          <span>{{slotProps.fraction}}</span>
        </template>
      </i18n-n>
    </div>

    <div>
      <button @click="setLocal('en')">English</button>
      <button @click="setLocal('es')">Castellano</button>
      <button @click="setLocal('ca')">Català</button>
    </div>

    <hr>

    <i18n path="terms" tag="p">
      <template v-slot:termsURL>
        <a href="/terms">{{ $t("termsLink")}}</a>
      </template>
    </i18n>

    <h2>Productos</h2>
    <p>{{ producto.name }}: {{ $n(producto.price, 'currency')}}</p>
    <p>Stock: {{producto.stock}}</p>

    <div>
      <button @click="setLocal('en')">EUA</button>
      <button @click="setLocal('es')">España</button>
      <button @click="setLocal('ca')">Cataluña</button>
    </div>
  </div>
</template>

<script>
const productos = {
  'en': {
    name: 'Red Jeans',
    stock: 4,
    price: 50,
  },
  'es': {
    name: 'Vaqueros Rojos',
    stock: 5,
    price: 45,
  },
  'ca': {
    name: 'texans Vermells',
    stock: 1,
    price: 45,
  }, 
};

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
  computed: {
    producto(){
      return productos[this.$i18n.locale];
    }
  }
}
</script>
