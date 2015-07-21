/*!
* Viewport v1.1.0 (https://github.com/simone97/css-viewport-units-cross-browser/)
* Copyright 2015 Simone Primarosa. (https://github.com/simone97/)
* Licensed under GNU General Public License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)
*/
/*! viewport.js v1.1.0 | GNU GPL | https://github.com/simone97/css-viewport-units-cross-browser/library/viewport.js */

(function($) {
"use strict";
$(window).ready(function() {

    var vh_need = false;
    var vw_need = false;
    var vmin_need = false;
    var vmax_need = false;

    function viewport_init() {
      var html = $("html");
      html.removeClass("no-viewport");
      var deviceAgent = navigator.userAgent.toLowerCase();
      var oldIOS = (/ip(ad|hone|od).*os 3_/.test(deviceAgent) || /ip(ad|hone|od).*os 4_/.test(deviceAgent) || /ip(ad|hone|od).*os 5_/.test(deviceAgent) || /ip(ad|hone|od).*os 6_/.test(deviceAgent) || /ip(ad|hone|od).*os 7_/.test(deviceAgent));
      if(oldIOS) {
        vh_need = true;
        vw_need = true;
        vmin_need = true;
        vmax_need = true;
        return;
      }
      html.addClass("vu-overflow");
      var vh_test = $("<div class='vh-test'></div>").appendTo(html);
      var vh_calc = (vh_test).height() - $(window).height();
      vh_need = (vh_calc >= -1 && vh_calc <= 1) ? false : true;
      vh_test.remove();
      if(vh_need == true) {
        window.vh_height = $("[vh-height]");
        window.vh_width = $("[vh-width]");
        window.vh_font_size = $("[vh-font-size]");
        window.vh_line_height = $("[vh-line-height]");
        window.vh_letter_spacing = $("[vh-letter-spacing]");
        window.vh_text_indent = $("[vh-text-indent]");
        window.vh_top = $("[vh-top]");
        window.vh_right = $("[vh-right]");
        window.vh_bottom = $("[vh-bottom]");
        window.vh_left = $("[vh-left]");
        window.vh_padding = $("[vh-padding]");
        window.vh_padding_top = $("[vh-padding-top]");
        window.vh_padding_right = $("[vh-padding-right]");
        window.vh_padding_bottom = $("[vh-padding-bottom]");
        window.vh_padding_left = $("[vh-padding-left]");
        window.vh_margin = $("[vh-margin]");
        window.vh_margin_top = $("[vh-margin-top]");
        window.vh_margin_right = $("[vh-margin-right]");
        window.vh_margin_bottom = $("[vh-margin-bottom]");
        window.vh_margin_left = $("[vh-margin-left]");
        window.vh_border_width = $("[vh-border-width]");
        window.vh_border_top_width = $("[vh-border-top-width]");
        window.vh_border_right_width = $("[vh-border-right-width]");
        window.vh_border_bottom_width = $("[vh-border-bottom-width]");
        window.vh_border_left_width = $("[vh-border-left-width]");
      }
      var vw_test = $("<div class='vw-test'></div>").appendTo(html);
      var vw_calc = (vw_test).height() - $(window).width();
      vw_need = (vw_calc >= -1 && vw_calc <= 1) ? false : true;
      vw_test.remove();
      if(vw_need == true) {
        window.vw_height = $("[vw-height]");
        window.vw_width = $("[vw-width]");
        window.vw_font_size = $("[vw-font-size]");
        window.vw_line_height = $("[vw-line-height]");
        window.vw_letter_spacing = $("[vw-letter-spacing]");
        window.vw_text_indent = $("[vw-text-indent]");
        window.vw_top = $("[vw-top]");
        window.vw_right = $("[vw-right]");
        window.vw_bottom = $("[vw-bottom]");
        window.vw_left = $("[vw-left]");
        window.vw_padding = $("[vw-padding]");
        window.vw_padding_top = $("[vw-padding-top]");
        window.vw_padding_right = $("[vw-padding-right]");
        window.vw_padding_bottom = $("[vw-padding-bottom]");
        window.vw_padding_left = $("[vw-padding-left]");
        window.vw_margin = $("[vw-margin]");
        window.vw_margin_top = $("[vw-margin-top]");
        window.vw_margin_right = $("[vw-margin-right]");
        window.vw_margin_bottom = $("[vw-margin-bottom]");
        window.vw_margin_left = $("[vw-margin-left]");
        window.vw_border_width = $("[vw-border-width]");
        window.vw_border_top_width = $("[vw-border-top-width]");
        window.vw_border_right_width = $("[vw-border-right-width]");
        window.vw_border_bottom_width = $("[vw-border-bottom-width]");
        window.vw_border_left_width = $("[vw-border-left-width]");
      }
      var vmin_test = $("<div class='vmin-test'></div>").appendTo(html);
      var vmin_calc = (vmin_test).height() - Math.min($(window).height(), $(window).width());
      vmin_need = (vmin_calc >= -1 && vmin_calc <= 1) ? false : true;
      vmin_test.remove();
      if(vmin_need == true) {
        window.vmin_height = $("[vmin-height]");
        window.vmin_width = $("[vmin-width]");
        window.vmin_font_size = $("[vmin-font-size]");
        window.vmin_line_height = $("[vmin-line-height]");
        window.vmin_letter_spacing = $("[vmin-letter-spacing]");
        window.vmin_text_indent = $("[vmin-text-indent]");
        window.vmin_top = $("[vmin-top]");
        window.vmin_right = $("[vmin-right]");
        window.vmin_bottom = $("[vmin-bottom]");
        window.vmin_left = $("[vmin-left]");
        window.vmin_padding = $("[vmin-padding]");
        window.vmin_padding_top = $("[vmin-padding-top]");
        window.vmin_padding_right = $("[vmin-padding-right]");
        window.vmin_padding_bottom = $("[vmin-padding-bottom]");
        window.vmin_padding_left = $("[vmin-padding-left]");
        window.vmin_margin = $("[vmin-margin]");
        window.vmin_margin_top = $("[vmin-margin-top]");
        window.vmin_margin_right = $("[vmin-margin-right]");
        window.vmin_margin_bottom = $("[vmin-margin-bottom]");
        window.vmin_margin_left = $("[vmin-margin-left]");
        window.vmin_border_width = $("[vmin-border-width]");
        window.vmin_border_top_width = $("[vmin-border-top-width]");
        window.vmin_border_right_width = $("[vmin-border-right-width]");
        window.vmin_border_bottom_width = $("[vmin-border-bottom-width]");
        window.vmin_border_left_width = $("[vmin-border-left-width]");
      }
      var vmax_test = $("<div class='vmax-test'></div>").appendTo(html);
      var vmax_calc = (vmax_test).height() - Math.max($(window).height(), $(window).width());
      vmax_need = (vmax_calc >= -1 && vmax_calc <= 1) ? false : true;
      vmax_test.remove();
      if(vmax_need == true) {
        window.vmax_height = $("[vmax-height]");
        window.vmax_width = $("[vmax-width]");
        window.vmax_font_size = $("[vmax-font-size]");
        window.vmax_line_height = $("[vmax-line-height]");
        window.vmax_letter_spacing = $("[vmax-letter-spacing]");
        window.vmax_text_indent = $("[vmax-text-indent]");
        window.vmax_top = $("[vmax-top]");
        window.vmax_right = $("[vmax-right]");
        window.vmax_bottom = $("[vmax-bottom]");
        window.vmax_left = $("[vmax-left]");
        window.vmax_padding = $("[vmax-padding]");
        window.vmax_padding_top = $("[vmax-padding-top]");
        window.vmax_padding_right = $("[vmax-padding-right]");
        window.vmax_padding_bottom = $("[vmax-padding-bottom]");
        window.vmax_padding_left = $("[vmax-padding-left]");
        window.vmax_margin = $("[vmax-margin]");
        window.vmax_margin_top = $("[vmax-margin-top]");
        window.vmax_margin_right = $("[vmax-margin-right]");
        window.vmax_margin_bottom = $("[vmax-margin-bottom]");
        window.vmax_margin_left = $("[vmax-margin-left]");
        window.vmax_border_width = $("[vmax-border-width]");
        window.vmax_border_top_width = $("[vmax-border-top-width]");
        window.vmax_border_right_width = $("[vmax-border-right-width]");
        window.vmax_border_bottom_width = $("[vmax-border-bottom-width]");
        window.vmax_border_left_width = $("[vmax-border-left-width]");
      }
      html.removeClass("vu-overflow");
    }
    function viewport_exec() {
      var html = $("html");
      html.addClass("vu-overflow");
      if(vh_need == true) {
        var vh_value = $(window).height()/100;
        window.vh_height.each(function() {$(this).css("height", $(this).attr("vh-height") * vh_value);});
        window.vh_width.each(function() {$(this).css("width", $(this).attr("vh-width") * vh_value);});
        window.vh_font_size.each(function() {$(this).css("font-size", $(this).attr("vh-font-size") * vh_value);});
        window.vh_line_height.each(function() {$(this).css("line-height", $(this).attr("vh-line-height") * vh_value);});
        window.vh_letter_spacing.each(function() {$(this).css("letter-spacing", $(this).attr("vh-letter-spacing") * vh_value);});
        window.vh_text_indent.each(function() {$(this).css("text-indent", $(this).attr("vh-text-indent") * vh_value);});
        window.vh_top.each(function() {$(this).css("top", $(this).attr("vh-top") * vh_value);});
        window.vh_right.each(function() {$(this).css("right", $(this).attr("vh-right") * vh_value);});
        window.vh_bottom.each(function() {$(this).css("bottom", $(this).attr("vh-bottom") * vh_value);});
        window.vh_left.each(function() {$(this).css("left", $(this).attr("vh-left") * vh_value);});
        window.vh_padding.each(function() {$(this).css("padding", $(this).attr("vh-padding") * vh_value);});
        window.vh_padding_top.each(function() {$(this).css("padding-top", $(this).attr("vh-padding-top") * vh_value);});
        window.vh_padding_right.each(function() {$(this).css("padding-right", $(this).attr("vh-padding-right") * vh_value);});
        window.vh_padding_bottom.each(function() {$(this).css("padding-bottom", $(this).attr("vh-padding-bottom") * vh_value);});
        window.vh_padding_left.each(function() {$(this).css("padding-left", $(this).attr("vh-padding-left") * vh_value);});
        window.vh_margin.each(function() {$(this).css("margin", $(this).attr("vh-margin") * vh_value);});
        window.vh_margin_top.each(function() {$(this).css("margin-top", $(this).attr("vh-margin-top") * vh_value);});
        window.vh_margin_right.each(function() {$(this).css("margin-right", $(this).attr("vh-margin-right") * vh_value);});
        window.vh_margin_bottom.each(function() {$(this).css("margin-bottom", $(this).attr("vh-margin-bottom") * vh_value);});
        window.vh_margin_left.each(function() {$(this).css("margin-left", $(this).attr("vh-margin-left") * vh_value);});
        window.vh_border_width.each(function() {$(this).css("border-width", $(this).attr("vh-border-width") * vh_value);});
        window.vh_border_top_width.each(function() {$(this).css("border-top-width", $(this).attr("vh-border-top-width") * vh_value);});
        window.vh_border_right_width.each(function() {$(this).css("border-right-width", $(this).attr("vh-border-right-width") * vh_value);});
        window.vh_border_bottom_width.each(function() {$(this).css("border-bottom-width", $(this).attr("vh-border-bottom-width") * vh_value);});
        window.vh_border_left_width.each(function() {$(this).css("border-left-width", $(this).attr("vh-border-left-width") * vh_value);});
      }
      if(vw_need == true) {
        var vw_value = $(window).width()/100;
        window.vw_height.each(function() {$(this).css("height", $(this).attr("vw-height") * vw_value);});
        window.vw_width.each(function() {$(this).css("width", $(this).attr("vw-width") * vw_value);});
        window.vw_font_size.each(function() {$(this).css("font-size", $(this).attr("vw-font-size") * vw_value);});
        window.vw_line_height.each(function() {$(this).css("line-height", $(this).attr("vw-line-height") * vw_value);});
        window.vw_letter_spacing.each(function() {$(this).css("letter-spacing", $(this).attr("vw-letter-spacing") * vw_value);});
        window.vw_text_indent.each(function() {$(this).css("text-indent", $(this).attr("vw-text-indent") * vw_value);});
        window.vw_top.each(function() {$(this).css("top", $(this).attr("vw-top") * vw_value);});
        window.vw_right.each(function() {$(this).css("right", $(this).attr("vw-right") * vw_value);});
        window.vw_bottom.each(function() {$(this).css("bottom", $(this).attr("vw-bottom") * vw_value);});
        window.vw_left.each(function() {$(this).css("left", $(this).attr("vw-left") * vw_value);});
        window.vw_padding.each(function() {$(this).css("padding", $(this).attr("vw-padding") * vw_value);});
        window.vw_padding_top.each(function() {$(this).css("padding-top", $(this).attr("vw-padding-top") * vw_value);});
        window.vw_padding_right.each(function() {$(this).css("padding-right", $(this).attr("vw-padding-right") * vw_value);});
        window.vw_padding_bottom.each(function() {$(this).css("padding-bottom", $(this).attr("vw-padding-bottom") * vw_value);});
        window.vw_padding_left.each(function() {$(this).css("padding-left", $(this).attr("vw-padding-left") * vw_value);});
        window.vw_margin.each(function() {$(this).css("margin", $(this).attr("vw-margin") * vw_value);});
        window.vw_margin_top.each(function() {$(this).css("margin-top", $(this).attr("vw-margin-top") * vw_value);});
        window.vw_margin_right.each(function() {$(this).css("margin-right", $(this).attr("vw-margin-right") * vw_value);});
        window.vw_margin_bottom.each(function() {$(this).css("margin-bottom", $(this).attr("vw-margin-bottom") * vw_value);});
        window.vw_margin_left.each(function() {$(this).css("margin-left", $(this).attr("vw-margin-left") * vw_value);});
        window.vw_border_width.each(function() {$(this).css("border-width", $(this).attr("vw-border-width") * vw_value);});
        window.vw_border_top_width.each(function() {$(this).css("border-top-width", $(this).attr("vw-border-top-width") * vw_value);});
        window.vw_border_right_width.each(function() {$(this).css("border-right-width", $(this).attr("vw-border-right-width") * vw_value);});
        window.vw_border_bottom_width.each(function() {$(this).css("border-bottom-width", $(this).attr("vw-border-bottom-width") * vw_value);});
        window.vw_border_left_width.each(function() {$(this).css("border-left-width", $(this).attr("vw-border-left-width") * vw_value);});
      }
      if(vmin_need == true) {
        var vmin_value = Math.min($(window).height(), $(window).width())/100;
        window.vmin_height.each(function() {$(this).css("height", $(this).attr("vmin-height") * vmin_value);});
        window.vmin_width.each(function() {$(this).css("width", $(this).attr("vmin-width") * vmin_value);});
        window.vmin_font_size.each(function() {$(this).css("font-size", $(this).attr("vmin-font-size") * vmin_value);});
        window.vmin_line_height.each(function() {$(this).css("line-height", $(this).attr("vmin-line-height") * vmin_value);});
        window.vmin_letter_spacing.each(function() {$(this).css("letter-spacing", $(this).attr("vmin-letter-spacing") * vmin_value);});
        window.vmin_text_indent.each(function() {$(this).css("text-indent", $(this).attr("vmin-text-indent") * vmin_value);});
        window.vmin_top.each(function() {$(this).css("top", $(this).attr("vmin-top") * vmin_value);});
        window.vmin_right.each(function() {$(this).css("right", $(this).attr("vmin-right") * vmin_value);});
        window.vmin_bottom.each(function() {$(this).css("bottom", $(this).attr("vmin-bottom") * vmin_value);});
        window.vmin_left.each(function() {$(this).css("left", $(this).attr("vmin-left") * vmin_value);});
        window.vmin_padding.each(function() {$(this).css("padding", $(this).attr("vmin-padding") * vmin_value);});
        window.vmin_padding_top.each(function() {$(this).css("padding-top", $(this).attr("vmin-padding-top") * vmin_value);});
        window.vmin_padding_right.each(function() {$(this).css("padding-right", $(this).attr("vmin-padding-right") * vmin_value);});
        window.vmin_padding_bottom.each(function() {$(this).css("padding-bottom", $(this).attr("vmin-padding-bottom") * vmin_value);});
        window.vmin_padding_left.each(function() {$(this).css("padding-left", $(this).attr("vmin-padding-left") * vmin_value);});
        window.vmin_margin.each(function() {$(this).css("margin", $(this).attr("vmin-margin") * vmin_value);});
        window.vmin_margin_top.each(function() {$(this).css("margin-top", $(this).attr("vmin-margin-top") * vmin_value);});
        window.vmin_margin_right.each(function() {$(this).css("margin-right", $(this).attr("vmin-margin-right") * vmin_value);});
        window.vmin_margin_bottom.each(function() {$(this).css("margin-bottom", $(this).attr("vmin-margin-bottom") * vmin_value);});
        window.vmin_margin_left.each(function() {$(this).css("margin-left", $(this).attr("vmin-margin-left") * vmin_value);});
        window.vmin_border_width.each(function() {$(this).css("border-width", $(this).attr("vmin-border-width") * vmin_value);});
        window.vmin_border_top_width.each(function() {$(this).css("border-top-width", $(this).attr("vmin-border-top-width") * vmin_value);});
        window.vmin_border_right_width.each(function() {$(this).css("border-right-width", $(this).attr("vmin-border-right-width") * vmin_value);});
        window.vmin_border_bottom_width.each(function() {$(this).css("border-bottom-width", $(this).attr("vmin-border-bottom-width") * vmin_value);});
        window.vmin_border_left_width.each(function() {$(this).css("border-left-width", $(this).attr("vmin-border-left-width") * vmin_value);});
      }
      if(vmax_need == true) {
        var vmax_value = Math.max($(window).height(), $(window).width())/100;
        window.vmax_height.each(function() {$(this).css("height", $(this).attr("vmax-height") * vmax_value);});
        window.vmax_width.each(function() {$(this).css("width", $(this).attr("vmax-width") * vmax_value);});
        window.vmax_font_size.each(function() {$(this).css("font-size", $(this).attr("vmax-font-size") * vmax_value);});
        window.vmax_line_height.each(function() {$(this).css("line-height", $(this).attr("vmax-line-height") * vmax_value);});
        window.vmax_letter_spacing.each(function() {$(this).css("letter-spacing", $(this).attr("vmax-letter-spacing") * vmax_value);});
        window.vmax_text_indent.each(function() {$(this).css("text-indent", $(this).attr("vmax-text-indent") * vmax_value);});
        window.vmax_top.each(function() {$(this).css("top", $(this).attr("vmax-top") * vmax_value);});
        window.vmax_right.each(function() {$(this).css("right", $(this).attr("vmax-right") * vmax_value);});
        window.vmax_bottom.each(function() {$(this).css("bottom", $(this).attr("vmax-bottom") * vmax_value);});
        window.vmax_left.each(function() {$(this).css("left", $(this).attr("vmax-left") * vmax_value);});
        window.vmax_padding.each(function() {$(this).css("padding", $(this).attr("vmax-padding") * vmax_value);});
        window.vmax_padding_top.each(function() {$(this).css("padding-top", $(this).attr("vmax-padding-top") * vmax_value);});
        window.vmax_padding_right.each(function() {$(this).css("padding-right", $(this).attr("vmax-padding-right") * vmax_value);});
        window.vmax_padding_bottom.each(function() {$(this).css("padding-bottom", $(this).attr("vmax-padding-bottom") * vmax_value);});
        window.vmax_padding_left.each(function() {$(this).css("padding-left", $(this).attr("vmax-padding-left") * vmax_value);});
        window.vmax_margin.each(function() {$(this).css("margin", $(this).attr("vmax-margin") * vmax_value);});
        window.vmax_margin_top.each(function() {$(this).css("margin-top", $(this).attr("vmax-margin-top") * vmax_value);});
        window.vmax_margin_right.each(function() {$(this).css("margin-right", $(this).attr("vmax-margin-right") * vmax_value);});
        window.vmax_margin_bottom.each(function() {$(this).css("margin-bottom", $(this).attr("vmax-margin-bottom") * vmax_value);});
        window.vmax_margin_left.each(function() {$(this).css("margin-left", $(this).attr("vmax-margin-left") * vmax_value);});
        window.vmax_border_width.each(function() {$(this).css("border-width", $(this).attr("vmax-border-width") * vmax_value);});
        window.vmax_border_top_width.each(function() {$(this).css("border-top-width", $(this).attr("vmax-border-top-width") * vmax_value);});
        window.vmax_border_right_width.each(function() {$(this).css("border-right-width", $(this).attr("vmax-border-right-width") * vmax_value);});
        window.vmax_border_bottom_width.each(function() {$(this).css("border-bottom-width", $(this).attr("vmax-border-bottom-width") * vmax_value);});
        window.vmax_border_left_width.each(function() {$(this).css("border-left-width", $(this).attr("vmax-border-left-width") * vmax_value);});
      }
      html.removeClass("vu-overflow");
    }
    viewport_init();
    viewport_exec();
    $(window).resize(function() { viewport_exec(); });
  });

})(jQuery);