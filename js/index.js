//typing area
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}

scrollTrigger(".intro-text");

//about area
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "1000px 1000px",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  })
  .from(".text1", {
    x: innerWidth * 1,
  })
  .from(".text2", {
    x: innerWidth * -1,
  })
  .from(".text3", {
    x: innerWidth * 1,
  });

//skill area
window.addEventListener("scroll", function () {
  let skillSection = document.getElementById("skill");
  let skillSectionTop = skillSection.offsetTop;
  let skillSectionBottom = skillSectionTop + skillSection.offsetHeight;
  let scrollPosition = window.scrollY + window.innerHeight;

  if (
    scrollPosition >= skillSectionTop &&
    scrollPosition <= skillSectionBottom
  ) {
    skillSection.classList.add("fade-in");
    skillSection.classList.remove("fade-out");
  } else {
    skillSection.classList.remove("fade-in");
    skillSection.classList.add("fade-out");
  }
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

//starry BG
function init() {
  // estrelas

  let style = ["style1", "style2", "style3", "style4"];
  let tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  let opacity = [
    "opacity1",
    "opacity1",
    "opacity1",
    "opacity2",
    "opacity2",
    "opacity3",
  ];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let estrela = "";
  let qtdeEstrelas = 250;
  let skillAndPortfolio = document.querySelectorAll("#skill, #portfolio");

  skillAndPortfolio.forEach(function (element) {
    let widthWindow = element.offsetWidth;
    let heightWindow = element.offsetHeight;

    for (let i = 0; i < qtdeEstrelas; i++) {
      estrela +=
        "<span class='estrela " +
        style[getRandomArbitrary(0, 4)] +
        " " +
        opacity[getRandomArbitrary(0, 6)] +
        " " +
        tam[getRandomArbitrary(0, 5)] +
        "' style='animation-delay: ." +
        getRandomArbitrary(0, 9) +
        "s; left: " +
        getRandomArbitrary(0, widthWindow) +
        "px; top: " +
        getRandomArbitrary(0, heightWindow) +
        "px;'></span>";
    }

    element.querySelector(".constelacao").innerHTML = estrela;

    // meteoros

    let numeroAleatorio = 5000;

    setTimeout(function () {
      carregarMeteoro(element);
    }, numeroAleatorio);

    function carregarMeteoro(element) {
      setTimeout(carregarMeteoro, numeroAleatorio);
      numeroAleatorio = getRandomArbitrary(5000, 10000);
      let meteoro =
        "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
      element.querySelector(".chuvaMeteoro").innerHTML = meteoro;
      setTimeout(function () {
        element.querySelector(".chuvaMeteoro").innerHTML = "";
      }, 1000);
    }
  });
}

window.onload = init;

//top button
const topB = document.querySelector(".left");

topB.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//portfolio
window.addEventListener("DOMContentLoaded", function () {
  // 포트폴리오 섹션의 위치를 스킬 섹션 아래로 이동
  let skillSection = document.getElementById("skill");
  let portfolioSection = document.getElementById("portfolio");
  skillSection.parentNode.insertBefore(
    portfolioSection,
    skillSection.nextSibling
  );
  //footer

  // 포트폴리오 섹션의 높이를 계산하여 스킬 섹션의 높이에 추가하여 겹침 방지
  let skillHeight = skillSection.offsetHeight;
  portfolioSection.style.marginTop = skillHeight + "px";
});

//porfolio swiper slide
let swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//contact
gsap.registerPlugin(ScrollTrigger);
gsap.to("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    // toggleActions: "restart none reverse none",
  },
  y: -150,
  duration: 1,
});


