/*!
* Viewport v1.2.0 (https://github.com/simone97/css-viewport-units-cross-browser/)
* Copyright 2015 Simone Primarosa. (https://github.com/simone97/)
* Licensed under GNU General Public License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)
*/
/*! viewport-vh-height.js v1.2.0 | GNU GPL | https://github.com/simone97/css-viewport-units-cross-browser/library/viewport-vh-height.js */

(function($) {
"use strict";
$(window).ready(function() {

    var vh_need = false;

    function viewport_init() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      var oldIOS = (/ip(ad|hone|od).*os 3_/.test(deviceAgent) || /ip(ad|hone|od).*os 4_/.test(deviceAgent) || /ip(ad|hone|od).*os 5_/.test(deviceAgent) || /ip(ad|hone|od).*os 6_/.test(deviceAgent) || /ip(ad|hone|od).*os 7_/.test(deviceAgent));
      if(oldIOS) {
        vh_need = false;
        return;
      }
      var html = $("html");
      html.removeClass("no-viewport");
      html.addClass("vu-overflow");
      var vh_test = $("<div class='vh-test'></div>").appendTo(html);
      var vh_calc = (vh_test).height() - $(window).height();
      vh_need = (vh_calc >= -1 && vh_calc <= 1) ? false : true;
      vh_test.remove();
      if(vh_need == true) {
        window.vh_height = $("[vh-height]");
      }
      html.removeClass("vu-overflow");
    }
    function viewport_exec() {
      var html = $("html");
      html.addClass("vu-overflow");
      if(vh_need == true) {
        var vh_value = $(window).height()/100;
        window.vh_height.each(function() {$(this).css("height", $(this).attr("vh-height") * vh_value);});
      }
      html.removeClass("vu-overflow");
    }
    viewport_init();
    viewport_exec();
    $(window).resize(function() { viewport_exec(); });
  });

})(jQuery);