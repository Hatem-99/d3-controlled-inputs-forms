
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { Component } from 'react';
import BookList from './cpmponent/BookList';
import NavBar from './cpmponent/NavBar';
import Jumbotrone from './cpmponent/Jumbotrone';


class App extends Component {

  state = {
    selected: false,
  }

  render(){
  return (
    <div className="App">
      <NavBar/>
      <Jumbotrone/>
      <BookList/>
    </div>
  )}
}

export default App;
