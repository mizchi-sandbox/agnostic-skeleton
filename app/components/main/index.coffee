eeMixin = require 'ee-mixin'
actions = require './actions'
React = require 'react'

module.exports = React.createClass
  mixins: [actions]
  render: ->
    React.createElement 'div', {key: 'foo'}, [
      React.createElement 'h1', {key: 'h1'}, 'App'
      React.createElement('button', {key: '1', onClick: @onClick}, 'click me')
    ]
