onEvent('recipes', event => {

    const milk = {
        type: 'tfc:fluid_item',
        fluid_ingredient: {
            ingredient: {
                tag: 'tfc:milks'
            },
            amount: 100
        }
    }

    const milkTypes = {
        'minecraft': 'milk',
        'firmalife': 'goat_milk',
        'firmalife': 'yak_milk',
        'firmalife': 'coconut_milk'
    }

    //------ Pies ------//

    event.remove({output: 'farmersdelight:pie_crust'})

    event.shapeless(
        'farmersdelight:pie_crust',
        [
            '3x #tfc:foods/flour',
            milk
        ]
    ).id('kubejs:pie_crust_manual_only')

    for (const [mod, milkType] of Object.entries(milkTypes)) {
        event.recipes.createCompacting(
            'farmersdelight:pie_crust',
            [
                '3x #tfc:foods/flour',
                Fluid.of(mod + ':' + milkType, 100)
            ]
        ).id('kubejs:compacting/pie_crust_from_' + milkType)
    }

    let sequencedPieAssembly = (pieOwner, pie, input1, input2, input3) => {
        event.remove({id: 'create_central_kitchen:sequenced_assembly/' + pie})

        event.recipes.createSequencedAssembly(
            pieOwner + ':' + pie,
            'farmersdelight:pie_crust',
            [
                event.recipes.createDeploying(
                    'create_central_kitchen:incomplete_' + pie,
                    [
                        'create_central_kitchen:incomplete_' + pie,
                        input1
                    ]
                ),
                event.recipes.createDeploying(
                    'create_central_kitchen:incomplete_' + pie,
                    [
                        'create_central_kitchen:incomplete_' + pie,
                        input2
                    ]
                ),
                event.recipes.createDeploying(
                    'create_central_kitchen:incomplete_' + pie,
                    [
                        'create_central_kitchen:incomplete_' + pie,
                        input3
                    ]
                )
            ]
        ).loops(2)
        .transitionalItem('create_central_kitchen:incomplete_' + pie)
        .id('kubejs:sequenced_assembly/' + pie)
    }

    // Apple Pie

    event.remove({id: 'farmersdelight:apple_pie'})
    event.shaped(
        'farmersdelight:apple_pie',
        [
            'FFF',
            'AAA',
            'SPS'
        ],
        {
            F: '#tfc:foods/flour',
            A: '#tfc:foods/apples',
            S: '#firmalife:sweetener',
            P: 'farmersdelight:pie_crust'
        }
    ).id('kubejs:apple_pie_manual_only')
    sequencedPieAssembly('farmersdelight', 'apple_pie', '#tfc:foods/apples', '#tfc:foods/flour', '#firmalife:sweetener')
    
    // Sweet Berry Cheesecake

    event.remove({id: 'farmersdelight:sweet_berry_cheesecake'})
    event.shaped(
        'farmersdelight:sweet_berry_cheesecake',
        [
            'BBB',
            'BBB',
            'CPC'
        ],
        {
            B: '#kubejs:berries',
            C: '#firmalife:foods/cheeses',
            P: 'farmersdelight:pie_crust'
        }
    ).id('kubejs:sweet_berry_cheesecake_manual_only')
    sequencedPieAssembly('farmersdelight', 'sweet_berry_cheesecake', '#kubejs:berries', '#kubejs:berries', '#firmalife:foods/cheeses')

    // Chocolate Pie

    event.remove({id: 'farmersdelight:chocolate_pie'})
    event.shaped(
        'farmersdelight:chocolate_pie',
        [
            'CCC',
            'MMM',
            'SPS'
        ],
        {
            C: '#firmalife:foods/chocolate',
            M: milk,
            S: '#firmalife:sweetener',
            P: 'farmersdelight:pie_crust'
        }
    ).id('kubejs:chocolate_pie_manual_only')

    // Pumpkin Pie

    event.remove({id: 'tfc:crafting/pumpkin_pie'})
    event.remove({id: 'create_central_kitchen:crafting/pumpkin_pie'})
    event.shaped(
        'minecraft:pumpkin_pie',
        [
            'LLL',
            'LLL',
            'SPS'
        ],
        {
            L: 'farmersdelight:pumpkin_slice',
            S: '#firmalife:sweetener',
            P: 'farmersdelight:pie_crust'
        }
    ).id('kubejs:pumpkin_pie_manual_only')
    sequencedPieAssembly('minecraft', 'pumpkin_pie', 'farmersdelight:pumpkin_slice', 'farmersdelight:pumpkin_slice', '#firmalife:sweetener')

    //------ Cakes ------//

    event.remove({output: 'createaddition:cake_base'})

    event.shapeless(
        'createaddition:cake_base',
        [
            '#forge:eggs',
            '#firmalife:sweetener',
            '3x #tfc:foods/flour'
        ]
    ).id('kubejs:cake_base_manual_only')

    event.recipes.createCompacting(
        'createaddition:cake_base',
        [
            '#forge:eggs',
            '#firmalife:sweetener',
            '3x #tfc:foods/flour'
        ]
    ).id('kubejs:compacting/cake_base')

    event.remove({id: 'tfc:crafting/cake'})
    event.replaceOutput({id: 'farmersdelight:cake_from_slices'}, 'minecraft:cake', 'tfc:cake')
    event.remove({output: 'minecraft:cake'})
    event.recipes.createFilling(
        'tfc:cake',
        [
            'createaddition:cake_base_baked',
            Fluid.of('kubejs:icing', 500)
        ]
    ).id('kubejs:filling/cake')

    //------ Cookies ------//

    event.remove({id: 'minecraft:cookie'})
    event.shapeless(
        '8x minecraft:cookie',
        [
            '#firmalife:foods/chocolate',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:cookie_manual_only')
    event.replaceInput({id: 'create_central_kitchen:compacting/cookie'}, 'minecraft:cocoa_beans', '#firmalife:foods/chocolate')
    event.replaceInput({id: 'create_central_kitchen:compacting/cookie'}, 'create:wheat_flour', '#tfc:foods/flour')

    event.remove({id: 'farmersdelight:sweet_berry_cookie'})
    event.remove({id: 'farmersdelight:honey_berry_cookie'})
    event.shapeless(
        '8x farmersdelight:sweet_berry_cookie',
        [
            '#kubejs:berries',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:sweet_berry_cookie_manual_only')
    event.replaceInput({id: 'create_central_kitchen:compacting/sweet_berry_cookie'}, 'minecraft:sweet_berries', '#kubejs:berries')
    event.replaceInput({id: 'create_central_kitchen:compacting/sweet_berry_cookie'}, 'create:wheat_flour', '#tfc:foods/flour')
    
    event.remove({id: 'farmersdelight:honey_cookie'})
    event.shapeless(
        '8x farmersdelight:honey_cookie',
        [
            'firmalife:raw_honey',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:honey_cookie_manual_only')
    event.replaceInput({id: 'create_central_kitchen:compacting/honey_cookie'}, 'create:wheat_flour', '#tfc:foods/flour')

    //------ Other Desserts ------//

    event.replaceInput({output: 'create:honeyed_apple'}, 'minecraft:apple', '#tfc:foods/apples')
    event.replaceInput({output: 'create:chocolate_glazed_berries'}, 'minecraft:sweet_berries', '#kubejs:berries')

    event.remove({id: 'farmersdelight:cooking/glow_berry_custard'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:glow_berry_custard').toResultJson(),
        ingredients: [
            Ingredient.of('#kubejs:berries').toJson(),
            milk,
            Ingredient.of('#forge:eggs').toJson(),
            Ingredient.of('#firmalife:sweetener').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/glow_berry_custard')

    for (const [mod, milkType] of Object.entries(milkTypes)) {
        event.recipes.createMixing(
            Fluid.of('kubejs:icing', 1000),
            [
                Fluid.of(mod + ':' + milkType, 1000),
                '#firmalife:sweetener',
                'firmalife:food/butter'
            ]
        ).id('kubejs:compacting/icing_from_' + milkType)
    }

    event.remove({id: 'create:filling/sweet_roll'})
    event.recipes.createFilling(
        'create:sweet_roll',
        [
            '#tfc:foods/breads',
            Fluid.of('kubejs:icing', 250)
        ]
    ).id('kubejs:filling/sweet_roll')
})