onEvent('recipes', event => {
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
            '4x minecraft:redstone'
        ]
    )

    event.remove({output: 'create:electron_tube'})
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