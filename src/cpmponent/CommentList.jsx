import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

class CommentList extends Component{
state ={
  comments: [],
}


fetchingComments =() => {
  fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA4Y2M5Yzc1ZDZhMzAwMTU3YmE5YjYiLCJpYXQiOjE2NjI2Mzk2NjYsImV4cCI6MTY2Mzg0OTI2Nn0.ithnrGllOvKip6uRr9vtQjAzJeqsx7q05But59ZXwWI",
    },
  }).then(data => data.json())
  .then(data => { 
   
    this.setState({comments: data})})
}

componentDidMount = () => {
  // this.fetchingComments();
}


    render(){
        return( <>
          {this.state.comments.map((comment, index) => {return(
            
            <ListGroup key={`comment-${index}`} >
            <ListGroup.Item >{comment.comment}</ListGroup.Item> 
            <ListGroup.Item >{comment.rate}</ListGroup.Item> 
            </ListGroup>
           
          ) }) || <Skeleton height={100} count={4}/>}
        
        </>)
    }
}




export default CommentList