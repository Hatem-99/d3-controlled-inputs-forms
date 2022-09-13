import { useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ bookAsin }) => {
  const [commentObj, setCommentObj] = useState({
    rate: "",
    comment: "",
  });
  const fetchingData = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`, {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA4Y2M5Yzc1ZDZhMzAwMTU3YmE5YjYiLCJpYXQiOjE2NjI2Mzk2NjYsImV4cCI6MTY2Mzg0OTI2Nn0.ithnrGllOvKip6uRr9vtQjAzJeqsx7q05But59ZXwWI",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  };

 useEffect(() => {
  fetchingData()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])

 useEffect(() => {
  fetchingData()
 })

  return (
    <Form>
      <Form.Group>
        <Form.Label>Rate the book</Form.Label>
        <Form.Control
          value={commentObj.rate}
          onChange={(e) => setCommentObj(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter a Comment</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Write your comment here"
          value={commentObj.comment}
          onChange={(e) => setCommentObj(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
