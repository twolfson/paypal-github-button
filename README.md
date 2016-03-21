# paypal-github-button

GitHub styled button for [PayPal][]

![PayPal button](http://rawgit.com/twolfson/paypal-github-button/master/dist/button.svg)

[PayPal]: https://www.paypal.com/home

## Usage
To ensure you are using a stable badge, we suggest you use a semver'd badge.

### Markdown
```md
[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/USERNAME/)
```

### HTML
```html
<a href="https://www.paypal.me/USERNAME/">
  <img alt="Support via PayPal" src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg"/>
</a>
```

### Raw URL
```
https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg
```

### Minor and patch releases
We offer variable minor and patch branches. For example, if you would like `paypal-github-button@1` but would like backwards compatible changes in the future, then you can use `1.x.x` over `1.0.0`.

```
https://rawgit.com/twolfson/paypal-github-button/1.x.x/dist/button.svg
https://rawgit.com/twolfson/paypal-github-button/1.2.x/dist/button.svg
```

## Documentation
### Architecture
For scripting a conversion from HTML to SVG, we run the following steps:

1. Extract HTML information from an HTML button using GitHub's styles
    - This is done via [Electron][] to guarantee font accuracy
2. Generate an SVG from a template using HTML information
    - This is done via [Mustache][]
3. Optimize SVG (e.g. remove whitespace)
    - This is done via [SVGO][]

[Electron]: https://github.com/atom/electron
[Mustache]: https://github.com/janl/mustache.js/
[SVGO]: https://github.com/svg/svgo

### Building
To build the latest image, run the following steps:

```bash
# Clone the repository
git clone https://github.com/twolfson/paypal-github-button
cd paypal-github-button

# Install our dependencies
npm install

# Run our build script
npm run build
```

If you would like to adjust the image, you can find the HTML reference page in `lib/index.html`. It is suggested that you use [serve][] and [LiveReload][] to host and develop against the image.

[serve]: https://npmjs.org/package/serve
[livereload]: https://github.com/lepture/python-livereload

## Donating
Support this project and [others by twolfson][twolfson-projects] via [PayPal][paypal-twolfson].

[![Support via PayPal][paypal-button]][paypal-twolfson]

[twolfson-projects]: http://twolfson.com/projects
[paypal-button]: http://rawgit.com/twolfson/paypal-github-button/master/dist/button.svg
[paypal-twolfson]: https://www.paypal.me/twolfson/5

## License
As of Mar 20 2016, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE

