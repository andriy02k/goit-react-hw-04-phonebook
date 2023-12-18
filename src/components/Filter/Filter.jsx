import React from 'react'
import { Filters } from './Filter.styled'

const Filter = ({title, filter, handleFilterChange}) => {
  return (
    <Filters>
        {title}
          <input type="text" value={filter} onChange={handleFilterChange} />
    </Filters>
  )
}

export default Filter
