import { Component } from "react";
import {Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import arrayOfBooks from "../data/history.json";
class BookList extends Component {

  
  render() {
    
    return (
      <Container>

        <Row  className="justify-content-around">

            {arrayOfBooks.map((book, index) => {
                
              return <SingleBook key={index} objBook={{img:book.img, title:book.title}} />;
            })}
        
        </Row>
      </Container>
    );
  }
}

export default BookList;
