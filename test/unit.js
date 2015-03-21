var HTML = require('../index')
var chai = require('chai')

var assert = chai.assert
var expect = chai.expect
var should = chai.should()

describe('constructor', function() {
  it('Should create a new instance without the new keyword', function() {
    var html = HTML('<s></s>')
    expect(html).to.be.an.instanceof(HTML)
  })
})

describe('query', function() {
  it('Should select elements from selector', function() {
    var html = HTML('<s><b id="foo"></b></s>')
    expect(html.query('#foo')[0].id).to.equal('foo')
  })
})

describe('toHTML', function() {
  it('Should generate new HTML', function() {
    var html = '<s><b id="foo"></b></s>'
    expect(HTML(html).toHTML()).to.equal(html)
  })
})

describe('each', function() {
  it('Should loop and manipulate selected elements', function() {
    expect(
      HTML('<s><b id="foo"></b><b id="bar"></b></s>').each('b', function(element, i) {
        element.id="yolo"+i
      }).toHTML()
    ).to.equal('<s><b id="yolo0"></b><b id="yolo1"></b></s>')
  })
})

describe('first', function() {
  it('Should select and manipulate the first element', function() {
    var html = HTML('<s><b id="foo"></b><b id="bar"></b></s>')
    html.first('b').id = 'first'
    expect(html.toHTML()).to.equal('<s><b id="first"></b><b id="bar"></b></s>')
  })
})

describe('removeAttr', function() {
  it('Should remove a single attribute', function() {
    var html = '<div data-id="1"></div>'
    expect(
      HTML(html).removeAttr('data-id').toHTML()
    ).to.equal('<div></div>')
  })
  it('Should remove multiple attributes', function() {
    var html = '<div id=foo><a href="/"></a><a href=http://google.com target="_blank"></a></div>'
    expect(
      HTML(html).removeAttr('href').toHTML()
    ).to.equal('<div id="foo"><a></a><a target="_blank"></a></div>')
  })
})