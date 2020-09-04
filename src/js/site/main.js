$(window).on("load", function () {

  header_p_height = $('.layer-1').height();
  $("header").height(header_p_height);

  foot_p_height = $('.layer-1-foot').height();
  $("#footerparallax").height(foot_p_height);


  $(window).resize(function () {
    header_p_height = $('.layer-1').height();
    $("header").height(header_p_height);

    foot_p_height = $('.layer-1-foot').height();
    $("#footerparallax").height(foot_p_height);
  });


  // init ScrollMagic Controller
  var headercontroller = new ScrollMagic.Controller();

  // init ScrollMagic Controller
  var footercontroller = new ScrollMagic.Controller();

  //header animations

  var layer_four = TweenMax.to('.layer-4', 2, {
    y: '-20%',
    ease: Power0.easeNone
  });


  var layer_three = TweenMax.to('.layer-3', 2, {
    y: '-10%',
    ease: Power0.easeNone
  });


  var layer_two = TweenMax.to('.layer-2', 2, {
    y: '10%',
    ease: Power0.easeNone
  });


  var layer_three_foot = TweenMax.to('.layer-2-foot', 2, {
    y: '-4%',
    ease: Power0.easeNone
  });

  // Scale Scene
  var layer_one_scene = new ScrollMagic.Scene({
      triggerElement: '#footerparallax',
      triggerHook: 0,
      duration: '100%',
    })
    .setTween(layer_three_foot)
    .addTo(footercontroller);

  // Scale Scene
  var layer_one_scene = new ScrollMagic.Scene({
      triggerElement: 'header',
      triggerHook: 0,
      duration: header_p_height
    })
    .setTween(layer_four)
    .addTo(headercontroller);

  // Scale Scene
  var layer_two_scene = new ScrollMagic.Scene({
      triggerElement: 'header',
      triggerHook: 0,
      duration: header_p_height
    })
    .setTween(layer_two)
    .addTo(headercontroller);

  // Scale Scene
  var layer_two_scene = new ScrollMagic.Scene({
      triggerElement: 'header',
      triggerHook: 0,
      duration: header_p_height
    })
    .setTween(layer_three)
    .addTo(headercontroller);




  //end of parallax effects
});

// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {

      // Call our function and pass any params we received
      fn(...params);
    });

  }
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), {
  passive: true
});

// Update scroll position for first time
storeScroll();