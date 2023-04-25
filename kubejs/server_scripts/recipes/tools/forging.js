onEvent('recipes', event => {
    let toolForging = (metal, type, input, useForgingBonus) => {
        const forgingBonus = useForgingBonus ? 2 : 0

        event.recipes.createSequencedAssembly(
            [
                Item.of('tfc:metal/' + type + '/' + metal, '{"tfc:forging_bonus":' + forgingBonus + '}')
            ],
            'tfc:metal/' + input + '/' + metal,
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        'kubejs:' + type + '_smithing_plan'
                    ]
                ).keepHeldItem(),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_' + type,
                    'kubejs:incomplete_' + metal + '_' + type
                ),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_' + type,
                    'kubejs:incomplete_' + metal + '_' + type
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        Fluid.of('minecraft:water', 100)
                    ]
                )
            ]
        ).transitionalItem('kubejs:incomplete_' + metal + '_' + type)
        .loops(1)
        .id('kubejs:forging/' + type + '/' + metal)
    }

    let armorForging = (metal, type, input, addition) => {
        event.recipes.createSequencedAssembly(
            [
                Item.of('tfc:metal/' + type + '/' + metal, '{"tfc:forging_bonus":2}')
            ],
            'tfc:metal/' + input + '/' + metal,
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        'kubejs:' + type + '_smithing_plan'
                    ]
                ).keepHeldItem(),
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        'tfc:metal/' + addition + '/' + metal,
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        'tfc:powder/flux',
                    ]
                ),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_' + type,
                    'kubejs:incomplete_' + metal + '_' + type
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_' + metal + '_' + type,
                    [
                        'kubejs:incomplete_' + metal + '_' + type,
                        Fluid.of('minecraft:water', 100)
                    ]
                )
            ]
        ).transitionalItem('kubejs:incomplete_' + metal + '_' + type)
        .loops(1)
        .id('kubejs:forging/' + type + '/' + metal)
    }

    let standardForging = (metal) => {
        toolForging(metal, 'pickaxe_head', 'ingot', true)
        toolForging(metal, 'propick_head', 'ingot', true)
        toolForging(metal, 'axe_head', 'ingot', true)
        toolForging(metal, 'shovel_head', 'ingot', true)
        toolForging(metal, 'hoe_head', 'ingot', true)
        toolForging(metal, 'chisel_head', 'ingot', true)
        toolForging(metal, 'hammer_head', 'ingot', true)
        toolForging(metal, 'saw_blade', 'ingot', true)
        toolForging(metal, 'javelin_head', 'ingot', true)
        toolForging(metal, 'sword_blade', 'double_ingot', true)
        toolForging(metal, 'mace_head', 'double_ingot', true)
        toolForging(metal, 'knife_blade', 'ingot', true)
        toolForging(metal, 'scythe_blade', 'ingot', true)
        toolForging(metal, 'fish_hook', 'sheet', true)
        toolForging(metal, 'tuyere', 'double_sheet', true)

        armorForging(metal, 'helmet', 'double_sheet', 'sheet')
        armorForging(metal, 'chestplate', 'double_sheet', 'double_sheet')
        armorForging(metal, 'greaves', 'double_sheet', 'sheet')
        armorForging(metal, 'boots', 'sheet', 'sheet')
        toolForging(metal, 'shield', 'double_sheet')

        toolForging(metal, 'lamp', 'ingot', false)
        toolForging(metal, 'trapdoor', 'sheet', false)

        // Shears
        event.recipes.createSequencedAssembly(
            [
                'tfc:metal/shears/' + metal
            ],
            'tfc:metal/knife_blade/' + metal,
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_shears',
                    [
                        'kubejs:incomplete_' + metal + '_shears',
                        'tfc:metal/knife_blade/' + metal,
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_shears',
                    [
                        'kubejs:incomplete_' + metal + '_shears',
                        'tfc:powder/flux'
                    ]
                ),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_shears',
                    [
                        'kubejs:incomplete_' + metal + '_shears'
                    ]
                )
            ]
        ).transitionalItem('kubejs:incomplete_' + metal + '_shears')
        .loops(1)
        .id('kubejs:welding/shears/' + metal)

        // Chains
        event.recipes.createSequencedAssembly(
            [
                '16x tfc:metal/chain/' + metal
            ],
            'tfc:metal/ingot/' + metal,
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + metal + '_chain',
                    [
                        'kubejs:incomplete_' + metal + '_chain',
                        'kubejs:chain_smithing_plan'
                    ]
                ).keepHeldItem(),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_chain',
                    'kubejs:incomplete_' + metal + '_chain'
                ),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + metal + '_chain',
                    'kubejs:incomplete_' + metal + '_chain'
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_' + metal + '_chain',
                    [
                        'kubejs:incomplete_' + metal + '_chain',
                        Fluid.of('minecraft:water', 100)
                    ]
                )
            ]
        ).transitionalItem('kubejs:incomplete_' + metal + '_chain')
        .loops(1)
        .id('kubejs:forging/chain/' + metal)
    }

    let toolMetals = [
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'copper',
        'wrought_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'
    ]

    let metals = [
        'bismuth',
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold',
        'nickel',
        'rose_gold',
        'silver',
        'tin',
        'zinc',
        'sterling_silver',
        'wrought_iron',
        'cast_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'
    ]

    for (const metal of toolMetals) {
        standardForging(metal)
    }
    
    for (const metal of metals) {
        event.custom({
            type: 'createaddition:rolling',
            input: Ingredient.of('tfc:metal/ingot/' + metal).toJson(),
            result: Item.of('tfc:metal/rod/' + metal, 2).toResultJson()
        }).id('kubejs:rolling/ingot/' + metal)
    }

    let smithingTypes = [
        'pickaxe_head',
        'propick_head',
        'axe_head',
        'shovel_head',
        'hoe_head',
        'chisel_head',
        'hammer_head',
        'saw_blade',
        'javelin_head',
        'sword_blade',
        'mace_head',
        'knife_blade',
        'scythe_blade',
        'fish_hook',
        'tuyere',

        'helmet',
        'chestplate',
        'greaves',
        'boots',
        'shield',

        'chain',
        'lamp',
        'trapdoor'
    ]

    for (const type of smithingTypes) {
        event.shapeless(
            'kubejs:' + type + '_smithing_plan',
            [
                '#kubejs:' + type + 's'
            ]
        ).keepIngredient('#kubejs:' + type + 's') // This actually makes all items keep - paper ingredient was removed due to this as ignoreNBT() did not work on tool heads
        .id('kubejs:' + type + '_smithing_plan_manual_only')
    }

    let bars = (bars, metal, temperature, tier) => {
        event.recipes.tfc.welding(
            '10x ' + bars,
            [
                'tfc:metal/rod/' + metal,
                'tfc:metal/rod/' + metal
            ]
        ).tier(tier)
        .id('kubejs:welding/' + metal + '_bars')

        let transitionalItem = 'kubejs:unwelded_' + metal + '_bars'

        event.recipes.createSequencedAssembly(
            [
                '10x ' + bars
            ],
            'tfc:metal/rod/' + metal,
            [
                event.recipes.createDeploying(
                    transitionalItem,
                    [
                        transitionalItem,
                        'tfc:metal/rod/' + metal
                    ]
                ),
                event.recipes.createDeploying(
                    transitionalItem,
                    [
                        transitionalItem,
                        'tfc:powder/flux'
                    ]
                ),
                event.recipes.createPressing(
                    transitionalItem,
                    [
                        transitionalItem
                    ]
                )
            ]
        ).transitionalItem(transitionalItem)
        .loops(1)
        .id('kubejs:automatic_welding/' + metal + '_bars')
        
        event.remove({input: bars, type: 'tfc:heating'})

        event.recipes.tfc.heating(
            Fluid.of('tfc:metal/' + metal, 10),
            bars,
            temperature
        )

        let recipe = event.recipes.createMixing(
            Fluid.of('tfc:metal/' + metal, 10),
            bars
        )

        if (temperature > 1100) {
            recipe.superheated()
        }
        else {
            recipe.heated()
        }
    }

    event.remove({id: 'tfc:anvil/iron_bars'})
    event.remove({id: 'tfc:anvil/iron_bars_double'})
    event.remove({id: 'tfc:anvil/steel_bars'})
    event.remove({id: 'tfc:anvil/steel_bars_double'})
    event.remove({id: 'tfc:anvil/black_steel_bars'})
    event.remove({id: 'tfc:anvil/black_steel_bars_double'})
    event.remove({id: 'tfc:anvil/blue_steel_bars'})
    event.remove({id: 'tfc:anvil/blue_steel_bars_double'})
    event.remove({id: 'tfc:anvil/red_steel_bars'})
    event.remove({id: 'tfc:anvil/red_steel_bars_double'})
    event.remove({id: 'quark:building/crafting/gold_bars'})

    bars('quark:gold_bars', 'gold', 1060, 2)
    bars('minecraft:iron_bars', 'wrought_iron', 1535, 3)
    bars('tfc:steel_bars', 'steel', 1540, 4)
    bars('tfc:black_steel_bars', 'black_steel', 1485, 5)
    bars('tfc:blue_steel_bars', 'blue_steel', 1540, 6)
    bars('tfc:red_steel_bars', 'red_steel', 1540, 6)

    // Grill
    // Trowel
})