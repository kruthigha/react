import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            userInfo : {}
        }
        console.log(this.props.name +'Child constructor called');
    }
    async componentDidMount(){
        console.log(this.props.name +'Child componentDidMount called');
        const data = await fetch('https://api.github.com/users/kirkn');
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        this.timer = setInterval(()=>{
            console.log('setInterval Called')
        },1000);
          
    }
    componentDidUpdate(){
        console.log(this.props.name +'Child componentDidUpdate called');
    }
    componentWillUnmount(){
        console.log(this.props.name +'Child componentWillUnmount called'); 
        clearInterval(this.timer); // clear the timer when the component unmounts otherwise it will be a mess
        //always rememeber to clean the created mess 
    }
    
    render(){
        console.log(this.props.name +'Child render called');
        // const {avatar_url,login} = this.state.userInfo
        // const {name,location,gmail} = this.props;
        const { userInfo } = this.state;
        const { login, avatar_url, name, location } = userInfo || {};
 
        return (
    <div className='user-card'>
        <img src={'https://media.licdn.com/dms/image/v2/D5635AQFM33jJRrtNMQ/profile-framedphoto-shrink_800_800/B56ZvWODWYJEAg-/0/1768825566951?e=1771855200&v=beta&t=ts3iGuqvK3jLm6rRYnmWhnW6xJ66HQf1szSBxL2G2U4'}/>
        <h1>Name : {login}</h1>
        <h2>Location : {location}</h2>
        <h2>Connect :  </h2>
        {/* <h3>count1:{count1}</h3>
        <h3>count2 : {count2}</h3>
        <button onClick={()=>{
            //NEVER UPDATE STATE VARIABLE DIRECTLY

            this.setState((t)=>{
                return {
                    count1: t.count1+1,
                    count2: t.count2+2
                }
            })
        }}>Increase</button> */}
        {/* <User1  name= {'Second '} location={"Dindigul class"}  gmail={'kiruthiganatrajan@gmail.com'}/> */}
    </div>

  )
        
    }
}
// class User1 extends React.Component {
//     constructor(props){
//         super(props);
        
//         this.state = {
//             count1 : 0,
//             count2 : 0
//         }
//         console.log(this.props.name +'Child constructor called');
//     }
//     componentDidMount(){
//         console.log(this.props.name +'Child componentDidMount called');
//     }
    
//     render(){
//         console.log(this.props.name +'Child render called');
//         const {name,location,gmail} = this.props;
//         const {count1,count2} = this.state;
//         return (
//     <div className='user-card'>
//         <h1>Name : {name}</h1>
//         <h2>Location : {location}</h2>
//         <h2>Connect : {gmail} </h2>
//         <h3>count1:{count1}</h3>
//         <h3>count2 : {count2}</h3>
//         <button onClick={()=>{
//             //NEVER UPDATE STATE VARIABLE DIRECTLY

//             this.setState((t)=>{
//                 return {
//                     count1: t.count1+1,
//                     count2: t.count2+2
//                 }
//             })
//         }}>Increase</button>
//     </div>
//   )
        
//     }
// }

export default UserClass