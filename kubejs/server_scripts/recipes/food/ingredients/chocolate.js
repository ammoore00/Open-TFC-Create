onEvent('recipes', event => {
    event.smoking(
        'firmalife:food/roasted_cocoa_beans',
        'firmalife:food/cocoa_beans'
    )

    event.remove({id: 'firmalife:crafting/cocoa_butter_powder'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('firmalife:food/roasted_cocoa_beans').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('firmalife:food/cocoa_butter').toResultJson(),
            Item.of('firmalife:food/cocoa_powder').toResultJson()
        ]
    }).id('kubejs:cutting/roasted_cocoa_beans')

    const milkTypes = {
        'minecraft': 'milk',
        'firmalife': 'goat_milk',
        'firmalife': 'yak_milk',
        'firmalife': 'coconut_milk'
    }

    event.remove({id: 'firmalife:mixing_bowl/white_chocolate_blend'})
    event.remove({id: 'firmalife:mixing_bowl/milk_chocolate_blend'})
    event.remove({id: 'firmalife:mixing_bowl/dark_chocolate_blend'})

    event.remove({id: 'firmalife:drying/white_chocolate'})
    event.remove({id: 'firmalife:drying/milk_chocolate'})
    event.remove({id: 'firmalife:drying/dark_chocolate'})

    event.remove({id: 'create:mixing/chocolate_melting'})
    event.remove({id: 'create:mixing/chocolate'})

    for (const [mod, milkType] of Object.entries(milkTypes)) {
        event.recipes.createMixing(
            Fluid.of('kubejs:white_chocolate', 500),
            [
                '#firmalife:sweetener',
                '2x firmalife:food/cocoa_butter',
                Fluid.of(mod + ':' + milkType, 500)
            ]
        ).id('kubejs:mixing/white_chocolate_from_' + milkType)
        
        event.recipes.createMixing(
            Fluid.of('create:chocolate', 500),
            [
                '#firmalife:sweetener',
                'firmalife:food/cocoa_butter',
                'firmalife:food/cocoa_powder',
                Fluid.of(mod + ':' + milkType, 500)
            ]
        ).id('kubejs:mixing/milk_chocolate_from_' + milkType)
        
        event.recipes.createMixing(
            Fluid.of('kubejs:dark_chocolate', 500),
            [
                '#firmalife:sweetener',
                '2x firmalife:food/cocoa_powder',
                Fluid.of(mod + ':' + milkType, 500)
            ]
        ).id('kubejs:mixing/dark_chocolate_from_' + milkType)
    }

    event.recipes.createCompacting(
        'firmalife:food/white_chocolate',
        Fluid.of('kubejs:white_chocolate', 250)
    ).id('kubejs:compacting/white_chocolate')
    
    event.recipes.createCompacting(
        'firmalife:food/milk_chocolate',
        Fluid.of('create:chocolate', 250)
    ).id('kubejs:compacting/milk_chocolate')
    
    event.recipes.createCompacting(
        'firmalife:food/dark_chocolate',
        Fluid.of('kubejs:dark_chocolate', 250)
    ).id('kubejs:compacting/dark_chocolate')

    event.remove({id: 'firmalife:pot/chocolate'})
})