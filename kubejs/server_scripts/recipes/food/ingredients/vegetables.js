onEvent('recipes', event => {
    event.remove({id: 'farmersdelight:cooking/tomato_sauce'})
    event.remove({id: 'create_central_kitchen:crafting/tomato_sauce_from_bucket'})
    event.remove({id: 'create_central_kitchen:mixing/tomato_sauce'})

    event.remove({id: 'farmersdelight:cutting/wild_cabbages'})
    event.remove({id: 'farmersdelight:cutting/wild_tomatoes'})
    event.remove({id: 'farmersdelight:cutting/wild_onions'})
    event.remove({id: 'farmersdelight:cutting/wild_carrots'})
    event.remove({id: 'farmersdelight:cutting/wild_potatoes'})
    event.remove({id: 'farmersdelight:cutting/wild_beetroots'})
    event.remove({id: 'farmersdelight:cutting/brown_mushroom_colony'})
    event.remove({id: 'farmersdelight:cutting/red_mushroom_colony'})

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

    event.remove({id: 'firmalife:pot/soy_mixture'})
    event.remove({id: 'firmalife:vat/soy_mixture'})

    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('2x firmalife:food/soy_mixture').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/soybean').toJson(),
            Ingredient.of('tfc:food/soybean').toJson(),
            Ingredient.of('tfc:powder/salt').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/soy_mixture')

    event.recipes.createMixing(
        'firmalife:food/soy_mixture',
        [
            Fluid.of('tfc:salt_water', 100),
            'tfc:food/soybean'
        ]
    ).id('kubejs:mixing/soy_mixture')

    event.recipes.createCompacting(
        'firmalife:food/tofu',
        'firmalife:food/soy_mixture'
    ).id('kubejs:compacting/tofu')

    event.remove({id: 'minecraft:baked_potato_from_campfire_cooking'})
    event.recipes.tfc.heating(
        ItemStackProvider.of('minecraft:baked_potato').copyFood(),
        'tfc:food/potato',
        200
    ).id('kubejs:heating/potato')

    event.smoking(
        'tfc:food/dried_seaweed',
        'tfc:groundcover/seaweed'
    ).id('kubejs:smoking/seaweed')
    event.smoking(
        'tfc:food/dried_kelp',
        'tfc:plant/giant_kelp_flower'
    ).id('kubejs:smoking/seaweed')

    event.remove({id: 'firmalife:crafting/basil_leaves'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('firmalife:plant/basil').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('firmalife:spice/basil_leaves').toResultJson()
        ]
    }).id('kubejs:cutting/basil')
})