import React, { useEffect, useState } from 'react';

const Foodcard = () => {
  const [food, setFood] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
      fetch('https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json').then((res) => res.json()).then((data) => setFood(data))
    }, [])
  
    const  onChange = (e) => {
      setSearchTerm(e.target.value)
  }
    const  onSubmit = (e) => {
     e.preventDefault()
  
  }
  
    return (
      <div>
  
        <form onSubmit={onSubmit} className='form'>
          <label >Search For Your Favourite Food</label>
          <input className='input-search' onChange={onChange} type='text' placeholder='UK, Fish, Pizza ...'/>
        </form>
      <div className="App">
          {food.map((item) => {
            if(searchTerm){
             if(item.name.includes(searchTerm) || item.origin.includes(searchTerm)) {
              return (
                <li key={item.id} className='box'>
                <p>Food Name: {item.name}</p>
               <p>Place Of Origin: {item.origin}</p>
               <p>Star Rating: {item.starRating} ⭐️</p>
               <img className='image' src={item.image}/>
            </li> )
             }  
               
            }  else if(!searchTerm) {
            return <li key={item.id} className='box'>
                <p>Food Name: {item.name}</p>
               <p>Place Of Origin: {item.origin}</p>
               <p>Star Rating: {item.starRating} ⭐️</p>
               <img className='image' src={item.image}/>
            </li>
  
            }
              
          })}
      </div>
  
      </div>
    );
}

export default Foodcard;



