'use strict'

/**
 * Utility that automatically adds the Rill context to a global variable on each request for debugging.
 *
 * @param {string} namespace - the global variable to add the ctx too.
 * @return {Function}
 */
module.exports = function exposeSetup (namespace) {
  namespace = namespace || 'ctx'

  return function exposeMiddleware (ctx, next) {
    global[namespace] = ctx
    return next()
  }
}
