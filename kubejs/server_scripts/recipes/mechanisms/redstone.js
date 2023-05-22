onEvent('recipes', event => {
    event.remove({id: 'minecraft:observer'})
    event.remove({id: 'minecraft:repeater'})
    event.remove({id: 'minecraft:comparator'})

    event.replaceInput({output: 'quark:redstone_randomizer'}, 'minecraft:prismarine_crystals', 'create:electron_tube')
    event.replaceInput({output: 'quark:redstone_randomizer'}, 'minecraft:stone', '#tfc:rock/smooth')

    event.replaceInput({output: 'create:redstone_link'}, 'minecraft:redstone_torch', 'create:electron_tube')

    event.remove({id: 'minecraft:piston'})
    event.replaceInput({id: 'tfc:crafting/vanilla/redstone/piston'}, 'tfc:brass_mechanisms', 'minecraft:redstone')
    event.remove({id: 'tfc:crafting/unsticky_piston'})
    event.recipes.tfc.barrel_sealed(
        'minecraft:piston',
        [
            'minecraft:sticky_piston',
            Fluid.of('tfc:lye', 25)
        ],
        1000
    ).id('kubejs:barrel_sealed/unsticky_piston')
    event.recipes.tfc.barrel_sealed(
        'create:mechanical_piston',
        [
            'create:sticky_mechanical_piston',
            Fluid.of('tfc:lye', 25)
        ],
        1000
    ).id('kubejs:barrel_sealed/unsticky_mechanical_piston')
})