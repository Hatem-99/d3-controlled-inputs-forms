import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";


class CommentArea extends Component{


    render(){

        return(
            <>
            <CommentList bookAsin={this.props.bookAsin}/>
            <AddComment bookAsin={this.props.bookAsin}/>
            </>
        )
    }
}

export default CommentArea;