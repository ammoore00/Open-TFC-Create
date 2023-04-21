onEvent('recipes', event => {
    event.replaceInput({output: 'create:mechanical_piston'}, '#minecraft:wooden_slabs', '#tfc:lumber')
    event.replaceInput({output: 'create:sticky_mechanical_piston'}, 'minecraft:slime_ball', 'tfc:glue')
    event.replaceInput({output: 'create:piston_extension_pole'}, '#minecraft:planks', '#tfc:lumber')
    
    event.replaceInput({output: 'create:gantry_carriage'}, '#minecraft:wooden_slabs', '#tfc:lumber')

    event.replaceInput({output: 'create:windmill_bearing'}, '#minecraft:wooden_slabs', '#tfc:lumber')
    event.replaceInput({output: 'create:mechanical_bearing'}, '#minecraft:wooden_slabs', '#tfc:lumber')
    event.replaceInput({output: 'create:clockwork_bearing'}, '#minecraft:wooden_slabs', '#tfc:lumber')
    
    event.replaceInput({output: 'create:cart_assembler'}, '#tfc:pit_kiln_logs', '#tfc:lumber')

    event.replaceInput({output: 'create:linear_chassis'}, '#minecraft:logs', '#tfc:lumber')
    event.replaceInput({output: 'create:radial_chassis'}, '#minecraft:logs', '#tfc:lumber')
    
    event.replaceInput({output: 'create:sticker'}, 'minecraft:slime_ball', 'tfc:glue')

    let colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ]
    
    for (const color of colors) {
        event.remove({id: 'create:crafting/kinetics/' + color + '_seat'})
    }

    event.shapeless(
        'create:white_seat',
        [
            '#minecraft:wooden_slabs',
            '#tfc:high_quality_cloth'
        ]
    )
})