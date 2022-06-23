import React from 'react'
import '../styles/pagination.css'

export default function Pagination() {
  return (
    <div className='pagination'>
        <div className='page-item'>
            <a>1</a>
            <a>4</a>
            <a className='active'>5</a>
            <a>6</a>
            <a>7</a>
            <a>11</a>
        </div>
    </div>
  )
}
