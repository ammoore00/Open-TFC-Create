onEvent('recipes', event => {
    event.remove({id: 'firmalife:pumpkin_knapping/chunks'})
    event.remove({id: 'firmalife:crafting/pumpkin_chunks_bulk'})

    event.remove({id: 'tfc:crafting/melon_slice'})
    event.remove({id: 'farmersdelight:cutting/melon'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('tfc:melon').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('4x minecraft:melon_slice').toResultJson()
        ]
    }).id('kubejs:cutting/melon')
})