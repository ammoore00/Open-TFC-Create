onEvent('recipes', event => {
    event.remove({id: 'minecraft:leather'})
    event.remove({output: 'minecraft:leather', type: 'farmersdelight:cutting'})
    event.remove({output: 'minecraft:leather', type: 'create:milling'})
    event.remove({output: 'minecraft:leather', type: 'create:crushing'})

    let leatherCounts = {
        small: 1,
        medium: 2,
        large: 3
    }

    for (const [size, leatherCount] of Object.entries(leatherCounts)) {
        event.remove({id: 'tfc:crafting/crafting/' + size + '_sheepskin'})
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of('tfc:' + size + '_sheepskin_hide').toJson()
            ],
            tool: Ingredient.of('#tfc:knives').toJson(),
            result: [
                Item.of('tfc:' + size + '_raw_hide').toResultJson(),
                Item.of('tfc:wool', leatherCount).toResultJson()
            ]
        }).id('kubejs:cutting/' + size + '_sheepskin_hide')
        
        event.remove({id: 'tfc:scraping/' + size + '_soaked_hide'})
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of('tfc:' + size + '_soaked_hide').toJson()
            ],
            tool: Ingredient.of('#tfc:knives').toJson(),
            result: [
                Item.of('tfc:' + size + '_scraped_hide').toResultJson(),
                Item.of('tfc:wool', leatherCount).toResultJson()
            ]
        }).id('kubejs:cutting/' + size + '_soaked_hide')
    }

    event.remove({id: 'sewingkit:leather_sheet_from_rabbit_hide'})
    event.remove({id: 'sewingkit:leather_sheet_from_leather'})
    event.remove({id: 'sewingkit:leather_strip_from_leather'})
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('minecraft:leather').toJson()
        ],
        tool: Ingredient.of('#forge:shears').toJson(),
        result: [
            Item.of('2x sewingkit:leather_sheet').toResultJson()
        ]
    }).id('kubejs:cutting/leather')
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('sewingkit:leather_sheet').toJson()
        ],
        tool: Ingredient.of('#forge:shears').toJson(),
        result: [
            Item.of('2x sewingkit:leather_strip').toResultJson()
        ]
    }).id('kubejs:cutting/leather_sheet')

    event.recipes.createCutting(
        [
            '3x sewingkit:leather_sheet'
        ],
        'minecraft:leather'
    ).id('kubejs:create_cutting/leather')

    event.recipes.createCutting(
        [
            '3x sewingkit:leather_strip'
        ],
        'sewingkit:leather_sheet'
    ).id('kubejs:create_cutting/leather_sheet')

    //------ Pineapple Leather ------//

    event.remove({id: 'firmalife:crafting/pineapple_fiber'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                type: 'tfc:has_trait',
                trait: 'firmalife:dried',
                ingredient: {
                    item: 'firmalife:food/pineapple'
                }
            }
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('firmalife:pineapple_fiber').toResultJson()
        ]
    }).id('kubejs:cutting/dried_pineapple')
})