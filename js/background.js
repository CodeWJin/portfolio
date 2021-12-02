$(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    anchors: ["home", "skill", "project", "career", "connect"],
    // easingcss3: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
  });
  $("#Sec_Home").click(function () {
    $.fn.fullpage.moveTo(1);
  });
  $("#Sec_Skill").click(function () {
    $.fn.fullpage.moveTo(2);
  });
  $("#Sec_Project").click(function () {
    $.fn.fullpage.moveTo(3);
  });
  $("#Sec_Career").click(function () {
    $.fn.fullpage.moveTo(4);
  });
  $("#Sec_Connect").click(function () {
    $.fn.fullpage.moveTo(5);
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace("fadeOut", "fadeIn");
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace("fadeIn", "fadeOut");
      }
    });
  }
  const fadeElms = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  fadeElms.forEach((el) => observer.observe(el));
});
