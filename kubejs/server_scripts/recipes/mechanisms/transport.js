onEvent('recipes', event => {

    //------ Minecarts ------//

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
            S: '#forge:rods/wooden',
            E: 'create:electron_tube'
        }
    )

    //------ Little Logistics ------//

    event.replaceInput({mod: 'littlelogistics'}, '#forge:ingots/wrought_iron', 'tfc:metal/sheet/cast_iron')
    event.replaceInput({mod: 'littlecontraptions'}, '#forge:ingots/wrought_iron', 'tfc:metal/sheet/cast_iron')
    
    event.replaceInput({output: 'littlelogistics:seater_barge'}, '#minecraft:signs', '#tfc:lumber')
    event.replaceInput({output: 'littlelogistics:seater_barge'}, '#minecraft:wooden_stairs', '#create:seats')
    event.remove({output: 'littlelogistics:seater_car'})
    event.shaped(
        'littlelogistics:seater_car',
        [
            'L L',
            'LLL',
            'I I'
        ],
        {
            L: '#tfc:lumber',
            I: 'tfc:metal/ingot/cast_iron'
        }
    )

    event.replaceInput({output: 'littlelogistics:barge'}, 'minecraft:stick', '#tfc:lumber')
    event.replaceInput({output: 'littlelogistics:barge'}, 'minecraft:chest', '#forge:chests/wooden')
    event.replaceInput({output: 'littlelogistics:chest_cart'}, 'minecraft:chest', '#forge:chests/wooden')

    event.remove({output: 'littlelogistics:fluid_barge'})
    event.shaped(
        'littlelogistics:fluid_barge',
        [
            'LTL',
            'III'
        ],
        {
            L: '#tfc:lumber',
            T: 'create:fluid_tank',
            I: 'tfc:metal/ingot/cast_iron'
        }
    ).id('kubejs:fluid_barge')
    event.remove({output: 'littlelogistics:fluid_car'})
    event.shaped(
        'littlelogistics:fluid_car',
        [
            'T',
            'C'
        ],
        {
            T: 'create:fluid_tank',
            C: 'littlelogistics:seater_car'
        }
    ).id('kubejs:fluid_car')

    event.replaceInput({output: 'littlelogistics:chunk_loader_barge'}, 'minecraft:ender_eye', 'createchunkloading:chunk_loader')
    event.replaceInput({output: 'littlelogistics:chunk_loader_barge'}, 'minecraft:obsidian', '#tfc:lumber')
    event.remove({output: 'littlelogistics:chunk_loader_car'})
    event.shaped(
        'littlelogistics:chunk_loader_car',
        [
            'L',
            'C'
        ],
        {
            L: 'createchunkloading:chunk_loader',
            C: 'littlelogistics:seater_car'
        }
    ).id('kubejs:chunk_loader_car')

    event.replaceInput({output: 'littlelogistics:tug'}, 'minecraft:furnace', 'farmersdelight:stove')
    event.replaceInput({output: 'littlelogistics:tug'}, 'minecraft:piston', '#tfc:lumber')
    event.replaceInput({output: 'littlelogistics:steam_locomotive'}, 'minecraft:furnace', 'farmersdelight:stove')
    event.replaceInput({output: 'littlelogistics:steam_locomotive'}, 'minecraft:piston', '#tfc:lumber')

    event.replaceInput({output: 'littlelogistics:energy_tug'}, 'littlelogistics:vessel_charger', 'createaddition:electric_motor')
    event.replaceInput({output: 'littlelogistics:energy_tug'}, 'minecraft:piston', '#tfc:lumber')
    event.replaceInput({output: 'littlelogistics:energy_tug'}, 'tfc:metal/sheet/cast_iron', 'firmalife:metal/sheet/stainless_steel')
    event.replaceInput({output: 'littlelogistics:energy_locomotive'}, 'littlelogistics:vessel_charger', 'createaddition:electric_motor')
    event.replaceInput({output: 'littlelogistics:energy_locomotive'}, 'minecraft:piston', '#tfc:lumber')
    event.replaceInput({output: 'littlelogistics:energy_locomotive'}, 'tfc:metal/sheet/cast_iron', 'firmalife:metal/sheet/stainless_steel')

    event.remove({output: 'littlelogistics:fishing_barge'})
    event.shaped(
        'littlelogistics:fishing_barge',
        [
            'NNN',
            'III'
        ],
        {
            N: 'tfc:jute_net',
            I: 'tfc:metal/ingot/cast_iron'
        }
    ).id('kubejs:fishing_barge')

    event.replaceInput({output: 'littlecontraptions:contraption_barge'}, '#forge:ingots/brass', '#tfc:lumber')
    event.replaceInput({output: 'littlecontraptions:contraption_barge'}, 'create:andesite_alloy', 'create:brass_casing')

    event.remove({output: 'littlelogistics:vessel_charger'})
    event.recipes.createMechanicalCrafting(
        'littlelogistics:vessel_charger',
        [
            'WWW',
            ' A ',
            'CBC',
            'PIP'
        ],
        {
            W: 'createaddition:gold_spool',
            A: 'create:andesite_alloy',
            C: 'createaddition:capacitor',
            B: 'create:brass_casing',
            P: 'tfc:metal/sheet/red_steel',
            I: 'kubejs:integrated_circuit'
        }
    ).id('kubejs:mechanical_crafting/vessel_charger')

    event.remove({output: 'littlecontraptions:barge_assembler'})
    event.shapeless(
        'littlecontraptions:barge_assembler',
        'create:cart_assembler'
    ).id('kubejs:barge_assembler_from_cart_assembler')
    event.shapeless(
        'create:cart_assembler',
        'littlecontraptions:barge_assembler'
    ).id('kubejs:cart_assembler_from_barge_assembler')

    event.remove({output: 'littlelogistics:receiver_component'})
    event.remove({output: 'littlelogistics:transmitter_component'})
    event.replaceInput({}, 'littlelogistics:receiver_component', 'create:electron_tube')
    event.remove({input: 'littlelogistics:transmitter_component'})
    event.shaped(
        'littlelogistics:tug_route',
        [
            'R',
            'C'
        ],
        {
            R: 'create:redstone_link',
            C: 'tfc:metal/sheet/cast_iron'
        }
    ).id('kubejs:tug_route')
    event.shapeless(
        'littlelogistics:tug_route',
        'littlelogistics:locomotive_route'
    ).id('kubejs:tug_route_from_locomotive_route')
    event.shapeless(
        'littlelogistics:locomotive_route',
        'littlelogistics:tug_route'
    ).id('kubejs:locomotive_route_from_tug_route')
    
    event.remove({output: 'littlelogistics:spring'})
    event.shapeless(
        'littlelogistics:spring',
        'create:minecart_coupling'
    ).id('kubejs:spring_from_minecart_coupling')
    event.shapeless(
        'create:minecart_coupling',
        'littlelogistics:spring'
    ).id('kubejs:minecart_coupling_from_spring')

    //------ Trains ------//

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