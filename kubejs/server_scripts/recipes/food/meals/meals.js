onEvent('recipes', event => {
    event.remove({id: 'farmersdelight:nether_salad'})
    event.remove({id: 'farmersdelight:cooking/dog_food'})
    event.remove({id: 'farmersdelight:horse_feed'})

    event.remove({id: 'tfc:pot/soup_3'})
    event.remove({id: 'tfc:pot/soup_4'})
    event.remove({id: 'tfc:pot/soup_5'})
})