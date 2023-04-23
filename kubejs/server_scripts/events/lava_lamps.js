onEvent('block.right_click', event => {
    let getBlockStateProperty = (block, property) => {
        return block.getBlockState().getValues().entrySet().filter(p => p.getKey().name == property)[0].value
    }

    const { block, item } = event

    if (block.hasTag('tfc:lamps')) {
        if (event.item == 'minecraft:lava_bucket') {
            if (block.entityData.tank?.Amount == 0) {
                //block.getEntity().mergeNbt({Amount:250,FluidName:"minecraft:lava"})
                event.server.runCommandSilent('data modify block ' + block.pos.x + ' '+ block.pos.y + ' '+ block.pos.z + ' tank set value {Amount:250,FluidName:"minecraft:lava"}')

                //if (!event.player.isCreativeMode()) {
                    event.player.setHeldItem(event.hand, Item.of('minecraft:bucket'))
                //}
            }
        }
        else if (block.properties.lit == 'false' &&
                (event.item == 'tfc:torch' || event.item == 'minecraft:fire_charge' || event.item == 'minecraft:flint_and_steel'))
        {
            event.server.runCommandSilent('setblock ' + block.pos.x + ' '+ block.pos.y + ' '+ block.pos.z + ' ' + block.getId() + '["lit"=true]')
            event.player.playSound('entity.ghast.shoot')

            if (!event.player.isCreativeMode()) {
                event.player.damageHeldItem(event.hand, 1)

                if (event.item == 'minecraft:fire_charge') {
                    event.item.count--
                }
            }

            event.cancel()
        }
    }
})