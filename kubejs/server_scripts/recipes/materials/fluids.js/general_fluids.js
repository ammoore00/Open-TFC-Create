onEvent('recipes', event => {
    event.recipes.createMixing(
        Fluid.of('tfc:limewater', 500),
        [
            Fluid.of('minecraft:water', 500),
            'tfc:powder/flux'
        ]
    ).id('kubejs:mixing/limewater')

    event.recipes.createMixing(
        Fluid.of('tfc:lye', 1000),
        [
            Fluid.of('minecraft:water', 1000),
            '5x tfc:powder/wood_ash'
        ]
    ).heated()
    .id('kubejs:mixing/lye')

    event.recipes.createMixing(
        [
            Fluid.of('tfc:olive_oil', 50),
            'tfc:dirty_jute_net'
        ],
        [
            Fluid.of('tfc:olive_oil_water', 250),
            'tfc:jute_net'
        ]
    ).id('kubejs:mixing/olive_oil')

    event.recipes.createMixing(
        Fluid.of('tfc:olive_oil_water', 1000),
        [
            Fluid.of('minecraft:water', 1000),
            '5x tfc:olive_paste'
        ]
    ).heated()
    .id('kubejs:mixing/olive_oil_water')

    event.recipes.createMixing(
        Fluid.of('tfc:salt_water', 125),
        [
            Fluid.of('minecraft:water', 125),
            'tfc:powder/salt'
        ]
    ).id('kubejs:mixing/salt_water')

    event.recipes.createMixing(
        Fluid.of('tfc:tallow', 1000),
        [
            Fluid.of('minecraft:water', 1000),
            '5x tfc:blubber'
        ]
    ).heated()
    .id('kubejs:mixing/tallow')
})