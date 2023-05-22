onEvent('item.modification', event => {
    let addEffect = (itemName, effect, time, chance) => {
        event.modify(itemName, item => {
            item.foodProperties = food => {
                food.effect(effect, time, 1, chance)
            }
        })
    }

    let removeEffect = (itemName, effect) => {
        event.modify(itemName, item => {
            item.foodProperties = food => {
                food.removeEffect(effect)
            }
        })
    }

    let addComfortToAll = (tier, items) => {
        for (const item of items) {
            addEffect(item, 'farmersdelight:comfort', tier * 60, 1)
        }
    }

    let addHungerToAll = (chance, items) => {
        for (const item of items) {
            addEffect(item, 'minecraft:hunger', 30, chance)
        }
    }

    let removeEffectFromAll = (effect, items) => {
        for (const item of items) {
            removeEffect(item, effect)
        }
    }

    removeEffectFromAll('minecraft:regeneration', [
        'farmersdelight:fruit_salad',
        'farmersdelight:mixed_salad'
    ])
})