onEvent('recipes', event => {
    let brickTypes = [
        'worn',
        'dean',
        'red',
        'pearl',
        'scarlet',
        'dusk',
        'blue'
    ]

    let brickShapes = [
        'bricks',
        'brick_tiles',
        'long_bricks',
        'short_bricks'
    ]

    for (const type of brickTypes) {
        for (const shape of brickShapes) {
            event.remove({output: 'createdeco:' + type + '_' + shape + '_slab_vert'})
            event.remove({output: 'createdeco:' + 'cracked_' + type + '_' + shape + '_slab_vert'})
            event.remove({output: 'createdeco:' + 'mossy_' + type + '_' + shape + '_slab_vert'})
        }
    }
})