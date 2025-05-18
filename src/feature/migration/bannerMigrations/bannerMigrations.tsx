import React from 'react'
import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom';
import { Button } from '@/feature/core/ui/button';

interface BannerMigrationsProps {
    title:string
    subtitle:string
    ctaText: string;
    img:string
    isProtours: boolean
    navigations:string
    logo:string
}

export const BannerMigrations:React.FC<BannerMigrationsProps> = ({ img, navigations, logo, isProtours, ctaText, subtitle, title}) => {


  const navigate = useNavigate()


  const handleNavigation = () => {
    navigate(navigations)
  }


  const isText = isProtours ? 'items-start text-left' : 'text-right items-end'
  const subText = isProtours ? 'mx-7' : 'mx-3'


  return (
    <section
  id="migrations"
  className="relative h-[480px] md:w-full md:h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${img})` }}
>
  {/* Overlay negro semitransparente */}
  <div className="absolute inset-0 bg-black/35 z-0" />

  {/* Contenido animado */}
  <motion.div
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className={` relative z-10 flex flex-col justify-center h-full  text-white px-6 py-16 space-y-6   ${isText}`}
  >
   <picture >
  <motion.div
    className="relative  md:mt-0 w-32 h-32 md:w-56  md:h-56 md:mx-14 rounded-full border-4 border-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg overflow-hidden"
    animate={{
      y: [0, -10, 0], // Movimiento hacia arriba y abajo
    }}
    transition={{
      duration: 2, // Duración del ciclo completo
      repeat: Infinity, // Repetir indefinidamente
      ease: "easeInOut", // Movimiento suave
    }}
  >
    <img
      src={logo}
      alt="Logo migrations"
      className="w-full h-full object-cover "
    />
  </motion.div>
</picture>
    <h1 className=" text-2xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
    <p className={`text-xl max-w-lg drop-shadow ${subText}`}>{subtitle}</p>
    <Button type='button' onClick={()=> handleNavigation()} className={`bg-gradient-to-r h-12 text-lg ${isProtours ? 'bg-yellow-500' : 'bg-blue-800'}   hover:bg-gradient-to-l  transition duration-300 ease-in-out px-6 py-3 rounded-lg shadow-lg`}>
      {ctaText}
      </Button>
  </motion.div>
</section>
  )
}
