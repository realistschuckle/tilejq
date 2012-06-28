---
layout: page
title: tilejq by realistschuckle
---

## Pronunciation

Just say "tiledge". The "q" is silent.

## Examples

* [Simple knockout.js integration](/tilejq/examples/simple-knockout-integration.html)

## API

### Options

### Methods

### Events

## Usage

{% highlight html %}
<div id="tileview">
</div>
{% endhighlight %}

{% highlight javascript %}
$('#tileview').tilejq();
{% endhighlight %}

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
