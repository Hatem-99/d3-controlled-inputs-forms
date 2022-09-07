import { Component } from "react";

import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        className={this.state.selected ? "select" : ""}
        style={{ width: "18rem", height: "400px" }}
        onClick={() => {
          this.setState({ selected: true });
        }}
      >
        <Card.Img
          variant="top"
          height={200}
          width={200}
          src={this.props.objBook.img}
        />
        <Card.Body>
          <Card.Title>{this.props.objBook.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
