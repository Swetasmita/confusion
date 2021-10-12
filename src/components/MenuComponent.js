import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



class Menu extends Component{

    constructor(props) {
        super(props);

        //state stores the properties related to this component
        this.state = {
              selectedDish: null      
        }
        console.log("Menu Component Constructor is invoked")
    }
 componentDidMount(){
 console.log("componentDidMount is invoked")
    }
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
renderDish(dish){

    if(dish != null){
        return(
            <Card>
                   <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
             </CardBody>
            </Card>

        );
    }
    else{
        return(
            <div></div>            
        );
    }
}
render() {
    const menu = this.props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-5">
            <Card key={dish.id}
              onClick={() => this.onDishSelect(dish)}>

              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });
    console.log("Menu Component render is invoked")

        return (
            <div clasName="container">
                <div classname="row">
                    {menu}                
                </div>
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                </div>
            </div>
        );
    }

}
export default Menu;