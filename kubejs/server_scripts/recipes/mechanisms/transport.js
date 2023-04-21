onEvent('recipes', event => {
    event.remove({id: 'minecraft:powered_rail'})
    event.remove({id: 'minecraft:activator_rail'})
    event.remove({output: 'create:controller_rail'})

    event.shaped(
        '16x create:controller_rail',
        [
            'GSG',
            'GEG',
            'GSG'
        ],
        {
            G: 'tfc:metal/rod/gold',
            S: '#tfc:can_be_lit_on_torch',
            E: 'create:electron_tube'
        }
    )

    event.remove({output: 'create:track'})
    event.recipes.createSequencedAssembly(
        [
            '4x create:track'
        ],
        '#create:sleepers',
        [
            event.recipes.createDeploying(
                'create:incomplete_track',
                [
                    'create:incomplete_track',
                    'tfc:metal/rod/steel'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_track',
                [
                    'create:incomplete_track',
                    'tfc:metal/rod/steel'
                ]
            ),
            event.recipes.createPressing(
                'create:incomplete_track',
                [
                    'create:incomplete_track'
                ]
            )
        ]
    ).transitionalItem('create:incomplete_track')
    .loops(1)
})