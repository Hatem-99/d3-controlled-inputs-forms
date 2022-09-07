import Badge from 'react-bootstrap/Badge';

const MyBadge = ({text, color}) => {

    return (
        <Badge pill variant={color}>
        {text}
      </Badge>
    )
}

export default MyBadge;