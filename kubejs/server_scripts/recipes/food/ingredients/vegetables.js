onEvent('recipes', event => {
    event.remove({id: 'farmersdelight:cooking/tomato_sauce'})
    event.remove({id: 'create_central_kitchen:crafting/tomato_sauce_from_bucket'})
    event.remove({id: 'create_central_kitchen:mixing/tomato_sauce'})

    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('4x farmersdelight:tomato_sauce').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:powder/salt').toJson(),
            Ingredient.of('#kubejs:spices').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/tomato_sauce')

    event.recipes.createMixing(
        Fluid.of('create_central_kitchen:tomato_sauce', 1000),
        [
            '4x tfc:food/tomato',
            'tfc:powder/salt',
            '#kubejs:spices'
        ]
    ).id('kubejs:mixing/tomato_sauce')

    event.remove({id: 'firmalife:crafting/salsa'})
})