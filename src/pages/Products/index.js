import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Tables from './Tables';
export default function index() {
  return (
<>
 <Routes>
    <Route path='/table' element={<Tables />} />
 </Routes>
</>
  )
}
