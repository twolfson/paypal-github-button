# paypal-github-button

GitHub styled button for [PayPal][]

![PayPal button](http://rawgit.com/twolfson/paypal-github-button/master/dist/button.svg)

## Usage
To ensure you are using a stable badge, we suggest you use a semver'd badge.

### Markdown
```md
[![Support via Gratipay](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://gratipay.com/USERNAME/)
```

### HTML
```html
<a href="https://gratipay.com/USERNAME/">
  <img alt="Support via Gratipay" src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg"/>
</a>
```

### Raw URL
**PNG:**

```
https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/gratipay.png
```

**SVG:**

```
https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg
```

### Minor and patch releases
We offer variable minor and patch branches. For example, if you would like `gratipay-badge@1` but would like backwards compatible changes in the future, then you can use `1.x.x` over `1.0.0`.

```
https://cdn.rawgit.com/twolfson/paypal-github-button/1.x.x/dist/button.svg
https://cdn.rawgit.com/twolfson/paypal-github-button/1.2.x/dist/button.svg
```

## Documentation
The latest images are located under `dist/gratipay.png` and `dist/button.svg`. If you would like to build your own, run `./build.sh`.

You must have [PhantomJS][] and [pngcrush][] installed for the build script to work. We require [pngcrush][] since the output from [PhantomJS][] is approximately 12x larger.

If you would like to adjust the image, you can find the HTML reference page in `lib/index.html`. It is suggested that you use [serve][] and [livereload][] to host and develop against the image.

[PhantomJS]: http://phantomjs.org/
[pngcrush]: http://pmt.sourceforge.net/pngcrush/
[serve]: https://npmjs.org/package/serve
[livereload]: https://github.com/lepture/python-livereload

## Donating
Support this project and [others by twolfson][gratipay-twolfson] via [gratipay][gratipay-twolfson].

[![Support via Gratipay][gratipay]][gratipay-twolfson]

[gratipay]: https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/gratipay.png
[gratipay-twolfson]: https://gratipay.com/twolfson/

## License
As of Mar 20 2016, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE

