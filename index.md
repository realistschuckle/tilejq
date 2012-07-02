---
layout: page
title: tilejq by realistschuckle
---

## Pronunciation

Just say "tiledge". The "q" is silent.

## Examples

* [CSS-styled tiles](/tilejq/examples/css-styled-example.html)

## API

### Options

*None, just yet.*

### Methods

*None, just yet.*

### Events

*None, just yet.*

## Usage

{% highlight html %}
<div id="tileview">
  <div>
    <div>Tile 1</div>
    <div>I like being the first tile.</div>
  </div>
  <div>
    <div>Tile 2</div>
    <div>Mom always said I was her second favorite.</div>
  </div>
  <div>
    <div>Tile 3</div>
    <div>Third?!? Third!?! What kind of life is that?!?</div>
  </div>
</div>
{% endhighlight %}

{% highlight javascript %}
$('#tileview').tilejq();
{% endhighlight %}

If the tileview changes, that is, you add new tiles through some DOM
manipulation magic, please call `.tilejq()` again so the library can do its
magic and mark your tiles.

## License

I have released this software under the BSD 3-clause license. Please see the
LICENSE file for details.

## Motivation

I wanted a tile view that did not rely on JavaScript arrays and special APIs.
Instead, I wanted a tile view that worked from an HTML collection of elements
that something else could manage, like [knockout.js](http://knockoutjs.com). I
could not find any and, so, tackling the problem like a programmer, spent a
couple of days putting one together.

## Works well on

* Chrome 19 for Windows
* Chrome 19 for OS X
* Firefox 13 for Windows
* Firefox 13 for OS X
* Internet Explorer 8 for Windows
* Internet Explorer 9 for Windows
* Opera 12 for Windows
* Opera 12 for OS X

## Does not work well on

<dl>
  <dt>Internet Explorer 9 Compatibility View for Windows</dt>
  <dd>
    It seems that IE 9 CV is, as a friend of mine puts it, "a turd."
  </dd>
</dl>
