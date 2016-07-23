/*
 * bsCheckbox 0.2
 * Docs: https://github.com/ktasos/bs-checkbox
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

            if(jThis.closest('label').length === 0) {
                jThis.click(function() {
                    jCheck[0].checked = !jCheck[0].checked;
                    jThis.removeClass('glyphicon-check').removeClass('glyphicon-unchecked');
                    jThis.addClass(jCheck[0].checked ? 'glyphicon-check' : 'glyphicon-unchecked');
                    jCheck.trigger('change');
                });
            }

            if (jThis.closest('.checkbox').length === 0 && jThis.closest('.form-group').length > 0) {
                jThis.addClass('checkbox');
            }

            jCheck.change(function () {
                jThis.removeClass('glyphicon-check').removeClass('glyphicon-unchecked');
                jThis.addClass(jCheck[0].checked ? 'glyphicon-check' : 'glyphicon-unchecked');
            });
        });
    };

    $.fn.bsCheckbox.defaultOptions = {};
})(jQuery);