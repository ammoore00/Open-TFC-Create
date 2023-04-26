onEvent('recipes', event => {
    event.remove({type: 'tfc:leather_knapping'})
    event.remove({output: 'sewingkit:wood_sewing_needle'})
    event.remove({output: 'sewingkit:bone_sewing_needle'})
    event.remove({output: 'sewingkit:stone_sewing_needle'})
    event.remove({output: 'sewingkit:iron_sewing_needle'})
    event.remove({output: 'sewingkit:gold_sewing_needle'})
    event.remove({output: 'sewingkit:diamond_sewing_needle'})
    event.remove({output: 'sewingkit:netherite_sewing_needle'})
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('minecraft:bone').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('sewingkit:bone_sewing_needle').toResultJson()
        ]
    }).id('kubejs:cutting/bone')

    event.recipes.tfc.anvil(
        'sewingkit:iron_sewing_needle',
        'tfc:metal/rod/wrought_iron',
        [
            'draw_last',
            'shrink_any',
            'hit_any'
        ]
    ).applyBonus()
    .id('kubejs:anvil/iron_sewing_needle')

    event.recipes.createPressing(
        Item.of('sewingkit:iron_sewing_needle', '{"tfc:forging_bonus":2}'),
        'tfc:metal/rod/wrought_iron'
    ).id('kubejs:pressing/iron_sewing_needle')

    event.replaceInput({id: 'toolbelt:pouch_via_sewing'}, 'minecraft:gold_ingot', '')

    event.remove({output: 'quark:backpack'})
})