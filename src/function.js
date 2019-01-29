
export const showFilteredResults = (filters, itemsForSale) => {
    const newItemSale = {}
    const tempProc = []
    const tempMem = []


    //PROCESSOR
    if (filters.Processor.brands.length > 0) {
        filters.Processor.brands.forEach((search, i)=> {
            itemsForSale.Processor.forEach((item, i)=> {
                if (search === item.brandID) {
                    const index = tempMem.findIndex(x => x.id===item.id)
                    if (index === -1){tempMem.push(item)}
                }
            })
        })
    }

    //filters.Memory.brands []
    //filters.Memory.RAMsize []
    for (let key in filters.Memory) {
        if (key.length > 0) {
            filters.Memory[key].forEach((search, i)=> {
                itemsForSale.Memory.forEach((item, i)=> {
                    if (search === item.ramID) {
                        const index = tempMem.findIndex(x => x.id===item.id)
                        if (index === -1){tempMem.push(item)}
                    }
                })
            })
        }
    }   

    // RAM
    // if (filters.Memory.brands.length > 0 && filters.Memory.RAMsize.length > 0) {
    //     filters.Memory.brands.forEach((search, i)=> {
    //         itemsForSale.Memory.forEach((item, i)=> {
    //             if (search === item.brandID) {
    //                 =======//
    //                 filters.Memory.RAMsize.forEach((ramsize, i)=> {
    //                     if (ramsize === item.ramID) {
    //                         const index = tempMem.findIndex(x => x.id===item.id)
    //                         if (index === -1){tempMem.push(item)}
    //                     }
    //                 })
    //             }
    //         })
    //     })
    // } else if (filters.Memory.RAMsize.length > 0) {
    //     filters.Memory.RAMsize.forEach((search, i)=> {
    //         itemsForSale.Memory.forEach((item, i)=> {
    //             if (search === item.ramID) {
    //                 const index = tempMem.findIndex(x => x.id===item.id)
    //                 if (index === -1){tempMem.push(item)}
    //             }
    //         })
    //     })
    // } else if (filters.Memory.brands.length > 0) {
    //     filters.Memory.brands.forEach((search, i)=> {
    //         itemsForSale.Memory.forEach((item, i)=> {
    //             if (search === item.brandID) {
    //                 const index = tempMem.findIndex(x => x.id===item.id)
    //                 if (index === -1){tempMem.push(item)}
    //             }
    //         })
    //     })
    // }


    console.log('tempProc:', tempProc)
    console.log('tempMem:', tempMem)
}