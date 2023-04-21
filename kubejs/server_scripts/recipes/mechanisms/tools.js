onEvent('recipes', event => {
    event.replaceInput({output: 'create:copper_backtank'}, 'tfc:metal/ingot/copper', 'tfc:metal/sheet/copper')
    event.replaceInput({output: 'create:copper_backtank'}, 'minecraft:copper_block', 'create:fluid_tank')
})