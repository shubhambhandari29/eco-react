import {Routes,Route} from 'react-router';
import './App.css'
import { HomePage } from './pages/HomePage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/checkout" element={<div> checkout page </div>}/>
    </Routes>
  )}

export default App
