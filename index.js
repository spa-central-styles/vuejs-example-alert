// Import stylesheets
import Vue from 'vue';
import { BAlert } from 'bootstrap-vue'
Vue.component('b-alert', BAlert)
import SPA from 'spa-central-styles-free';
Vue.use(SPA);




const vue = new Vue({
  el: '#app',
  data: {
    title: `Vue JS Template!
    sd`
  },
  template:`<div>

  <div class="alert-primary" style="margin:15px;">
  <b-alert show variant="primary">  <i class="fa fa-fw fa-info-circle"></i> Primary Alert</b-alert>
  </div>
  <div class="alert-secondary" style="margin:15px;">
  <b-alert show variant="secondary">Secondary Alert</b-alert>
  </div>
  <div class="alert-success" style="margin:15px;">
  <b-alert show variant="success">Success Alert</b-alert>
  </div>
  <div class="alert-danger" style="margin:15px;">
  <b-alert show variant="danger">Danger Alert</b-alert>
  </div>
  <div class="alert-warning" style="margin:15px;">
  <b-alert show variant="warning">Warning Alert</b-alert>
  </div>
  <div class="alert-info" style="margin:15px;">
  <b-alert show variant="info">Info Alert</b-alert>
  </div>
  <div class="alert-light" style="margin:15px;">
  <b-alert show variant="light">Light Alert</b-alert>
  </div>
  <div class="alert-dark" style="margin:15px;">
  <b-alert show variant="dark">Dark Alert</b-alert>
  </div>

</div>`
});