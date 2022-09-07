
import './App.css';
import WarningSign from './cpmponent/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBadge from './cpmponent/MyBadge';
import SingleBook from './cpmponent/SingleBook';
import BookList from './cpmponent/BookList';


function App() {
  return (
    <div className="App">
      <WarningSign alert="this is warning for something"/>
      <MyBadge text="A Badge" color="danger"/>
      <BookList/>
    </div>
  );
}

export default App;
