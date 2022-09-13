import { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import arrayOfBooks from "../data/history.json";


const BookList = () => {

const [query, setQuery] = useState("")
// const [selected, setSelected] = useState(false)

  




    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text>search</InputGroup.Text>
          <FormControl
            placeholder="search for books"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>

        {arrayOfBooks
          .filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
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
                    
                    
                    
                  />
                </Col>
              </Row>
            );
          })}
      </Container>
    );
  
}

export default BookList;
