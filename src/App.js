import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
//import { Button } from 'reactstrap';
import User from './components/user'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => <h1> Nothing Here </h1>;

class App extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      this.setState({
        users: res.data
      });
      console.log(res.data);
    });
  }
  render(){
    const {users} = this.state;
    return (
      <Router>
        <div className="App">
          <div className="Header">
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <ul>
              {
                users.map((user)=>(
                  <li key={user.id}>
                    <Link to={"/"+user.id}>{"user "+user.id}</Link>
                  </li>
                ))
              }
            </ul>
            
          </div>
          <div className="Body">
            {
              users.map((user)=>(
                <Route path={"/"+user.id+"/"} exact>
                  <User user={user}/>
                </Route>
              ))
            }
            <Route path="/" exact component={Home}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
