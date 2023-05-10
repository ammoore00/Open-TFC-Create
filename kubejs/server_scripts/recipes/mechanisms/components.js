onEvent('recipes', event => {

    event.remove({output: 'create:sturdy_sheet'})
    event.recipes.createSequencedAssembly(
        [
            'create:sturdy_sheet'
        ],
        'firmalife:metal/sheet/stainless_steel',
        [
            event.recipes.createDeploying(
                'create:unprocessed_obsidian_sheet',
                [
                    'create:unprocessed_obsidian_sheet',
                    'create:powdered_obsidian'
                ]
            ),
            event.recipes.createDeploying(
                'create:unprocessed_obsidian_sheet',
                [
                    'create:unprocessed_obsidian_sheet',
                    'tfc:powder/flux'
                ]
            ),
            event.recipes.createPressing(
                'create:unprocessed_obsidian_sheet',
                'create:unprocessed_obsidian_sheet'
            )
        ]
    ).transitionalItem('create:unprocessed_obsidian_sheet')
    .loops(2)

    event.remove({id: 'tfc:anvil/brass_mechanisms'})
    event.recipes.createSequencedAssembly(
        [
            Item.of('2x tfc:brass_mechanisms').withChance(80),
            Item.of('tfc:metal/sheet/brass').withChance(10),
            Item.of('tfc:metal/rod/brass').withChance(4),
            Item.of('create:cogwheel').withChance(4),
            Item.of('create:shaft').withChance(2)
        ],
        'tfc:metal/sheet/brass',
        [
            event.recipes.createDeploying(
                'kubejs:incomplete_brass_mechanisms',
                [
                    'kubejs:incomplete_brass_mechanisms',
                    'create:cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_brass_mechanisms',
                [
                    'kubejs:incomplete_brass_mechanisms',
                    'create:large_cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_brass_mechanisms',
                [
                    'kubejs:incomplete_brass_mechanisms',
                    'tfc:metal/rod/brass'
                ]
            )
        ]
    ).transitionalItem('kubejs:incomplete_brass_mechanisms')
    .loops(1)
    .id('kubejs:sequenced_assembly/brass_mechanisms')

    event.remove({output: 'create:precision_mechanism'})
    event.recipes.createSequencedAssembly(
        [
            Item.of('create:precision_mechanism').withChance(80),
            Item.of('firmalife:metal/sheet/stainless_steel').withChance(10),
            Item.of('tfc:metal/rod/nickel').withChance(4),
            Item.of('create:cogwheel').withChance(4),
            Item.of('create:shaft').withChance(2)
        ],
        'firmalife:metal/sheet/stainless_steel',
        [
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'create:cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'create:large_cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'tfc:metal/rod/nickel'
                ]
            )
        ]
    ).transitionalItem('create:incomplete_precision_mechanism')
    .loops(5)
    .id('kubejs:sequenced_assembly/precision_mechanism')

    //------ Circuits ------//

    event.custom({
        type: 'createaddition:rolling',
        input: Ingredient.of('tfc:metal/rod/copper').toJson(),
        result: Item.of('createaddition:copper_wire', 2).toResultJson()
    }).id('kubejs:rolling/rod/copper')
    
    event.custom({
        type: 'createaddition:rolling',
        input: Ingredient.of('tfc:metal/rod/gold').toJson(),
        result: Item.of('createaddition:gold_wire', 2).toResultJson()
    }).id('kubejs:rolling/rod/gold')

    event.remove({output: 'create:rose_quartz'})
    event.recipes.createMixing(
        'create:rose_quartz',
        [
            'kubejs:quartz_powder',
            '4x minecraft:redstone',
            Fluid.of('tfc:metal/rose_gold', 100)
        ]
    )

    event.remove({output: 'create:electron_tube'})
    event.shaped(
        'create:electron_tube',
        [
            'Q',
            'C',
            'N'
        ],
        {
            Q: 'create:polished_rose_quartz',
            C: 'createaddition:copper_wire',
            N: 'tfc:metal/sheet/nickel'
        }
    ).id('kubejs:electron_tube_manual_only')
    event.recipes.createSequencedAssembly(
        [
            'create:electron_tube'
        ],
        'tfc:metal/sheet/nickel',
        [
            event.recipes.createDeploying(
                'kubejs:incomplete_electron_tube',
                [
                    'kubejs:incomplete_electron_tube',
                    'createaddition:copper_wire'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_electron_tube',
                [
                    'kubejs:incomplete_electron_tube',
                    'create:polished_rose_quartz'
                ]
            )
        ]
    ).transitionalItem('kubejs:incomplete_electron_tube')
    .loops(1)
    .id('kubejs:circuits/electron_tube')
    
    event.remove({output: 'createaddition:capacitor'})
    event.recipes.createSequencedAssembly(
        [
            'createaddition:capacitor'
        ],
        'tfc:metal/sheet/nickel',
        [
            event.recipes.createDeploying(
                'kubejs:incomplete_capacitor',
                [
                    'kubejs:incomplete_capacitor',
                    'tfc:metal/sheet/zinc'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_capacitor',
                [
                    'kubejs:incomplete_capacitor',
                    'tfc:metal/sheet/copper'
                ]
            )
        ]
    ).transitionalItem('kubejs:incomplete_capacitor')
    .loops(1)
    .id('kubejs:circuits/capacitor')
    
    event.remove({output: 'createaddition:capacitor'})
    event.recipes.createSequencedAssembly(
        [
            'kubejs:integrated_circuit'
        ],
        'create:sturdy_sheet',
        [
            event.recipes.createDeploying(
                'kubejs:incomplete_integrated_circuit',
                [
                    'kubejs:incomplete_integrated_circuit',
                    'createaddition:gold_wire'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_integrated_circuit',
                [
                    'kubejs:incomplete_integrated_circuit',
                    'create:electron_tube'
                ]
            ),
            event.recipes.createDeploying(
                'kubejs:incomplete_integrated_circuit',
                [
                    'kubejs:incomplete_integrated_circuit',
                    'createaddition:capacitor'
                ]
            )
        ]
    ).transitionalItem('kubejs:incomplete_capacitor')
    .loops(1)
    .id('kubejs:circuits/integrated_circuit')
})