export const showFilteredResults = (filters, itemsForSale) => {
    const newItemSale = {}

    //==== PROCESSOR ====//
    let finalProc = itemsForSale.Processor
    let tempProc = []

    for (let key in filters.Processor) {
        if (filters.Processor[key].length > 0) {
            loopProc(key)
            finalProc =  tempProc
            tempProc = []
        }
    }

    function loopProc(key){
        filters.Processor[key].forEach((search, i)=> {
            finalProc.forEach((item, i)=> {
                if (search === item[key]) {
                    const index = tempProc.findIndex(x => x.id===item.id)
                    if (index === -1){tempProc.push(item)}
                }
            })
        })
    }

    //==== MOTHERBOARD ====//
    let finalMobo = itemsForSale.Motherboard
    let tempMobo = []
    for (let key in filters.Motherboard) {
        if (filters.Motherboard[key].length > 0) {
            loopMobo(key)
            finalMobo =  tempMobo
            tempMobo = []
        }
    }

    function loopMobo(key) {
        filters.Motherboard[key].forEach((search, i)=> {
            finalMobo.forEach((item, i)=> {
                if (search === item[key]) {
                    const index = tempMobo.findIndex(x => x.id===item.id)
                    if (index === -1){tempMobo.push(item)}
                }
            })
        })
    }

    //==== MEMORY ====//
    //filters.Memory.brandID []
    //filters.Memory.ramID []
    let finalMem = itemsForSale.Memory
    let tempMem = []
    for (let key in filters.Memory) {
        if (filters.Memory[key].length > 0) {
            loopMem(key)
            finalMem =  tempMem
            tempMem = []
        }
    }

    function loopMem(key) {
        filters.Memory[key].forEach((search, i)=> {
            finalMem.forEach((item, i)=> {
                if (search === item[key]) {
                    const index = tempMem.findIndex(x => x.id===item.id)
                    if (index === -1){tempMem.push(item)}
                }
            })
        })
    }

    //==== GFXCARD ====//
    let finalGFX = itemsForSale.GraphicsCard
    let tempGFX = []
    for (let key in filters.GraphicsCard) {
        if (filters.GraphicsCard[key].length > 0) {
            loopGFX(key)
            finalGFX =  tempGFX
            tempGFX = []
        }
    }

    function loopGFX(key) {
        filters.GraphicsCard[key].forEach((search, i)=> {
            finalGFX.forEach((item, i)=> {
                if (search === item[key]) {
                    const index = tempGFX.findIndex(x => x.id===item.id)
                    if (index === -1){tempGFX.push(item)}
                }
            })
        })
    }

    newItemSale.Processor = finalProc
    newItemSale.Motherboard = finalMobo
    newItemSale.Memory = finalMem
    newItemSale.GraphicsCard = finalGFX

    return newItemSale
}