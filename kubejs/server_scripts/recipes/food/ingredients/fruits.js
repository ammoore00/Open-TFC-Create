onEvent('recipes', event => {
    event.remove({id: 'firmalife:pumpkin_knapping/chunks'})
    event.remove({id: 'firmalife:crafting/pumpkin_chunks_bulk'})
})