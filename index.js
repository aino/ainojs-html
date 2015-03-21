var Arr = Array.prototype

module.exports = function(html) {
  if ( !(this instanceof module.exports) )
    return new module.exports(html)
  this.wrapper = document.createElement('div')
  this.wrapper.innerHTML = html
}

module.exports.prototype.query = function(selector) {
  return this.wrapper.querySelectorAll(selector)
}

module.exports.prototype.each = function(selector, callback) {
  Arr.forEach.call(this.query(selector), callback)
  return this
}

module.exports.prototype.first = function(selector) {
  var result = this.query(selector)
  return result.length ? result[0] : null
}

module.exports.prototype.toHTML = function() {
  return this.wrapper.innerHTML
}

module.exports.prototype.removeAttr = function() {
  Arr.forEach.call(arguments, function(attr) {
    this.each('['+attr+']', function(element) {
      element.removeAttribute(attr)
    })
  }, this)
  return this
}
