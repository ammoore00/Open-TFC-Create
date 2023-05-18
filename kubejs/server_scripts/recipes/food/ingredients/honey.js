onEvent('recipes', event => {
    event.remove({id: 'firmalife:crafting/honey_jar'})
    event.remove({id: 'firmalife:crafting/honey_jar_open'})
    event.remove({id: 'create:emptying/honey_bottle'})

    event.recipes.createFilling(
        'firmalife:honey_jar',
        [
            'firmalife:empty_jar',
            Fluid.of('create:honey', 250)
        ]
    ).id('kubejs:filling/honey_jar')

    event.recipes.createEmptying(
        [
            'firmalife:empty_jar',
            Fluid.of('create:honey', 250)
        ],
        'firmalife:honey_jar'
    ).id('kubejs:emptying/honey_jar')

    event.recipes.createMixing(
        Fluid.of('create:honey', 250),
        'firmalife:raw_honey'
    ).heated()
    .id('kubejs:mixing/honey_from_raw_honey')

    event.replaceInput({id: 'minecraft:honeycomb_block'}, 'minecraft:honeycomb', 'firmalife:beeswax')
    event.remove({id: 'minecraft:honey_block'})
})