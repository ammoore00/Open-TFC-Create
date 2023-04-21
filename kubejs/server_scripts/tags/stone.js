onEvent('item.tags', event => {
    let igneousRocks = [
        'granite',
        'diorite',
        'gabbro',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite'
    ]

    for (const rockType of igneousRocks) {
        event.add('kubejs:' + rockType, [
            'tfc:rock/raw/' + rockType,
            'tfc:rock/hardened/' + rockType,
            'tfc:rock/smooth/' + rockType,
            'tfc:rock/cobble/' + rockType,
            'tfc:rock/bricks/' + rockType,
        ])

        event.add('kubejs:magma', 'tfc:rock/magma/' + rockType)
        
        event.removeAll('create:sleepers')
        event.add('create:sleepers', [
            'tfc:rock/raw/' + rockType + '_slab',
            'tfc:rock/smooth/' + rockType + '_slab'
        ])
    }
})