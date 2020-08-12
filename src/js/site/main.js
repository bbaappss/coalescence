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