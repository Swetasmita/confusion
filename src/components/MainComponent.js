import React,{Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';

//Main componet acts as a container in the application
//The main component is responsible for everything related to the state of the application
class Main extends Component {

  constructor(props) {
  super(props);
  // this dishes object will be passed child component "Menu"
    this.state = {
      dishes: DISHES,
      selectedDish: null,

    };
  }
   //user select the dish to the current dish
   onDishSelect(dishId){
    this.setState({selectedDish: dishId});
  
}
  
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristorante con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)}/>      
        <Dishdetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}
export default Main;
