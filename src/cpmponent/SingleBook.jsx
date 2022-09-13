import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          className={this.state.selected ? "select" : ""}
          style={{ width: "30rem", height: "30rem" }}
          onClick={() => {
            this.props.triger();
          }}
        >
          <Card.Img
            variant="top"
            height={400}
            width={200}
            src={this.props.objBook.img}
          />
          <Card.Body>
            <Card.Title>{this.props.objBook.title}</Card.Title>
          </Card.Body>
        </Card>
        {
          <Col md={6}>
            <CommentArea />
          </Col>
        }
      </>
    );
  }
}

export default SingleBook;
