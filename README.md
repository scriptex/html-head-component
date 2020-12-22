[![GitHub release](https://img.shields.io/github/release/scriptex/html-head-component.svg)](https://github.com/scriptex/html-head-component/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/html-head-component.svg)](https://github.com/scriptex/html-head-component/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/html-head-component.svg)](https://github.com/scriptex/html-head-component/commits/master)
[![Build Status](https://travis-ci.com/scriptex/html-head-component.svg?branch=master)](https://travis-ci.com/scriptex/html-head-component)
[![npm](https://img.shields.io/npm/dt/html-head-component.svg)](https://www.npmjs.com/package/html-head-component)
[![npm](https://img.shields.io/npm/v/html-head-component.svg)](https://www.npmjs.com/package/html-head-component)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/html-head-component/README.md)](https://github.com/scriptex/html-head-component/)

# Head Component

> A native web component for everything which might go in the `<head>` of your document.

## Install

```sh
npm i html-head-component

# or

yarn add html-head-component
```

## Usage

In your JavaScript/TypeScript entry point:

```javascript
import 'html-head-component';
```

You can also include the web component directly from **unpkg.com**:

```javascript
import('https://unpkg.com/html-head-component');
```

or

```html
<script async src="https://unpkg.com/html-head-component"></script>
```

Then add the component in your HTML/JSX markup:

**The custom component should be placed in the `<body>` tag. If you try to place it in the `<head>` the browser will explicitly move it in the `<body>` and you might experience [issues](https://github.com/scriptex/html-head-component/issues/12) with the rest of the elements in the `<head>`.**

### Using the `data` attribute

```html
<html-head-component
	data='
[
	{
		"tag": "title",
		"content": "Title"
	},
	{
		"tag": "meta",
		"name": "author",
		"content": "Scriptex"
	},
	{
		"tag": "link",
		"rel": "stylesheet",
		"href": "./style.css"
	}
]
'
></html-head-component>
```

### Using the `src` attribute

```html
<html-head-component src="./data.json"></html-head-component>
```

## Usage details

The web component accepts two attributes:

-   `src` which is a valid path to a JSON file containing array of objects.
-   `data` which is a valid JSON string which represents an array of objects.

Only one of those attributes should be used. If both are used, the `src` attribute overwrites the `data` attribute.

Each object in the JSON array should have a `tag` property which specifies the HTML element which will be rendered.

The rest of the properties in the object specify the attributes and their content in `key:value` pairs (`attribute`:`attribute-content`).

There are several exceptions:

1. The document title's content is rendered as `innerHTML` of the `<title>` tag.
2. Each `style` tag's content property will be rendered as `innerHTML` of the `<style>` tag.
3. Each `script` tag's content property will be rendered as `innerHTML` of the `<script>` tag.
4. Each `noscript` tag's content property will be rendered as `innerHTML` of the `<noscript>` tag.

## React with TypeScript

If you're using React with TypeScript, you need to extends the JSX `IntrinsicElements` interface so TypeScript knows that the `html-head-component` element exists.

You can do so in a `custom.d.ts` file in your project's root folder. Don't forget to add that file in your `tsconfig.json`!

```typescript
declare namespace JSX {
	interface IntrinsicElements {
		html-head-component: any;
	}
}
```

## Full example

You can check out the [demo usage using `data` attribute](https://github.com/scriptex/html-head-component/blob/master/demo/index-data.html).

Or

You can check out the [demo usage using `src` attribute](https://github.com/scriptex/html-head-component/blob/master/demo/index-src.html).

Full list of what can go in the `<head>` of your document, please check this [awesome repository](https://github.com/joshbuchea/HEAD)

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fhtml-head-component&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
