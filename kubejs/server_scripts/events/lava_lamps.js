onEvent('block.right_click', event => {
    let getBlockStateProperty = (block, property) => {
        return block.getBlockState().getValues().entrySet().filter(p => p.getKey().name == property)[0].value
    }

    const { block, item } = event

    if (block.hasTag('tfc:lamps')) {
        if (item.getId() == 'minecraft:lava_bucket') {
            if (block.entityData.tank?.Amount == 0) {
                //block.getEntity().mergeNbt({Amount:250,FluidName:"minecraft:lava"})
                event.server.runCommandSilent('data modify block ' + block.pos.x + ' '+ block.pos.y + ' '+ block.pos.z + ' tank set value {Amount:250,FluidName:"minecraft:lava"}')

                //if (!event.player,isCreativeMode()) {
                event.player.setHeldItem(event.hand, Item.of('minecraft:bucket'))
                //}

                event.cancel()
            }
        }
        else if (getBlockStateProperty(block, 'lit') == false &&
                (item.hasTag('tfc:starts_fires_with_item') || item.hasTag('tfc:starts_fires_with_durability') || item.getId() == 'tfc:torch'))
        {
            event.server.runCommandSilent('setblock ' + block.pos.x + ' '+ block.pos.y + ' '+ block.pos.z + ' ' + block.getId() + '["lit"=true]')
            event.player.playSound('entity.ghast.shoot')
            event.cancel()
        }
    }
})