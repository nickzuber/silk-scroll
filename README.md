# [silk-scroll.js](https://github.com/nickzuber/silk-scroll) 
[![Build Status](https://travis-ci.org/nickzuber/silk-scroll.svg?branch=master)](https://travis-ci.org/nickzuber/silk-scroll) [![npm version](https://badge.fury.io/js/silk-scroll.svg)](https://badge.fury.io/js/silk-scroll)

Cross browser responsive smooth scrolling for entire web applications.

## Demo
[View example site](http://rabin-karpal-tunnel.tumblr.com/)

While there currently is no formal demo site, if you want to see silk-scroll in action feel free to [check out my Tumblr page where I'm currently using silk-scroll](http://rabin-karpal-tunnel.tumblr.com/).

## Installation 

Installing silk-scroll on the client side is simple. Just download the [minified file of the latest version](https://github.com/nickzuber/silk-scroll/blob/master/bin/silk-scroll.min.js) and include it in your webpage:
```html
<!-- Include the silk-scroll file -->
<script src="path/to/silk-scroll.min.js"></script>
```

If you'd like to install [silk-scroll on the server side using npm](https://www.npmjs.com/package/silk-scroll), it's as easy as:
```
npm install silk-scroll --save
```

## Usage

To get the smooth scrolling ability on your webpage, all you need to do is include the [minified file of the latest version](https://github.com/nickzuber/silk-scroll/blob/master/bin/silk-scroll.min.js) in your application and then activate `SilkScroll`:

```javascript
// SilkScroll will already be a global object
SilkScroll.active();
```

If you have silk-scroll installed on your Node application, you can use it on the server in Node like so:

```javascript
const SilkScroll = require('silk-scroll');

SilkScroll.active();
```

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2016 Nick Zuber
