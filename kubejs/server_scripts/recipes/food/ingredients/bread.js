onEvent('recipes', event => {
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
    }

    //------ Tortillas ------//

    event.recipes.createMilling(
        'firmalife:food/masa_flour',
        'firmalife:food/nixtamal'
    ).id('kubejs:milling/nixtamal')

    event.recipes.createMixing(
        '2x firmalife:food/masa',
        [
            'firmalife:food/masa_flour',
            Fluid.of('minecraft:water', 100)
        ]
    ).id('kubejs:mixing/masa')

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
})