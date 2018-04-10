import Vue from 'vue'

Vue.filter( 'discount' , function(value) {
        return value  * .5 ;
  });