import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import fotoPersonal from "../assets/foto.jpg"
import Footer from '../components/Footer'

const Home = () => {

let Alumno ={
    nombre:"juan Marcelo",
    apellido:"Medina",
    lenguajes:["javascript ,","C#," ,"HTML,","CSS" ],
    mascotas:{
        nombre: "tina",
        raza : "caniche",
        edad : 4
    },
    imagen: fotoPersonal
}

  return (
    <div>
      <Header/>
      <Main Alumno={Alumno}/>
      <Footer/>
    </div>
  )
}

export default Home
