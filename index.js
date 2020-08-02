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
  <b-alert show variant="primary"><i class="fa fa-fw fa-info-circle"></i> This is the informational alert banner</b-alert>
  </div>
  <div class="alert-warning" style="margin:15px;">
  <b-alert show variant="warning"><i class="fa fa-fw fa-exclamation-triangle"></i>This is the warning alert banner</b-alert>
  </div>
  <div class="alert-success" style="margin:15px;">
  <b-alert show variant="success"><i class="fa fa-fw fa-check-circle"></i>This is the success alert banner</b-alert>
  </div>
  <div class="alert-danger" style="margin:15px;">
  <b-alert show variant="danger"><i class="fa fa-fw fa-exclamation-circle"></i>This is the error alert banner</b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class="alert alert-success alert-dismissible">
    This is an success alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-info alert-dismissible">
    This is an info alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-warning alert-dismissible">
    This is a warning alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-danger alert-dismissible">
    This is a danger alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-primary alert-dismissible">
    This is a primary alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-secondary alert-dismissible">
    This is a secondary alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-light alert-dismissible">
    This is a light alert
  </b-alert>
  </div>
  <div>
  <b-alert show dismissible style="margin:15px;" class=" alert alert-dark alert-dismissible">
    This is a dark alert 
  </b-alert>
  </div>

</div>`
});