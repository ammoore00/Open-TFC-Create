onEvent('recipes', event => {
    event.remove({id: 'firmalife:mixing_bowl/butter'})
    event.recipes.createMixing(
        'firmalife:food/butter',
        [
            Fluid.of('firmalife:cream', 250),
            'tfc:powder/salt'
        ]
    ).id('kubejs:mixing/butter')

    event.remove({id: 'firmalife:crafting/shredded_cheese'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('#firmalife:foods/cheeses').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('firmalife:food/shredded_cheese').toResultJson()
        ]
    }).id('kubejs:cutting/shredded_cheese')
})