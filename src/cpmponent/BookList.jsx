import { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import arrayOfBooks from "../data/history.json";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    query: "",
    selected: false,
  };
  handelClick = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };


  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text>search</InputGroup.Text>
          <FormControl
            placeholder="search for books"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </InputGroup>

        {arrayOfBooks
          .filter((book) =>
            book.title.toLowerCase().includes(this.state.query.toLowerCase())
          )
          .map((book) => {
            return (
              <Row key={book.asin}>
                <Col md={6} className="my-3">
                  <SingleBook
                    objBook={{
                      asin: book.asin,
                      img: book.img,
                      title: book.title,
                    }} 
                    triger={this.handelClick}
                    handel={this.handelSelected}
                    
                  />
                </Col>
              </Row>
            );
          })}
      </Container>
    );
  }
}

export default BookList;
