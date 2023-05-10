onEvent('recipes', event => {
    event.remove({id: 'minecraft:observer'})
    event.remove({id: 'minecraft:repeater'})
    event.remove({id: 'minecraft:comparator'})

    event.replaceInput({output: 'quark:redstone_randomizer'}, 'minecraft:prismarine_crystals', 'create:electron_tube')
    event.replaceInput({output: 'quark:redstone_randomizer'}, 'minecraft:stone', '#tfc:rock/smooth')

    event.replaceInput({output: 'create:redstone_link'}, 'minecraft:redstone_torch', 'create:electron_tube')
})