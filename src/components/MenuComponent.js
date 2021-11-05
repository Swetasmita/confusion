import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

 //we are implementing functional component from class component
 //passing two parameters dish item and onclick   
  //One way of implementign functional component

function RenderMenuItem({dish, onClick}){
   return(
            <Card onClick={() => onClick(dish.id)}>                      
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
              </Card>
        );
    }
 //Another way of implementing functional component
  const Menu = (props) =>{
       //using props to map the array
    const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">         
           <RenderMenuItem dish={dish} onClick={props.onClick} />
         </div>
        )
    });
    return (
        <div clasName="container">
            <div className="row">
                {menu}                
            </div> 
            <div className="row">       
         </div>             
        </div>
    );

  }


   

export default Menu;
