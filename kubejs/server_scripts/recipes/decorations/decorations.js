onEvent('recipes', event => {
    event.remove({id: 'farmersdelight:painting_from_canvas'})
    event.replaceInput({output: 'minecraft:painting'}, '#tfc:high_quality_cloth', ['#tfc:high_quality_cloth', 'tfc:burlap_cloth'])
})