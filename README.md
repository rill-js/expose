<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/expose
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/expose">
    <img src="https://img.shields.io/npm/v/@rill/expose.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/expose">
    <img src="https://img.shields.io/npm/dm/@rill/expose.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

Rill middleware to attach each request on the window for easier debugging.

# Installation

```console
npm install @rill/expose
```

# Example

```js
const app = require('rill')()
const expose = require('@rill/expose')

// Setup the middleware.
app.use(expose())

// Optionally change the namespace for the global variable used.
app.use(expose('mycontext'))
```

## Later in the console

```js
window.ctx.req.href // -> https://...
window.ctx.req.query // -> {...}
window.ctx.locals // -> {...}
```

---

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
