var assert = chai.assert
var expect = chai.expect
var should = chai.should()

describe('Testing mocha', function() {
  it('Should add a test object', function() {
    var test = {
      foo: 'bar'
    }
    expect(test).to.include({ foo: 'bar' })
  })
})