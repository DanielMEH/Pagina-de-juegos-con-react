import { Home } from '../pages/Home';

import {  Route, Routes} from "react-router-dom"
import { Accion } from '../components/sections/Accion';
import { Estrategia } from '../components/sections/Estrategia';
import { Casual } from '../components/sections/Casual';
import { Popular } from '../components/sections/Popular';
import {GamaerPublic} from "../components/resultPublic/GamaerPublic"
import { Search } from '../components/Search';
import { Header } from '../components/Header';
import {Error404 } from "../pages/Error404"

import React from 'react'

export const DesBoard = () => {
  return (
    <div>
        <Header/>
        <Routes>
        <Route  path='/' element={<Home/>}>
         <Route path="/popular" element={<Popular/>}/>
         <Route path="/accion" element={<Accion/>}/>
         <Route path="/estrategia" element={<Estrategia/>}/>
         <Route path="/casual" element={<Casual/>}/>
       </Route>
         <Route path="game/:idgame" element={<GamaerPublic/>}/>
         <Route path="/search" element={<Search/>}/>
         <Route  path='*' element={<Error404/>}/>
       
        </Routes>

    </div>
  )
}
