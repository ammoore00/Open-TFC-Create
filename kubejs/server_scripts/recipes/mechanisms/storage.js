onEvent('recipes', event => {
    event.replaceInput({output: 'create:item_vault'}, 'tfc:metal/sheet/wrought_iron', 'tfc:metal/double_sheet/blue_steel')
    event.replaceInput({output: 'create:item_vault'}, 'minecraft:barrel', '#tfcbarrels:barrels')

    event.remove({mod: 'toms_storage'})

    event.shapeless(
        'toms_storage:ts.inventory_connector',
        [
            'create:brass_casing',
            '#forge:chests/wooden'
        ]
    ).id('kubejs:inventory_connector')

    event.shaped(
        '4x toms_storage:ts.trim',
        [
            ' L ',
            'LCL',
            ' L '
        ],
        {
            L: '#tfc:lumber',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('kubejs:inventory_trim')

    event.recipes.createMixing(
        'toms_storage:ts.trim',
        [
            'toms_storage:ts.painted_trim',
            Fluid.of('minecraft:water', 100)
        ]
    ).id('kubejs:mixing/inventory_trim_cleaning')
    event.recipes.tfc.barrel_instant(
        'toms_storage:ts.trim',
        'toms_storage:ts.painted_trim',
        Fluid.of('minecraft:water', 100)
    ).id('kubejs:barrel/inventory_trim_cleaning')

    event.shapeless(
        'toms_storage:ts.inventory_proxy',
        [
            'toms_storage:ts.inventory_connector',
            'create:filter'
        ]
    ).id('kubejs:inventory_proxy')

    event.shaped(
        'toms_storage:ts.storage_terminal',
        [
            'E',
            'C'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('kubejs:storage_terminal')

    event.shaped(
        'toms_storage:ts.crafting_terminal',
        [
            'E',
            'C',
            'W'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector',
            W: '#tfc:workbenches'
        }
    ).id('kubejs:crafting_terminal')
    event.shapeless(
        'toms_storage:ts.crafting_terminal',
        [
            'toms_storage:ts.storage_terminal',
            '#tfc:workbenches'
        ]
    ).id('kubejs:crafting_terminal_from_storage_terminal')

    event.shaped(
        '8x toms_storage:ts.inventory_cable',
        [
            'SCS'
        ],
        {
            S: 'tfc:metal/rod/steel',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('kubejs:inventory_cable')

    event.shaped(
        'toms_storage:ts.inventory_cable_framed',
        [
            ' L ',
            'LCL',
            ' L '
        ],
        {
            L: '#tfc:lumber',
            C: 'toms_storage:ts.inventory_cable'
        }
    ).id('kubejs:inventory_cable_framed')

    event.shapeless(
        'toms_storage:ts.inventory_cable_connector',
        [
            'create:brass_casing',
            'toms_storage:ts.inventory_cable'
        ]
    ).id('kubejs:inventory_cable_connector')

    event.shapeless(
        'toms_storage:ts.inventory_cable_connector_filtered',
        [
            'toms_storage:ts.inventory_cable_connector',
            'create:filter'
        ]
    ).id('kubejs:inventory_cable_connector_filtered')

    event.shaped(
        'toms_storage:ts.inventory_cable_connector_framed',
        [
            ' L ',
            'LCL',
            ' L '
        ],
        {
            L: '#tfc:lumber',
            C: 'toms_storage:ts.inventory_cable_connector'
        }
    ).id('kubejs:inventory_cable_connector_framed')

    event.shapeless(
        'toms_storage:ts.inventory_hopper_basic',
        [
            'toms_storage:ts.inventory_connector',
            'create:chute'
        ]
    ).id('kubejs:inventory_hopper_basic')

    event.shaped(
        'toms_storage:ts.level_emitter',
        [
            'E',
            'C',
            'R'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector',
            R: 'tfc:brass_mechanisms'
        }
    ).id('kubejs:level_emitter')
})