onEvent('recipes', event => {
    event.replaceInput({output: 'create:fluid_tank'}, 'tfc:metal/sheet/copper', 'tfc:metal/double_sheet/copper')
    event.replaceInput({output: 'create:fluid_tank'}, 'minecraft:barrel', '#forge:glass/colorless')
})