/*
 * bsCheckbox 0.1
 * Docs: https://github.com/ktasos/bootstrap-fabox
 * Author: Tasos Karagiannis
 * Website: http://codingstill.com
 * Twitter: https://twitter.com/codingstill
 */

(function ($) {
    $.fn.bsCheckbox = function (options) {
        options = $.extend({}, $.fn.bsCheckbox.defaultOptions, options);

        this.each(function (idx, item) {
            var jThis = jQuery(item);
            var jCheck = jThis.find('input');
            jThis.addClass('glyphicon').addClass(jCheck[0].checked ? 'glyphicon-check' : 'glyphicon-unchecked');

            jCheck.change(function () {
                jThis.removeClass('glyphicon-check').removeClass('glyphicon-unchecked');
                jThis.addClass(this.checked ? 'glyphicon-check' : 'glyphicon-unchecked');
            });
        });
    };

    $.fn.bsCheckbox.defaultOptions = {};
})(jQuery);