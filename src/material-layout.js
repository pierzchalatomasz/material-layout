/*
 * 
 * 
 *
 * Copyright (c) 2016 Tomasz Pierzchała
 * Licensed under the MIT license.
 */
(function ($) {
  $.materialLayout = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.materialLayout.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'materialLayout' + options.punctuation;
  };

  // Default options.
  $.materialLayout.options = {
    punctuation: '.'
  };
}(jQuery));
