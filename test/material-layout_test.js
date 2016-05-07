(function ($) {
  module('jQuery.materialLayout');

  test('is materialLayout', function () {
    expect(2);
    strictEqual($.materialLayout(), 'materialLayout.', 'should be materialLayout');
    strictEqual($.materialLayout({punctuation: '!'}), 'materialLayout!', 'should be thoroughly materialLayout');
  });
  
}(jQuery));
