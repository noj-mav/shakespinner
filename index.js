(function () {
  "use strict";
  let spinner = document.getElementById("spinner");
  let pusher = document.getElementById("pusher");

  function scrollAndSpinStuff() {
    let totalPageHeight = $(document).height();
    let verticalScrollDistance = $(document).scrollTop();

    if (verticalScrollDistance > 1) {
      if (spinner.classList.contains("spinner") == false) {
        spinner.classList.add("spinner");
      }
    } else {
      if (spinner.classList.contains("spinner") == true) {
        spinner.classList.remove("spinner");
      }
    }

    let angleOfRotation = verticalScrollDistance / totalPageHeight * 1080;

    spinner.style.webkitTransform = 'rotate(' + angleOfRotation+ 'deg)';
    spinner.style.mozTransform = 'rotate(' + angleOfRotation+ 'deg)';
    spinner.style.msTransform = 'rotate(' + angleOfRotation+ 'deg)';
    spinner.style.oTransform = 'rotate(' + angleOfRotation+ 'deg)';
    spinner.style.transform = 'rotate(' + angleOfRotation+ 'deg)';
    let pusherHeight = verticalScrollDistance / totalPageHeight * 97;
    pusher.style.height = pusherHeight + "vh";

    if (pusherHeight > 85) {
      spinner.classList.add("shake");
      if (spinner.classList.contains("shake") == false) {
      }
    } else {
      spinner.classList.remove("shake");
      if (spinner.classList.contains("shake") == true) {
      }
    }
  }

  window.addEventListener('scroll', function (e) {
    scrollAndSpinStuff();
  });

  $(document).ready(scrollAndSpinStuff);

  spinner.addEventListener('click', function() {
    $('html, body').animate({scrollTop: 0}, 400);
  });


})();