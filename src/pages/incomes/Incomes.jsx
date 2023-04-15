import React from 'react'
import { MoneyCard } from '../../components'

export const Incomes = () => {
  return (
    <div>
      {
        [1,2,3,4].map(item => (
          <MoneyCard count={1000000} isPaid={true} hasStatus={true}/>
        ))
      }
    </div>
  )
}
