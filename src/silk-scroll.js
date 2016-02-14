
'use strict';

var jQuery = require('jquery');
var $ = jQuery;

/** @src
 * Cross browser support for scrolling.
 */

var SilkScroll= {
  active: function(){

    // This script only works on the client.. do not use until piped down
    if(typeof document === 'undefined' || typeof window === 'undefined'){
      return -1;
    }

    require('./mousewheel.js');
    require('./easing.js');
    
    var isWebkit = typeof document.documentElement.style.webkitAppearance !== 'undefined',
        top = 0,
        step = 200,
        viewport = $(window).height(),
        body = undefined,
        wheel = false;

    body = isWebkit ? $('body') : $('html');

    $('body').mousewheel(function(event, delta){
        wheel = true;
        if(delta < 0){
          top = (top+viewport) >= $(document).height() ? top : top+=step;
          body.stop().animate({scrollTop: top}, 300, function(){
              wheel = false;
          });
        }else{
          top = top <= 0 ? 0 : top-=step;
          body.stop().animate({scrollTop: top}, 300, function () {
            wheel = false;
          });
        }
        return false;
    });

    $(window).on('resize', function(e){
      viewport = $(this).height();
    });

    $(window).on('scroll', function(e){
      !wheel ? top = $(this).scrollTop() : 0;
    });

  }
}

exports = module.exports = SilkScroll;

// If attempting to run in browser, push SilkScroll on global scope
if(typeof window !== 'undefined'){
  window.SilkScroll = SilkScroll;
}