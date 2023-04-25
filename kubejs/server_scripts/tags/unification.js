onEvent('item.tags', event => {
    event.add('forge:dusts/diamond', 'tfc:powder/diamond')
    event.add('forge:rods/wrought_iron', 'createaddition:iron_rod')

    event.add('kubejs:unification/straw', [
        'farmersdelight:straw',
        'tfc:straw'
    ])
    
    event.add('kubejs:unification/rope', [
        'farmersdelight:rope',
        'quark:rope'
    ])

    event.add('kubejs:unification/burlap', [
        'farmersdelight:canvas',
        'tfc:burlap_cloth'
    ])

    event.add('kubejs:unification/glass_shard', [
        'quark:clear_shard',
        'tfc:glass_shard'
    ])
})