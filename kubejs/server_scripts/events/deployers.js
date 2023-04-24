onEvent('block.right_click', event => {
    if (event.player.isFake()) {
        // Lighting charcoal forge
        if ((event.item == 'minecraft:flint_and_steel' || event.item == 'tfc:firestarter')) {
            if (event.block.north.hasTag('tfc:forge_insulation')
                    && event.block.south.hasTag('tfc:forge_insulation')
                    && event.block.east.hasTag('tfc:forge_insulation')
                    && event.block.west.hasTag('tfc:forge_insulation')
                    && event.block.down.hasTag('tfc:forge_insulation')) 
            {
                if ((event.block == 'tfc:charcoal_forge' && event.block.properties.heat_level == '0') 
                        || (event.block == 'tfc:charcoal_pile' && (event.block.properties.layers == '7' || event.block.properties.layers == '8')))
                {
                    event.player.damageHeldItem(event.hand, 1)
                    event.block.set('tfc:charcoal_forge', {heat_level: '1'})
                }
            }
        }

        // Sealing/unsealing barrels
        if (event.block.hasTag('tfc:barrels')
                && event.item == 'create:hand_crank' || event.item.hasTag('create:valve_handles'))
        {
            if (event.block.properties.sealed == 'false'){
                event.block.set(event.block.id, {sealed: 'true'})
            }
            else {
                event.block.set(event.block.id, {sealed: 'false'})
            }
        }
    }
})