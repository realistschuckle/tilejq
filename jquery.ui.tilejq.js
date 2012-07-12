(function($) {
  $.widget('curtissimo.tilejq', {
    options: {
      minimized: null,
      maximized: null
    },
    _create: function() {
      var tilejq = this
        , firstTile = tilejq.element.children().first()
        , firstTileSmall = firstTile.children().first()
        , getSizeOption = function(size, dimension) {
            size = tilejq.options[size];
            if(typeof size !== 'undefined' && size !== null) {
              dimension = size[dimension];
              if(typeof dimension !== 'undefined') {
                return dimension;
              }
            }
          }
        ;
      tilejq._width = getSizeOption('maximized', 'width') || firstTile.width();
      tilejq._height = getSizeOption('maximized', 'height') || firstTile.outerHeight();
      tilejq._smWidth = getSizeOption('minimized', 'width') || firstTileSmall.width();
      tilejq._smHeight = getSizeOption('minimized', 'height') || firstTileSmall.height();

      tilejq.wrapper = $('<div class="ui-widget ui-tilejq"><div class="ui-tilejq-max"></div><div class="ui-tilejq-min"></div></div>');
      tilejq.maximizer = $('<div class="ui-tilejq-tools ui-widget ui-widget-content"><div class="ui-icon ui-icon-arrow-4-diag"></div></div>')
        .hide();
      tilejq.minimizer = $('<div class="ui-tilejq-tools ui-widget ui-widget-content"><div class="ui-icon ui-icon-arrowthick-1-sw"></div></div>')
        .hide();
      tilejq.max = tilejq.wrapper
        .children()
        .first()
        .on('mouseover', '.ui-tilejq-tile-header', function(e) {
          e.stopPropagation();
          tilejq.minimizer
            .appendTo($(this))
            .width('')
            .show();
        })
        .on('mousedown', '.ui-icon', function(e) {
          e.stopPropagation();
          tilejq.minimizer.hide();
          var tileToReturn = tilejq.max
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
        .sortable({
          start: function() {
            tilejq.maximizer.hide();
          },
          stop: function() {
            tilejq.maximizer.show();
          }
        })
        .addClass('ui-tilejq-min-scroller')
        .on('mouseover', '.ui-tilejq-tile-header', function(e) {
          e.stopPropagation();
          tilejq.maximizer
            .appendTo($(this))
            .width('')
            .show();
        })
        .on('mousedown', '.ui-icon', function(e) {
          e.stopPropagation();
          tilejq.maximizer
            .hide();
          var tileToMove = $(e.target)
            .closest('.ui-tilejq-tile')
            .addClass('ui-tilejq-static')
            .width(tilejq._width)
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
        })
        .after(tilejq.wrapper);
      tilejq.wrapper
        .find('.ui-tilejq-min')
        .append(tilejq.element);
      $(document).on('mouseover', function() {
        tilejq.maximizer.hide();
        tilejq.minimizer.hide();
      });
    },
    _init: function() {
      this.element
        .children()
          .width(this._smWidth)
          .height(this._smHeight)
          .addClass('ui-widget ui-tilejq-tile')
          .children(':first-child')
            .height(this._smHeight)
            .addClass('ui-tilejq-tile-header')
          .end()
          .children(':last-child')
            .height(this._height)
            .addClass('ui-widget-content')
          .end()
        .end();
    }
  });
})(jQuery);
