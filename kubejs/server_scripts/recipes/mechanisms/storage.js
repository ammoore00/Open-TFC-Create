onEvent('recipes', event => {
    event.replaceInput({output: 'create:item_vault'}, 'tfc:metal/sheet/wrought_iron', 'tfc:metal/double_sheet/steel')
    event.replaceInput({output: 'create:item_vault'}, 'minecraft:barrel', '#forge:chests/wooden')
})