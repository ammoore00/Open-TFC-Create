onEvent('block.modification', event => {
    let logHardness = (type) => {
        event.modify('tfc:wood/log/' + type, block => {
            block.destroySpeed = 2
        })
    }

    let woods = [
        'acacia',
        'ash',
        'aspen',
        'birch',
        'blackwood',
        'chestnut',
        'douglas_fir',
        'hickory',
        'kapok',
        'maple',
        'oak',
        'palm',
        'pine',
        'rosewood',
        'sequoia',
        'spruce',
        'sycamore',
        'white_cedar',
        'willow'
    ]

    for (const wood of woods) {
        logHardness(wood)
    }
})