
import AddComment from "./AddComment";
import CommentList from "./CommentList";


const CommentArea = ({bookAsin}) => {



        return(
            <>
            <CommentList bookAsin={bookAsin}/>
            <AddComment bookAsin={bookAsin}/>
            </>
        )
    
}

export default CommentArea;