var techArr = {
  php: {
    title: "PHP",
    image: "php.svg",
    link: "https://en.wikipedia.org/wiki/PHP"
  },
  ci: {
    title: "Codeigniter",
    image: "codeigniter.svg",
    link: "https://en.wikipedia.org/wiki/CodeIgniter"
  },
  laravel: {
    title: "Laravel",
    image: "laravel.svg",
    link: "https://en.wikipedia.org/wiki/Laravel"
  },
  html: {
    title: "HTML",
    image: "html.svg",
    link: "https://en.wikipedia.org/wiki/HTML"
  },
  css: {
    title: "CSS",
    image: "css.svg",
    link: "https://en.wikipedia.org/wiki/CSS"
  },
  js: {
    title: "JavaScript",
    image: "javascript.svg",
    link: "https://en.wikipedia.org/wiki/JavaScript"
  },
  jquery: {
    title: "JQuery",
    image: "jquery.svg",
    link: "https://en.wikipedia.org/wiki/JQuery"
  },
  mysql: {
    title: "MySql",
    image: "mysql.svg",
    link: "https://en.wikipedia.org/wiki/MySQL"
  },
  bootstrap: {
    title: "Bootstrap",
    image: "bootstrap.svg",
    link: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
  },
  python: {
    title: "Python",
    image: "python.svg",
    link: "https://en.wikipedia.org/wiki/Python_(programming_language)"
  },
  java: {
    title: "JAVA",
    image: "java.svg",
    link: "https://en.wikipedia.org/wiki/Java_(programming_language)"
  },
  github: {
    title: "GitHub",
    image: "github.svg",
    link: "https://en.wikipedia.org/wiki/GitHub"
  },
  git: {
    title: "Git",
    image: "git.svg",
    link: "https://en.wikipedia.org/wiki/Git"
  },
  photoshop: {
    title: "Photoshop",
    image: "photoshop.svg",
    link: "https://en.wikipedia.org/wiki/Adobe_Photoshop"
  },
  postman: {
    title: "Postman",
    image: "postman.svg",
    link: "https://en.wikipedia.org/wiki/Postman_(software)"
  }
};

function loadProjects() {
  $.getJSON("./assets/json/projects.json", (function (i) {
    i.forEach((function (i, a) {
      if (a > 3) return !0;
      var s = '<div class="col-6 col-lg-3" data-aos="flip-up" data-aos-duration="3000"><div class="main-project-thumb-bx"><a target="_blank" class="link"  data-bs-toggle="modal" data-bs-target="#Project' + a + 'Modal"><div class="imgbx" style="--image-path:url(../../assets/img/projects/' + i.full_banner + ')"></div><div class="dbx"><h6 class="t">' + i.type + '</h6><h6 class="d">' + i.title + "</h6></div></a></div></div>";
      $("#projectsRow").append(s), s = '<div class="modal fade main-project-modal" id="Project' + a + 'Modal" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body"><button type="button" class="btn cls-btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><div class="row"><div class="col-sm-6 col-lg-5 col-xl-4"><div class="thumb-bx"><img src="./assets/img/projects/' + i.banner + '" alt="Image" class="img"></div></div><div class="col-sm-6 col-lg-7 col-xl-8"><div class="details-bx"><h5 class="t">' + i.title + '</h5><h6 class="s">Project Type : ' + i.type + '</h6><h6 class="s">Project Duration : 3 Months</h6><h6 class="s">Team Members : ' + i.team_size + '</h6><h6 class="s">Role : ' + i.role + '</h6><h6 class="s"><a href="#" target="_blank" class="link">' + i.link + ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a></h6></div></div><div class="col-12"><div class="about-bx"><h5 class="t">About Project</h5><p class="d">' + i.desc + '</p></div></div><div class="col-12"><div class="skills-used"><h5 class="t">Technologies and Skills Used</h5><div class="skills-bx">', i.technology.forEach((function (i, a) {
        s += '<a href="' + techArr[i].link + '" target="_blank" class="link hvr-float-shadow"><img src="./assets/img/icon/' + techArr[i].image + '" alt="' + techArr[i].title + ' Icon" class="img"><h6 class="sk-t">' + techArr[i].title + "</h6></a>"
      })), s += '</div></div></div><div class="col-12"><div class="gallery"><h5 class="t">Screenshots</h5><div class="all-images">', i.screenshots.forEach((function (a, t) {
        s += '<a href="./assets/img/screenshots/' + a + '" class="link span-1 c-4" data-lightbox="' + i.title + ' Screenshots" data-title="' + i.title + " Screenshots " + (t + 1) + '" style="background-image: url(./assets/img/screenshots/' + a + ')"></a>'
      })), s += "</div></div></div></div></div></div></div></div>", $("#projectsRow").append(s)
    }))
  }))
}

function loadSkills() {
  $.getJSON("./assets/json/skills.json", (function (i) {
    i.forEach((function (i, a) {
      var s = '<div class="skill-bx" title="' + i.title + '"><a href="' + i.link + '" class="link" target="_blank"><div class="skill-pro" role="progressbar" aria-valuenow="' + i.skill + '" aria-valuemin="0" aria-valuemax="100" style="--value:' + i.skill + '"><img src="./assets/img/icon/' + i.img + '" class="icon"><div class="stitle">' + i.title + "</div></div></a></div>";
      $("#allSkills").append(s)
    }))
  }))
}

function loadSocialLinks() {
  $.getJSON("./assets/json/social-links.json", (function (i) {
    i.forEach((function (i, a) {
      var s = '<a href="' + i.link + '" class="link" target="_blank" aria-label="' + i.title + '" rel="noreferrer">' + i.icon + "</a>";
      $("#footerAllSocialLinks").append(s)
    }))
  }))
}
$((function () {
  $(".lazy-load").lazy({
    effect: "fadeIn",
    onError: function (i) {}
  })
})), $(document).ready((function () {
  $(".header .mainMenuToggler").click((function () {
    $(".header .nav-cntr").toggleClass("show")
  })), $(window).scroll((function () {
    $(this).scrollTop() > 250 ? $("#goToTopBtn").fadeIn(500) : $("#goToTopBtn").fadeOut(500)
  })), $("#goToTopBtn").click((function (i) {
    return i.preventDefault(), jQuery("html").animate({
      scrollTop: 0
    }, 500), !1
  }))
}));