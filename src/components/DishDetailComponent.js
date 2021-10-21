import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

  constructor(props) {
    super(props);
  }
  //We passed an array called 'dish'
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
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
  renderComments(array) {
    if (array != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {array.map(comment => (
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
  render() {
    let dish;
  
    if (this.props.selectedDish) {
      dish = (
        <div class="Container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>

          {this.renderComments(this.props.selectedDish.comments)}

        </div>
        </div>
      )
    } else {
      dish = <div></div>
    }
    return (
      <div className="container">
        {dish}
      </div>
    );
  }
}

export default Dishdetail;
