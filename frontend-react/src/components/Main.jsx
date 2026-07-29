import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
   
    <div className='container'>
        <div className="text-center p-5 bg-light-dark rounded">
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reiciendis itaque? Eum quia sit ad quo, voluptatem culpa consequatur libero, qui alias est, quod odio sint nobis! Cum, quis voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum eaque vel cupiditate maiores, nam ab id quo provident cumque enim deleniti numquam dicta vero molestias quaerat! Laudantium, nihil quae?</p>
            <Button text='Login' class='btn-info'/>
        </div>

    </div>
    
    </>
  )
}

export default Main