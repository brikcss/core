# Brikcss Core

[![Greenkeeper badge](https://badges.greenkeeper.io/brikcss/core.svg)](https://greenkeeper.io/)

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/core">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/core.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/core">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/core.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/core/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/core">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/cee648c5d2ea4e669c44bcc9f2814ea1/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<!-- <a href='https://coveralls.io/github/brikcss/core?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/core/master.svg?style=flat-square' alt='Coverage Status' />
	</a> -->
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

Core brik components for [Brikcss](https://github.com/brickss). It includes browser reset, colors, rhythm / spacing, and typography.

---

## Environment and browser support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| ✓      | x     | ✓     | ✓         | ✓         |

| Chrome | Firefox | Safari | Edge | IE  | iOS | Android |
|:------:|:-------:|:------:|:----:|:---:|:---:|:-------:|
| ✓      | ✓       | ✓      | ✓    | 11  | ✓   | ✓       |

\* _Note: Since [CSS Variables](https://caniuse.com/#search=css%20variables) are used, IE11 is supported with the use of a custom variables polyfill, such as [postcss-var-shim](https://github.com/luwes/postcss-var-shim)._

## Install

1. Install from NPM:

	```sh
	npm i -D @brikcss/core
	```

2. Include files in your app:

	- _PostCSS with [postcss-import](https://github.com/postcss/postcss-import):_ `@import '@brikcss/core';`.
	- _Precompiled:_ Include `./dist/core.min.css` for version precompiled to vanilla CSS.

_Note: Brikcss Core is a collection of Brikcss front end components. Refer to each component's repo for usage documentation._
