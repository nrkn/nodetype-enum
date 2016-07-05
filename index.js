'use strict'

const nodeTypes = () => ({
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
})

const instance = Object.assign(
  nodeTypes, nodeTypes()
)

module.exports = instance
