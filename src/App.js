import React from 'react'
import './style.css'
import Calendar from './class-components';
import { Header,Content,Footer } from './func-components';

function App(){
  return (
    <>
    <Header/><Content/><Footer/>
    <h2>DeveloperChina.com</h2>
    <div className='title'>React & React Native</div>
    <p><center><Calendar/></center></p>
    </>
  )
}
export default App;
 