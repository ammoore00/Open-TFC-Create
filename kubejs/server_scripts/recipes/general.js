onEvent('recipes', event => {
    event.remove({id: 'minecraft:iron_bars'})
    event.remove({id: 'minecraft:item_frame'})

    event.remove({type: 'create:haunting'})

    event.remove({type: 'createaddition:rolling', mod: 'createaddition'})
})