import React from 'react'
import {Routes,Route} from "react-router-dom"
import StartPage from '../components/StartPage'
import QuestionPage from '../components/QuestionPage'
import FinalPage from '../components/FinalPage'

function Rooter() {
  return (
    <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/questionpage" element={<QuestionPage/>} />
        <Route path="/finalpage" element={<FinalPage/>} />
    </Routes>
  )
}

export default Rooter