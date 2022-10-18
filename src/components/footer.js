import React from 'react'
import linkImg from './assets/images/linkin.png';
import gitImg from './assets/images/github.png'

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
  footer:{
    
  }
};

export default function footer() {
  return (
    <footer className = "row bg-dark text-light text-center m-2">
        <div className = "col"> 
        <h3 ><a href="tel:+13034752882">Phone : 303-475-2882</a></h3>  
        <h3 ><a href="mailto: raymond.ed.lewis@gmail.com">Email : raymond.ed.lewis@gmail.com</a></h3>
        <a href="https://www.linkedin.com/in/raymond-lewis-51719325/" target="_blank"><img src={linkImg} style={{ width: 70, height: 50 }} /></a>
        <a href="https://github.com/l1keafox" target="_blank"><img src={gitImg} style={{ width: 70, height: 50 }} /></a>
        </div>
    </footer>
  )
}
