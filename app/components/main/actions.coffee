module.exports =
  onClick: (event) ->
    @emit 'main:update', event.target.dataset.itemId
