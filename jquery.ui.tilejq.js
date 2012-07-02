(function($) {
  $.widget('curtissimo.tilejq', {
    options: {

    },
    _create: function() {
      var tilejq = this
        , firstTile = tilejq.element.children().first()
        , firstTileSmall = firstTile.children().first()
        ;
      tilejq._width = firstTile.width();
      tilejq._height = firstTile.height();
      tilejq._smWidth = firstTileSmall.width();
      tilejq._smHeight = firstTileSmall.height();

      tilejq.wrapper = $('<div class="ui-widget ui-tilejq"><div class="ui-tilejq-max"></div><div class="ui-tilejq-min"></div></div>');
      tilejq.max = tilejq.wrapper
        .children()
        .first()
        .on('dblclick', function(e) {
          var tileToReturn = $(this)
            .children()
            .removeClass('ui-tilejq-static')
            .height(tilejq._smHeight)
            .width(tilejq._smWidth)
            .remove();
          tilejq.element.append(tileToReturn);
          tilejq.min.width('');
          tilejq.element.height('');
        });
      tilejq.min = tilejq.wrapper.children().last();
      tilejq.element
        .sortable()
        .addClass('ui-tilejq-min-scroller')
        .on('dblclick', function(e) {
          var tileToMove = $(e.target)
            .closest('.ui-tilejq-tile')
            .addClass('ui-tilejq-static')
            .width('')
            .height('');
          var tileToReturn = tilejq.max
            .children()
            .removeClass('ui-tilejq-static')
            .height(tilejq._smHeight)
            .width(tilejq._smWidth)
            .remove();
          tilejq.element.append(tileToReturn);
          tilejq.max.append(tileToMove);
          tilejq.min.width(tilejq._smWidth + 32);
          tilejq.element.height(tilejq._height);
        })
        .children()
          .addClass('ui-widget ui-tilejq-tile')
          .children(':last-child')
            .addClass('ui-widget-content')
          .end()
        .end()
        .after(tilejq.wrapper);
      tilejq.wrapper
        .find('.ui-tilejq-min')
        .append(tilejq.element);
      tilejq.element
        .children()
          .height(tilejq._smHeight)
          .width(tilejq._smWidth);
    }
  });
})(jQuery);
