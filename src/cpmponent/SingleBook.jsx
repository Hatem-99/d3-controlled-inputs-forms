import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({triger, objBook}) =>  {

const [selected, setSelected]= useState(false)


const handelClick = () => {
  if (selected === false) {
    setSelected(true);
  } else {
    setSelected(false);;
  }
};
    return (
      <>
        <Card
          style={{ width: "30rem", height: "30rem" }}
          onClick={() => {
            handelClick();
          }}
        >
          <Card.Img
            variant="top"
            height={400}
            width={200}
            src={objBook.img}
          />
          <Card.Body>
            <Card.Title>{objBook.title}</Card.Title>
          </Card.Body>
        </Card>
        {selected &&
          <Col md={6}>
            <CommentArea bookAsin={objBook.asin}/>
          </Col>
        }
      </>
    );
  
}

export default SingleBook;
