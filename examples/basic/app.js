import Vue from 'vue'
import MyComponent from 'my-component'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
//Vue.use(MyComponent)


// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  data: () => ({ n: 0 }),
  components:{
    MyComponent
  },
  template: `
    <div id="app">
      <h1>Basics</h1>
      <my-component :msg="'Hello world'"></my-component>
    </div>
  `,
  methods: {
  }
}).$mount('#app')