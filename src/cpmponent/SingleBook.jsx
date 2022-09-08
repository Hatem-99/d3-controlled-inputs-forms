import { Component } from "react";

import { Card } from "react-bootstrap";



class SingleBook extends Component {
  state = {
    selected: false,
  };

  handelClick = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };
  fetchingComments =() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA4Y2M5Yzc1ZDZhMzAwMTU3YmE5YjYiLCJpYXQiOjE2NjI2Mzk2NjYsImV4cCI6MTY2Mzg0OTI2Nn0.ithnrGllOvKip6uRr9vtQjAzJeqsx7q05But59ZXwWI",
      },
    })
    .then(data => data.json() )
    .then(data => console.log(data))
  };

  componentDidMount = () => {
    this.fetchingComments();
    console.log("happend")
  }



  render() {
    return (
      <Card
        className={this.state.selected ? "select" : ""}
        style={{ width: "18rem", height: "400px" }}
        onClick={() => {
          this.handelClick();
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
          {this.state.selected ? (
            <Card.Text>
              Comments: {} <br />
              Rating: {}
            </Card.Text>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
