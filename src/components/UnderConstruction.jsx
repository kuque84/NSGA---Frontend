import React from 'react'
//importo imagen en construccion
import imgUnderConstruction from '../img/underConstruction.jpg'

const UnderConstruction = () => {
  return (
    <div className='w-full h-auto relative my-1 mx-4'>
    <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <div className="text-center space-y-4 p-10">
        <img src={imgUnderConstruction} alt="" className='rounded-3xl h-80 mx-auto' />
        <h1 className="text-4xl font-bold text-primary">¡En Construcción!</h1>
        <p className="text-gray-600 text-lg">
          Esta página aún no está disponible. Estamos trabajando para traerle nuevas funcionalidades. ¡Vuelva pronto!
        </p>
      </div>
    </div>
    </div>
  )
}

export default UnderConstruction