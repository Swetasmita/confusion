import React,{Component} from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {DISHES} from '../shared/dishes';
import{Switch, Route, Redirect} from 'react-router-dom';


//Main componet acts as a container in the application
//The main component is responsible for everything related to the state of the application
class Main extends Component {

  constructor(props) {
  super(props);
  // this dishes object will be passed child component "Menu"
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    
    };
  }

  
  render() {
  const Homepage = () =>{
    return(
      <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
      promotion ={this.state.promotions.filter((promo) =>promo.featured)[0]}
     leader ={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
  );
  }
    return (
      <div>    
       <Header/>  
       <Switch>
         <Route path="/home" component ={Homepage} />
         <Route exact path='/contactus' component={Contact} /> 
         <Route exact path ="/menu" component = {() => <Menu dishes = {this.state.dishes}/> }>
          <Redirect to="/home" />
        </Route>
       </Switch>   
       <Footer/>
      </div>
    );
  }
}

export default Main;
