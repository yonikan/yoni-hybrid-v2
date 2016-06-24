

  // general variables
  myWindow = $(window)
  windowHeight = myWindow.height()
  header = $('#header')
  svgRect = $('#svg-rect')
  showNav = $('#show-nav')
  hideNav = $('#hide-nav')
  navUl = $('#nav-ul')


  // set header height
  if (windowHeight>=900) {
    header.css('height', windowHeight - 250)
  }
  else{
    header.css('height', windowHeight)
  }

  headerHeight = header.outerHeight()
  headerWidth = header.outerWidth()

  $(document).ready(function() {

    // header animation svg
    var svgHeader = $('#svg-header')

    svgRect.attr('height', 1.5*headerHeight)
    svgRect.attr('width', 2*headerWidth)
    svgHeader.css('transform', 'rotate(-55deg)')
    svgHeader.css('-webkit-transform', 'rotate(-55deg)')
    svgHeader.css('ms-transform', 'rotate(-55deg)')

    // wow.js initialization
    if (myWindow.width()>530) {
      new WOW().init();
    };

    // jquery.nav.js initialization
    $('.nav-inner', '#header').onePageNav();


    // owl.carousel.js initialization
    // $("#screens-carousel").owlCarousel({
    //   items : 4,
    //   itemsDesktop : [1199,4],
    //   itemsDesktopSmall : [980,3],
    //   itemsTablet: [768,2],
    //   itemsMobile : [480,1],
    // });
    // $("#reviews-carousel").owlCarousel({
    //   items : 1,
    //   itemsDesktop : [1199,1],
    //   itemsDesktopSmall : [980,1],
    //   itemsTablet: [768,1],
    //   itemsMobile : [480,1],
    //   autoPlay: 8000,
    // });
  });


  // Responsive navigation show/hide
  function showNavig() {
    navUl.css('display','block')
    hideNav.css('display','block')
    showNav.css('display','none')
  }
  function hideNavig() {
    navUl.css('display','none')
    showNav.css('display','block')
    hideNav.css('display','none')
  }
  showNav.click(function() {
    showNavig();
  });
  hideNav.click(function() {
    hideNavig();
  });
  $( "#off-nav" ).click(function() {
    hideNavig();
  });
  $( "#nav-ul > li" ).click(function() {
    if (myWindow.width()<=767) {
      hideNavig();
    };
  });


  // Resize event handler
  myWindow.resize(function() {
    // show/hide responsive navigation
    if (myWindow.width()>767) {
      navUl.css('display','block')
    }
    else{
      navUl.css('display','none')
    }

    // resize SVG rectangle in header
    headerWidth = header.outerWidth()
    svgRect.attr('height', 1.5*headerHeight)
    svgRect.attr('width', 2*headerWidth)
  });


  // scrollTo buttons
  menuBarHeight = $('#menu-bar-fixed').outerHeight();

  $('.scrollTo-download').click(function(){
    $.scrollTo( $('#download').offset().top-menuBarHeight+'px' , 700 );
  });
  $('.scrollTo-about').click(function(){
    $.scrollTo( $('#about').offset().top-menuBarHeight+'px' , 700 );
  });
  $('.scrollTo-header').click(function(){
    $.scrollTo( header , 700 );
  });


  footerHeight = $('footer').outerHeight();
  $('#static-footer').css('margin-top', footerHeight+'px');


  // scroll event
  window.onscroll = scroll;

  function scroll () {

    var wScrollTop = $(window).scrollTop();
    var wScrollBot = wScrollTop + $(window).height();
    var pageHeight = $(document).height();
    var footerContent = $("#footer-content")

    // fixed footer opacity change onscroll
    if(wScrollBot>pageHeight-(footerHeight/2)){
      var newOpacity = (0.99/(footerHeight/2)) * (wScrollBot-(pageHeight-(footerHeight/2)))
      footerContent.css('opacity', newOpacity);
    }
    else{
      footerContent.css('opacity','0');
    }

    // fixed navigation show/hide
    var menuBarFixed = $('#menu-bar-fixed')

    if (wScrollTop >= headerHeight - menuBarFixed.outerHeight()) {
      menuBarFixed.css('top','0');
      menuBarFixed.css('opacity','1');
    }
    else{
      menuBarFixed.css('top',-menuBarFixed.outerHeight()+'px');
      menuBarFixed.css('opacity','0');
    };
  }
