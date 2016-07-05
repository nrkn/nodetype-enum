'use strict'

const assert = require( 'assert' )
const nodeType = require( '../index' )

console.log( nodeType.element ) // 1
console.log( nodeType[ 1 ] ) // 'element'
assert.equal( nodeType.element, 1 )
assert.equal( nodeType[ 1 ], 'element' )

//get a fresh instance
const fresh = nodeType()

console.log( fresh.element ) // 1

delete fresh.element

console.log( fresh.element ) // undefined

console.log( nodeType.element ) // 1
assert.equal( nodeType.element, 1 )
