import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Login} from "../components/login/Login"
import {DesBoard} from "./DesBoard"
import {Error404 } from "../pages/Error404"
 export const RouterIndex = () => {
   return (
     <>
      <Routes>
       <Route  path='/login' element={<Login/>}/>
       <Route path="/*" element={<DesBoard/>}/>
       <Route  path='*' element={<Error404/>}/>
     </Routes>
     </>
   )
 }
 
