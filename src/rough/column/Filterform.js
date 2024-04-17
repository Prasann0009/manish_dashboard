import React from 'react'

export function ColFilterform({ column }) {
    let {filterValue,setFilter}=column
    return (
        <>
            <div class="mb-3">
                <label for="" class="form-label">Serch In table</label>
                <input type="search" value={filterValue} class="form-control" id="" onChange={(e) => setFilter(e.target.value)} />
            </div>
        </>
    ) 
}

// export defay= ColFilterform