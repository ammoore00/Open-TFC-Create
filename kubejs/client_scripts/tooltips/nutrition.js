onEvent('item.tooltip', event => {
    tooltip.addAdvanced(Ingredient.all, (_, _, text) => {
        for (let i = 0; i < text.size(); i++) {
            let component = text.get(i)

            let key = component?.key

            if (key != null
                    && (key.contains('tfc.tooltip.nutrition')
                            || key.contains('tfc.screen.nutrition')))
            {
                text.remove(i)
                return
            }
        }
    })
})