import React, { useEffect, useState } from 'react'
import Productcard from '../Carditem/Craditem';
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../Reducers/Slice';

function CardDetails() {

  const [item ,setitem]= useState(Productcard);
  

  useEffect(()=>{
    setitem(item);


    console.log(item);
  },[])

  const dispact = useDispatch();
  // const cards = useSelector(state => state.Card.cardItem)
  


  
  
  function handleaddtoromve(id){
  dispact(removeCard(id))



  // setitem(item.filter(item => item.id !==id));


  }





  return (
    <>
       <div className=" grid grid-cols-3 px-10 gap-6 mt-5">



          {item.map((element) => {
            return (
              <div className="product-card " key={element.id}>
                
                <div className="product-card-text  border-solid border-2 border-black shadow-lg  p-5">
                <i className="fa-solid fa-xmark relative left-24 mx-64 text-red-700" onClick={handleaddtoromve(element.id)}>
                  {
                    console.log(element.id)
                  }
                  
                </i>
              
                   
                    <img
                      src={element.image}
                      className=" aspect-video object-contain h-98 w-full mt-3"
                      alt=""
                    />
            
                  <p className=" text-lg text-center py-5">{element.title}</p>
              
                </div>
              </div>
            );
          })}
        </div>

      </>

 
  )
}

export default CardDetails
