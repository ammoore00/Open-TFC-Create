onEvent('recipes', event => {
event.remove({id: 'minecraft:smoker'})
event.remove({id: 'minecraft:soul_campfire'})

    event.remove({output: 'farmersdelight:tree_bark'})

    let treeTypes = [
        'acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow'
    ]

    for (const tree of treeTypes) {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of('tfc:wood/log/' + tree).toJson()
            ],
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'axe_strip'
            },
            result: [
                Item.of('tfc:wood/stripped_log/' + tree).toResultJson(),
                Item.of('farmersdelight:tree_bark').toResultJson()
            ],
            sound: 'minecraft:item.axe.strip'
        }).id('kubejs:cutting/' + tree + '_log')

        event.recipes.createCutting(
            [
                'tfc:wood/stripped_log/' + tree,
                'farmersdelight:tree_bark',
                'kubejs:sawdust'
            ],
            'tfc:wood/log/' + tree
        ).id('kubejs:create_cutting/' + tree + '_log')

        event.recipes.createCutting(
            [
                '16x tfc:wood/lumber/' + tree,
                'kubejs:sawdust'
            ],
            'tfc:wood/stripped_log/' + tree
        ).id('kubejs:create_cutting/' + tree + '_stripped_log')

        event.recipes.createCutting(
            [
                '4x tfc:wood/lumber/' + tree,
                'kubejs:sawdust'
            ],
            'tfc:wood/planks/' + tree
        ).id('kubejs:create_cutting/' + tree + '_planks')

        event.recipes.createCutting(
            [
                '2x minecraft:stick',
                'kubejs:sawdust'
            ],
            'tfc:wood/planks/' + tree
        ).id('kubejs:create_cutting/' + tree + '_planks')
    }

    event.recipes.tfc.quern(
        'kubejs:sawdust',
        '#kubejs:grinds_into_sawdust'
    ).id('kubejs:grinding/sawdust')

    event.recipes.createMilling(
        'kubejs:sawdust',
        '#kubejs:grinds_into_sawdust'
    ).id('kubejs:milling/sawdust')

    event.recipes.createMixing(
        'createaddition:biomass',
        [
            Fluid.of('createaddition:seed_oil', 100),
            '16x kubejs:sawdust'
        ]
    ).id('kubejs:mixing/biomass_from_sawdust')
})