export const itemsFilters = {
    Processor: {
        brands: [
            {name: 'Intel', id: 'procIntel', subcat: 'brandID'},
            {name: 'AMD', id: 'procAMD', subcat: 'brandID'}
        ],
    },
    Motherboard:{
        brands: [
            {name: 'Asus', id: 'moboAsus', subcat: 'brandID'},
            {name: 'MSI', id: 'moboMSI', subcat: 'brandID'},
            {name: 'Gigabyte', id: 'moboGigabyte', subcat: 'brandID'},
            {name: 'ASRock', id: 'moboASRock', subcat: 'brandID'},
            {name: 'EVGA', id: 'moboEVGA', subcat: 'brandID'},
        ],
        socket: [
            {name: 'Intel', id: 'Intel', subcat: 'socketID'},
            {name: 'AMD', id: 'AMD', subcat: 'socketID'}
        ]
    },
    Memory:{
        brands: [
            {name: 'Kingston', id: 'ramKingston', subcat: 'brandID'},
            {name: 'Corsair', id: 'ramCorsair', subcat: 'brandID'},
            {name: 'OCZ', id: 'ramOCZ', subcat: 'brandID'},
            {name: 'Transcend', id: 'ramTranscend', subcat: 'brandID'},
            {name: 'G.Skill', id: 'ramGSkill', subcat: 'brandID'},
        ],
        RAMsize: [
            {name: '2GB', id: 'ram2GB', subcat: 'ramID'},
            {name: '4GB', id: 'ram4GB', subcat: 'ramID'},
            {name: '8GB', id: 'ram8GB', subcat: 'ramID'},
            {name: '16GB', id: 'ram16GB', subcat: 'ramID'},
            {name: '32GB', id: 'ram32GB', subcat: 'ramID'},
        ]
    } 
}

