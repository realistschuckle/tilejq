(function($) {
  $.widget('curtissimo.tilejq', {
    options: {

    },
    _create: function() {
      var tilejq = this
        , firstTile = tilejq.element.children().first()
        , firstTileSmall = firstTile.children().first()
        , maximizeTile = function(e) {
            e.stopPropagation();
            tilejq.tools
              .hide();
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
          }
        ;
      tilejq._width = firstTile.width();
      tilejq._height = firstTile.outerHeight();
      tilejq._smWidth = firstTileSmall.width();
      tilejq._smHeight = firstTileSmall.height();

      tilejq.wrapper = $('<div class="ui-widget ui-tilejq"><div class="ui-tilejq-max"></div><div class="ui-tilejq-min"></div></div>');
      tilejq.tools = $('<div class="ui-tilejq-tools ui-widget ui-widget-content"><div class="ui-icon ui-icon-arrow-4-diag"></div></div>')
        .hide()
        .on('click', '.ui-icon', function(e) {
          e.stopPropagation();
          maximizeTile({
            stopPropagation: function() {},
            target: this
          });
        })
        .on('dblclick', '.ui-icon', function(e) {
          e.stopPropagation();
        });
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
        .on('dblclick', maximizeTile)
        .on('mouseover', '.ui-tilejq-tile-header', function(e) {
          e.stopPropagation();
          tilejq.tools
            .appendTo($(this))
            .width('')
            .show();
        })
        .children()
          .addClass('ui-widget ui-tilejq-tile')
          .children(':first-child')
            .addClass('ui-tilejq-tile-header')
          .end()
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
      $(document).on('mouseover', function() {
        tilejq.tools.hide();
      });
    }
  });
})(jQuery);
