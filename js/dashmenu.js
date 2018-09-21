// DASH MENU COMPONENT

'use strict';

var menu = {
    title: 'manage dashboard',
    menus: [
    {
      title: 'Add Section ',
      link: 'addsection.html',
      icon: 'fa fa-plus-circle',
      isActive: true
    },
    {
      title: 'Edit Sections',
      link: 'editsections.html',
      icon: 'fa fa-pencil',
      isActive: false

    },
    {
      title: 'Move Sections',
      link: 'movesections.html',
      icon: 'fa fa-arrows-alt',
      isActive: false

    },
    ]
}


Vue.component('dash-menu', {
  template: `
     <div class="profile-links">
                  <ul>
                    <li class="menu-icon style_prevu_kit"><a href="#"><img style="width:30px;" src="img/dashboard.png">
                    <p>Dashboard</p></a></li>
                    
                    <li class="menu-icon style_prevu_kit"><a href="#"><img style="width:30px;" src="img/bar-chart.png">
                    <p>Analytics</p></a></li>

                    <li class="menu-icon style_prevu_kit"><a href="#"><img style="width:30px;" src="img/profit.png">
                    <p>Sales</p></a></li>

                    <li class="menu-icon style_prevu_kit"><a href="#"><img style="width:30px;" src="img/chat.png">
                    <p>Messages</p></a></li>

                    <li class="menu-icon style_prevu_kit"><a href="#"><img style="width:30px;" src="img/user.png">
                    <p>User Settings</p></a></li>

                  </ul>
              </div>
            `,
  data: function() {
    return menu;
  }
})

var dashMenu = new Vue({
  el: '#dashmenu'
})