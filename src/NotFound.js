import React from 'react'
import { Link } from  'react-router-dom'

export const NotFound = () => {
  return (
    <div className='not-found'><h2>Sorry</h2><p>That page does not exists</p><Link to="/">Back home...</Link> </div>
  )
}
