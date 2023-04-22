onEvent('recipes', event => {
    event.remove({output: 'create:zinc_block'})
    event.remove({output: 'create:brass_block'})
    event.remove({output: 'minecraft:gold_nugget'})
    event.remove({output: 'create:zinc_nugget'})
    event.remove({output: 'create:copper_nugget'})
    event.remove({output: 'create:brass_nugget'})
    
    event.remove({output: 'create:peculiar_bell'})

    event.remove({output: 'create:sturdy_sheet'})
    event.recipes.createSequencedAssembly(
        [
            'create:sturdy_sheet'
        ],
        'tfc:metal/sheet/black_steel',
        [
            event.recipes.createDeploying(
                'create:unprocessed_obsidian_sheet',
                [
                    'create:unprocessed_obsidian_sheet',
                    'tfc:metal/sheet/blue_steel'
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
})