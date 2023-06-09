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

    //------ Pies ------//

    event.remove({output: 'farmersdelight:pie_crust'})
    event.remove({id: 'firmalife:mixing_bowl/pie_dough'})
    event.remove({id: 'firmalife:mixing_bowl/pumpkin_pie_dough'})
    event.remove({id: 'firmalife:crafting/raw_pumpkin_pie'})
    event.remove({id: 'firmalife:crafting/raw_pumpkin_pie'})
    event.remove({id: 'firmalife:crafting/filled_pie'})
    event.remove({id: 'firmalife:oven/cooked_pie'})
    event.remove({id: 'firmalife:oven/pumpkin_pie'})

    event.shapeless(
        'farmersdelight:pie_crust',
        [
            '#tfc:foods/flour',
            'firmalife:food/butter',
            '#firmalife:sweetener'
        ]
    ).id('kubejs:pie_crust_manual_only')

    event.recipes.createCompacting(
        'farmersdelight:pie_crust',
        [
            '#tfc:foods/flour',
            'firmalife:food/butter',
            '#firmalife:sweetener'
        ]
    ).id('kubejs:compacting/pie_crust')

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

    event.recipes.firmalife.oven(
        'createaddition:cake_base_baked',
        'createaddition:cake_base',
        1000,
        200)

    // Vanilla Cake

    event.remove({id: 'tfc:crafting/cake'})
    event.remove({output: 'minecraft:cake'})
    event.recipes.createFilling(
        'tfc:cake',
        [
            'createaddition:cake_base_baked',
            Fluid.of('kubejs:icing', 500)
        ]
    ).id('kubejs:filling/cake')

    event.shapeless(
        'tfc:cake',
        [
            '7x farmersdelight:cake_slice'
        ]
    ).id('kubejs:cake_from_slices')

    // Chocolate Cake
    
    event.remove({output: 'createaddition:chocolate_cake'})
    event.recipes.createFilling(
        'createaddition:chocolate_cake',
        [
            'createaddition:cake_base_baked',
            Fluid.of('create:chocolate', 500)
        ]
    ).id('kubejs:filling/chocolate_cake_from_milk_chocolate')

    event.recipes.createFilling(
        'createaddition:chocolate_cake',
        [
            'createaddition:cake_base_baked',
            Fluid.of('kubejs:dark_chocolate', 500)
        ]
    ).id('kubejs:filling/chocolate_cake_from_dark_chocolate')

    event.recipes.createFilling(
        'createaddition:chocolate_cake',
        [
            'createaddition:cake_base_baked',
            Fluid.of('kubejs:white_chocolate', 500)
        ]
    ).id('kubejs:filling/chocolate_cake_from_white_chocolate')

    event.shapeless(
        'createaddition:chocolate_cake',
        [
            '7x create_central_kitchen:chocolate_cake_slice'
        ]
    ).id('kubejs:chocolate_cake_from_slices')

    //------ Cookies ------//

    event.remove({id: 'minecraft:cookie'})
    event.remove({id: 'create_central_kitchen:compacting/cookie'})
    event.shapeless(
        '4x minecraft:cookie',
        [
            '#firmalife:foods/chocolate',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:cookie_manual_only')
    event.recipes.createCompacting(
        '4x minecraft:cookie',
        [
            '#firmalife:foods/chocolate',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:compacting/cookie')

    event.remove({id: 'farmersdelight:sweet_berry_cookie'})
    event.remove({id: 'farmersdelight:honey_berry_cookie'})
    event.remove({id: 'create_central_kitchen:compacting/sweet_berry_cookie'})
    event.shapeless(
        '4x farmersdelight:sweet_berry_cookie',
        [
            '#kubejs:berries',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:sweet_berry_cookie_manual_only')
    event.recipes.createCompacting(
        '4x farmersdelight:sweet_berry_cookie',
        [
            '#kubejs:berries',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:compacting/sweet_berry_cookie')
    
    event.remove({id: 'farmersdelight:honey_cookie'})
    event.remove({id: 'create_central_kitchen:compacting/honey_cookie'})
    event.shapeless(
        '4x farmersdelight:honey_cookie',
        [
            'firmalife:raw_honey',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:honey_cookie_manual_only')
    event.recipes.createCompacting(
        '4x farmersdelight:honey_cookie',
        [
            Fluid.of('create:honey', 250),
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:compacting/honey_cookie')
    event.recipes.createCompacting(
        '4x farmersdelight:honey_cookie',
        [
            'firmalife:raw_honey',
            '2x #tfc:foods/flour'
        ]
    ).id('kubejs:compacting/honey_cookie_from_raw_honey')

    //------ Other Desserts ------//

    event.replaceInput({output: 'create:honeyed_apple'}, 'minecraft:apple', '#tfc:foods/apples')
    event.replaceInput({output: 'create:chocolate_glazed_berries'}, 'minecraft:sweet_berries', '#kubejs:berries')
    
    event.recipes.createFilling(
        'create:chocolate_glazed_berries',
        [
            '#kubejs:berries',
            Fluid.of('kubejs:dark_chocolate', 250)
        ]
    ).id('kubejs:filling/chocolate_glazed_berries_from_dark_chocolate')
    
    event.recipes.createFilling(
        'create:chocolate_glazed_berries',
        [
            '#kubejs:berries',
            Fluid.of('kubejs:white_chocolate', 250)
        ]
    ).id('kubejs:filling/chocolate_glazed_berries_from_white_chocolate')

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

    event.recipes.createMixing(
        Fluid.of('kubejs:icing', 1000),
        [
            Fluid.of('firmalife:cream', 1000),
            '#firmalife:sweetener',
            'firmalife:food/butter'
        ]
    ).id('kubejs:compacting/icing')

    event.remove({id: 'create:filling/sweet_roll'})
    event.recipes.createFilling(
        'create:sweet_roll',
        [
            '#tfc:foods/breads',
            Fluid.of('kubejs:icing', 250)
        ]
    ).id('kubejs:filling/sweet_roll')
})