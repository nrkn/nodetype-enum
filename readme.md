# nodetype-enum

## An enum of HTML DOM node types

```javascript
{
  1: 'element',
  3: 'text',
  7: 'processingInstruction',
  8: 'comment',
  9: 'document',
  10: 'documentType',
  11: 'fragment',
  element: 1,
  text: 3,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  fragment: 11
}
```

### Install

`npm install nodetype-enum`

### Usage

```javascript
const nodeType = require( 'nodetype-enum' )

console.log( nodeType.element ) // 1
console.log( nodeType[ 1 ] ) // 'element'

//get a fresh instance
const fresh = nodeType()

console.log( fresh.element ) // 1

delete fresh.element

console.log( fresh.element ) // undefined

console.log( nodeType.element ) // 1
```
