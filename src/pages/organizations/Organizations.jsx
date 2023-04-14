import React from 'react'
import { Corparation } from '../../assets/icons'
import { Card } from '../../components'

export const Organizations = () => {
  const info = [
    {
      img: <Corparation />,
      title: "Toshkent issiq suv xizmat",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",      
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Toshkent issiq suv xizmat",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",      
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Toshkent issiq suv xizmat",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",      
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Toshkent issiq suv xizmat",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",      
      secondUrl: "profil",
    }
  ]
  return (
    <div className='flex flex-wrap gap-10'>
      {
        info.map(item => (
          <Card obj={item}/>
        ))
      }
    </div>
  )
}
