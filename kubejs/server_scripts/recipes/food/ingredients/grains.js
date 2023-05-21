onEvent('recipes', event => {

    //------ Processing ------//

    let grainCutting = (type) => {
        event.remove({id: 'tfc:crafting/' + type + '_cutting'})

        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of('tfc:food/' + type).toJson()
            ],
            tool: Ingredient.of('#tfc:knives').toJson(),
            result: [
                Item.of('tfc:food/' + type + '_grain').toResultJson(),
                Item.of('tfc:straw').toResultJson()
            ]
        }).id('kubejs:cutting/' + type)
    }
    
    let flourGrinding = (type) => {
        event.recipes.createMilling(
            'tfc:food/' + type + '_flour',
            'tfc:food/' + type + '_grain'
        ).id('kubejs:milling/' + type + '_grain')
    }

    let dough = (type) => {
        event.recipes.createMixing(
            '2x tfc:food/' + type + '_dough',
            [
                'tfc:food/' + type + '_flour',
                Fluid.of('minecraft:water', 100)
            ]
        ).id('kubejs:mixing/' + type + '_flatbread_dough')
        
        event.recipes.createMixing(
            '4x firmalife:food/' + type + '_dough',
            [
                'tfc:food/' + type + '_flour',
                '#firmalife:sweetener',
                Fluid.of('firmalife:yeast_starter', 100)
            ]
        ).id('kubejs:mixing/' + type + '_bread_dough')
    }

    let grainProcessing = (type) => {
        grainCutting(type)
        flourGrinding(type)
        dough(type)
    }

    //------ Bread ------//
    
    let grains = [
        'barley',
        'maize',
        'oat',
        'rice',
        'rye',
        'wheat'
    ]

    for (const grain of grains) {
        grainProcessing(grain)

        event.remove({id: 'firmalife:crafting/' + grain + '_slice'})

        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of('tfc:food/' + grain + '_bread').toJson()
            ],
            tool: Ingredient.of('#tfc:knives').toJson(),
            result: [
                Item.of('firmalife:food/' + grain + '_slice').toResultJson()
            ]
        }).id('kubejs:cutting/' + grain + '_bread')

        event.smoking(
            'tfc:food/' + grain + '_bread',
            'firmalife:food/' + grain + '_dough'
        ).id('kubejs:smoking/' + grain + '_bread')

        event.smoking(
            'firmalife:food/' + grain + '_flatbread',
            'tfc:food/' + grain + '_dough'
        ).id('kubejs:smoking/' + grain + '_flatbread')
    }

    //------ Tortillas ------//

    event.remove({id: 'firmalife:pot/cured_maize'})
    event.remove({id: 'firmalife:vat/cured_maize'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('firmalife:food/cured_maize').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/maize_grain').toJson(),
            {
                type: 'tfc:fluid_item',
                fluid_ingredient: {
                    ingredient: {
                        fluid: 'tfc:limewater'
                    },
                    amount: 100
                }
            }
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/cured_maize')

    event.recipes.createMixing(
        'firmalife:food/cured_maize',
        [
            'tfc:food/maize_grain',
            Fluid.of('tfc:limewater', 100)
        ]
    ).id('kubejs:mixing/cured_maize')

    event.recipes.createMixing(
        'firmalife:food/nixtamal',
        [
            'firmalife:food/cured_maize',
            Fluid.of('minecraft:water', 100)
        ]
    ).id('kubejs:mixing/nixtamal')

    event.recipes.createMilling(
        '4x firmalife:food/masa_flour',
        'firmalife:food/nixtamal'
    ).id('kubejs:milling/nixtamal')

    event.recipes.createMixing(
        '2x firmalife:food/masa',
        [
            'firmalife:food/masa_flour',
            Fluid.of('minecraft:water', 100)
        ]
    ).id('kubejs:mixing/masa')

    event.campfireCooking(
        'firmalife:food/corn_tortilla',
        'firmalife:food/masa'
    ).id('kubejs:campfire/masa')

    event.smoking(
        'firmalife:food/taco_shell',
        'firmalife:food/corn_tortilla'
    ).id('kubejs:smoking/corn_tortilla')

    //------ Other ------//

    event.smoking(
        'firmalife:food/toast',
        '#firmalife:foods/slices'
    ).id('kubejs:smoking/toast')

    event.recipes.createDeploying(
        'firmalife:food/toast_with_butter',
        [
            'firmalife:food/toast',
            'firmalife:food/butter'
        ]
    ).id('kubejs:deploying/toast_with_butter')

    event.remove({output: 'tfc:food/cooked_rice'})
    event.remove({id: 'firmalife:vat/cooked_rice'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('tfc:food/cooked_rice').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/rice_grain').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/cooked_rice')
})