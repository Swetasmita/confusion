import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

  //We passed an array called 'dish'
 function  RenderDish({dish}) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return <div></div>;
    }
  }
  //we pass a parameter called 'array'
  function RenderComments({comments}) {
    if (comments!= null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map(comment => (
            <ul className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>-- {comment.author} ,
                {new Intl.DateTimeFormat('en-Us',
                {year:'numeric', month:'short',day:'2-digit'}).format(new Date (Date.parse(comment.date)))}</p>
              </li>
            </ul>
          )
          )}
        </div>
      );
    }
    else {
      return <div></div>
    }
  }

  //the function render selected dish and displays below
  // This function renders the selectedDish and displays comments below
  const Dishdetail = (props) => {
  let dish;
  if(props.dish != null)
    {
    return (
        <div className="container">
          <div className="row">
               <div className="col-12 col-md-5 m-1">       
                  <RenderDish dish={props.dish}/>                      
               </div>
            
               <div className="col-12 col-md-5 m-1">               
                    <RenderComments comments={props.dish.comments}/>
               </div>           
          </div>
        </div> 
    );
  }
  else
  {
    return <div></div>
  }

}


export default Dishdetail;
