function loadProjects() {
  $.getJSON("./assets/json/projects.json", (function (a) {
    a.forEach((function (a, l) {
      if (l > 3) return !0;
      var s = '<div class="col-6 col-lg-3" data-aos="flip-up" data-aos-duration="3000"><div class="pbx" ><a href="' + a.link + '" target="_blank" class="link"><div class="imgbx" style="--image-path:url(../../assets/img/projects/' + a.banner + ')"></div><div class="dbx"><h6 class="t">' + a.type + '</h6><h6 class="d">' + a.title + "</h6></div></a></div></div>";
      $("#projectsRow").append(s)
    }))
  }))
}

function loadSkills() {
  $.getJSON("./assets/json/skills.json", (function (a) {
    a.forEach((function (a, l) {
      var s = '<div class="skill-bx" title="' + a.title + '"><a href="' + a.link + '" class="link" target="_blank"><div class="skill-pro" role="progressbar" aria-valuenow="' + a.skill + '" aria-valuemin="0" aria-valuemax="100" style="--value:' + a.skill + '"><img src="./assets/img/icon/' + a.img + '" class="icon"><div class="stitle">' + a.title + "</div></div></a></div>";
      $("#allSkills").append(s)
    }))
  }))
}

function loadSocialLinks() {
  $.getJSON("./assets/json/social-links.json", (function (a) {
    a.forEach((function (a, l) {
      var s = '<a href="' + a.link + '" class="link" target="_blank" aria-label="' + a.title + '" rel="noreferrer">' + a.icon + "</a>";
      $("#footerAllSocialLinks").append(s)
    }))
  }))
}
$((function () {
  $(".lazy-load").lazy({
    effect: "fadeIn",
    onError: function (a) {}
  })
}));
$('.header .mainMenuToggler').click(function () {
  $('.header .nav-cntr').toggleClass('show');
});