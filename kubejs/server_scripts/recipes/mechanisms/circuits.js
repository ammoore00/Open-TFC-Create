onEvent('recipes', event => {
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
        'tfc:metal/sheet/wrought_iron',
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
    
    event.remove({output: 'createaddition:capacitor'})
    event.recipes.createSequencedAssembly(
        [
            'createaddition:capacitor'
        ],
        'tfc:metal/sheet/wrought_iron',
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
})