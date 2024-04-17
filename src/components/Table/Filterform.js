import React, { useState } from 'react'

function Filterform({ filter, setFilter }) {
    // let [val, setval]=useState("")
    // setFilter(filter)
    return (
        <>
            <div class="mb-3">
                <label for="" class="form-label">Serch In table</label>
                <input type="search" value={filter} class="form-control" id="" onChange={(e) => setFilter(e.target.value)} />
            </div>
        </>
    )
}

export default Filterform