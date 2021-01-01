import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import upperFirst from 'lodash/upperFirst'; /* Ya se encuentra cargada la libreria */
import camelCase from 'lodash/camelCase';

/* Create global components manually*/
/* import BaseIcon from '@/components/BaseIcon.vue'; */
/* Vue.component('BaseIcon', BaseIcon); */

/* Automatic Global Registration of Base Components */
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
