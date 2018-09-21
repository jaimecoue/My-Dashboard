// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'Johny Appleseed',
    status: false,
    image: 'img/user-icon.png'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <center><div class="img-container">
                <img v-bind:src="image">
              </div></center>
              <h3 style="text-align: center">{{ fname }}</h3>
              <a style="text-decoration: none;" href="index.html" class="forgot-link">Logout</a><br><br>
              <button id="theme-button"><a style="text-decoration: none;" class="forgot-link">GREENIFY</a></button>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})