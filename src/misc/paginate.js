export const Paginate = (
    totalItems,
    currentPage = 1,
    pageSize,
    maxPages    
    ) => {
        let totalPages = Math.ceil(totalItems / pageSize)
    
        if (currentPage < 1) {
            currentPage = 1
        } else if (currentPage > totalPages) {
            currentPage = totalPages
        }
    
        let startPage = 0, endPage = 0
        if (totalPages <= maxPages) {
            startPage = 1
            endPage = totalPages
        } else {
            let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
            let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1
                endPage = maxPages
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - maxPages + 1
                endPage = totalPages
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage
                endPage = currentPage + maxPagesAfterCurrentPage
            }
        }
    
        const startIndex = (currentPage - 1) * pageSize
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
    
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i)

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        }
    }