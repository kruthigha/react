import {Component} from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props){
    super(props);
    console.log('Parent constructor called');
  }
  componentDidMount(){
    console.log('Parent componentDidMount called');
  }

render(){

  console.log('Parent render called');
  return (
    <div>
      <h1>About Us</h1>
      <User name= {'Akshay'} location={"Dehradun"} gmail={'akshaymarch7@gmail.com'}/>
      <UserClass name= {'First '} location={"Dindigul class"}  gmail={'kiruthiganatrajan@gmail.com'}/>
      <UserContext.Consumer>
        {({name}) => <h1>{name}</h1>}
      </UserContext.Consumer>
      {/* <UserClass name= {'Second '} location={"Dindigul class"}  gmail={'kiruthiganatrajan@gmail.com'}/>
      <UserClass name= {'Third '} location={"Dindigul class"}  gmail={'kiruthiganatrajan@gmail.com'}/> */}
    </div>
  )
}
}

export default About
