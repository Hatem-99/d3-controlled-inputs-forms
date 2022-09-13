import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comments: {
      rate: "",
      comment: "",
    },
  };

  fetchingData = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        method: "POST",
        body: JSON.stringify(
          this.state.comments.rate,
          this.state.comments.comment
        ),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA4Y2M5Yzc1ZDZhMzAwMTU3YmE5YjYiLCJpYXQiOjE2NjI2Mzk2NjYsImV4cCI6MTY2Mzg0OTI2Nn0.ithnrGllOvKip6uRr9vtQjAzJeqsx7q05But59ZXwWI",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter a Comment</Form.Label>
          <Form.Control type="Text" placeholder="Write your comment here" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