export const itemsForSaleMain = {
    Processor: [
        {id: '1', name: 'StrongIntel', brand: 'Intel', brandID: 'procIntel'},
        {id: '2', name: 'i9', brand: 'Intel', brandID: 'procIntel'},
        {id: '3', name: 'i7', brand: 'Intel', brandID: 'procIntel'},
        {id: '4', name: 'i5', brand: 'Intel', brandID: 'procIntel'},
        {id: '5', name: 'i3', brand: 'Intel', brandID: 'procIntel'},
        {id: '6', name: 'StrongAMD', brand: 'AMD', brandID: 'procAMD'},
        {id: '7', name: 'Ryzen7', brand: 'AMD', brandID: 'procAMD'},
        {id: '8', name: 'Ryzen5', brand: 'AMD', brandID: 'procAMD'},
        {id: '9', name: 'Ryzen3', brand: 'AMD', brandID: 'procAMD'},
        {id: '10', name: 'i12', brand: 'Intel', brandID: 'procIntel'},
        {id: '11', name: 'Ryzen Threadripper', brand: 'AMD', brandID: 'procAMD'},
    ],
    Motherboard:[
        {id: '1', name: 'ASROCK A320M-HDV', brand: 'ASRock', brandID: 'moboASRock', socketID: 'AMD'},
        {id: '2', name: 'ASROCK FM2A68M-DG3+', brand: 'ASRock', brandID: 'moboASRock', socketID: 'AMD'},
        {id: '3', name: 'ASROCK FM2A88M-HD+', brand: 'ASRock', brandID: 'moboASRock', socketID: 'AMD'},
        {id: '4', name: 'ASUS A68HM-K AMD', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '5', name: 'ASUS EX-A320M GAMING AM4', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '6', name: 'ASUS PRIME A320M-K', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '7', name: 'ASUS PRIME B350-PLUS', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '8', name: 'ASUS ROG CROSSHAIR VI EXTREME', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '9', name: 'ASUS ROG ZENITH EXTREME', brand: 'Asus', brandID: 'moboAsus', socketID: 'AMD'},
        {id: '10', name: 'MSI Z270 CAMO SQUAD LGA1151', brand: 'MSI', brandID: 'moboMSI', socketID: 'Intel'},
        {id: '11', name: 'MSI Z270 GAMING M3 LGA1151', brand: 'MSI', brandID: 'moboMSI', socketID: 'Intel'},
        {id: '12', name: 'MSI Z270 TOMAHAWK LGA 1151', brand: 'MSI', brandID: 'moboMSI', socketID: 'Intel'},
        {id: '13', name: 'MSI H310M PRO-VDH PLUS', brand: 'MSI', brandID: 'moboMSI', socketID: 'Intel'},
        {id: '14', name: 'GIGABYTE Z390 AORUS XTREME', brand: 'Gigabyte', brandID: 'moboGigabyte', socketID: 'Intel'},
        {id: '15', name: 'EVGA B360 112-CS-E365-KR LGA 1151', brand: 'EVGA', brandID: 'moboEVGA', socketID: 'Intel'},
        {id: '16', name: 'EVGA X299 DARK 151-SX-E299-KR LGA 2066', brand: 'EVGA', brandID: 'moboEVGA', socketID: 'Intel'}
    ],
    Memory:[
        {id: '1', name: 'Kingston 2 GB', brand: 'Kingston', brandID: 'ramKingston', ramID: 'ram2GB'},
        {id: '2', name: 'Kingston 4 GB', brand: 'Kingston', brandID: 'ramKingston', ramID: 'ram4GB'},
        {id: '3', name: 'Kingston 8 GB', brand: 'Kingston', brandID: 'ramKingston', ramID: 'ram8GB'},
        {id: '4', name: 'Kingston 16 GB', brand: 'Kingston', brandID: 'ramKingston', ramID: 'ram16GB'},
        {id: '5', name: 'Corsair 2 GB', brand: 'Corsair', brandID: 'ramCorsair', ramID: 'ram2GB'},
        {id: '6', name: 'Corsair 4 GB', brand: 'Corsair', brandID: 'ramCorsair', ramID: 'ram4GB'},
        {id: '7', name: 'Corsair 8 GB', brand: 'Corsair', brandID: 'ramCorsair', ramID: 'ram8GB'},
        {id: '8', name: 'Corsair 16 GB', brand: 'Corsair', brandID: 'ramCorsair', ramID: 'ram16GB'},
        {id: '9', name: 'Corsair 32 GB', brand: 'Corsair', brandID: 'ramCorsair', ramID: 'ram32GB'},
        {id: '10', name: 'OCZ 8 GB', brand: 'OCZ', brandID: 'ramOCZ', ramID: 'ram8GB'},
        {id: '11', name: 'OCZ 16 GB', brand: 'OCZ', brandID: 'ramOCZ', ramID: 'ram16GB'},
        {id: '12', name: 'OCZ 32 GB', brand: 'OCZ', brandID: 'ramOCZ', ramID: 'ram32GB'},
        {id: '13', name: 'Transcend 2 GB', brand: 'Transcend', brandID: 'ramTranscend', ramID: 'ram2GB'},
        {id: '14', name: 'Transcend 4 GB', brand: 'Transcend', brandID: 'ramTranscend', ramID: 'ram4GB'},
        {id: '15', name: 'Transcend 8 GB', brand: 'Transcend', brandID: 'ramTranscend', ramID: 'ram8GB'},
        {id: '16', name: 'Transcend 16 GB', brand: 'Transcend', brandID: 'ramTranscend', ramID: 'ram16GB'},
        {id: '17', name: 'G.Skill 2 GB', brand: 'G.Skill', brandID: 'ramGSkill', ramID: 'ram2GB'},
        {id: '18', name: 'G.Skill 4 GB', brand: 'G.Skill', brandID: 'ramGSkill', ramID: 'ram4GB'},
        {id: '19', name: 'G.Skill 8 GB', brand: 'G.Skill', brandID: 'ramGSkill', ramID: 'ram8GB'},
        {id: '20', name: 'G.Skill 16 GB', brand: 'G.Skill', brandID: 'ramGSkill', ramID: 'ram16GB'},
    ]
}