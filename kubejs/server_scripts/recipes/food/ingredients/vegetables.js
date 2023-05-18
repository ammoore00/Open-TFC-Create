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
            Ingredient.of('tfc:food/garlic').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/tomato_sauce')

    event.recipes.createMixing(
        Fluid.of('create_central_kitchen:tomato_sauce', 1000),
        [
            '4x tfc:food/tomato',
            'tfc:powder/salt',
            'tfc:food/garlic'
        ]
    ).id('kubejs:mixing/tomato_sauce')

    event.remove({id: 'firmalife:crafting/salsa'})

    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('4x firmalife:food/salsa').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:powder/salt').toJson(),
            Ingredient.of('firmalife:plant/cilantro').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/salsa')

    event.recipes.createMixing(
        '4x firmalife:food/salsa',
        [
            '4x tfc:food/tomato',
            'tfc:powder/salt',
            'firmalife:plant/cilantro'
        ]
    ).id('kubejs:mixing/tomato_sauce')
})