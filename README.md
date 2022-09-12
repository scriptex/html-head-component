[![Travis CI](https://travis-ci.com/scriptex/html-head-component.svg?branch=master)](https://travis-ci.com/scriptex/html-head-component)
[![Github Build](https://github.com/scriptex/html-head-component/workflows/Build/badge.svg)](https://github.com/scriptex/html-head-component/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/html-head-component/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/html-head-component&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-html-head-component-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/html-head-component/badge)](https://www.codefactor.io/repository/github/scriptex/html-head-component)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/html-head-component/README.md?pixel)](https://github.com/scriptex/html-head-component/)

# Head Component

> A native web component for everything which might go in the `<head>` of your document.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/html-head-component?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/html-head-component?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/html-head-component?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/html-head-component)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/html-head-component?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/html-head-component?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/html-head-component?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/html-head-component?style=plastic)

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

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
