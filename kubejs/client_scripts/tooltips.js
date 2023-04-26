onEvent('item.tooltip', tooltip => {
    let removeTooltip = (item, text, itemToRemove, tooltipToRemove) => {
        if (item == itemToRemove) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)

                console.log(component)

                let key = component?.key

                if (key != null && key.contains(tooltipToRemove)) {
                    text.remove(i)
                    return
                }
            }
        }
    }

    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        removeTooltip(item, text, 'sewingkit:bone_sewing_needle', 'text.sewingkit.needle.lore_text')
        removeTooltip(item, text, 'sewingkit:iron_sewing_needle', 'text.sewingkit.needle.lore_text')
    })
})