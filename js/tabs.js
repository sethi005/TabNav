/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var Tabs = {

  init: function() {
    this.bindtab();
    this.resumetab();
  },

  bindtab: function() {

    $(document)
      .on("click", ".convert-tabs a[href^='#']:not('.active')", function(event) {
        Tabs.changeTab(this.hash);
        event.preventDefault();
      })
      .on("click", ".convert-tabs a.active", function(event) {
        Tabs.toggleMobileMenu(event, this);
        event.preventDefault();
      });

  },

  changeTab: function(hash) {

    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    // activate correct link
    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    // activate correct div 
    div.addClass("active").siblings().removeClass("active");

    anchor.closest("ul").removeClass("open");

  },

  // Default Tab
  resumetab: function() {
    this.changeTab(document.location.hash);
  },

  toggleMobileMenu: function(event, el) {
    $(el).closest("ul").toggleClass("open");
  }

}

Tabs.init();