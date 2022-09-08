import { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import arrayOfBooks from "../data/history.json";
class BookList extends Component {
  render() {
    
    return (
      <Container>
        <InputGroup className="mb-3">
            <InputGroup.Text>search</InputGroup.Text>
          <FormControl placeholder="search for books" 
          />
        </InputGroup>
        <Row className="">
          {arrayOfBooks.map((book) => {
            return (
              <Col key={book.asin} className="my-3">
              <SingleBook
                
                objBook={{ img: book.img, title: book.title }}
              /></Col>
    
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
