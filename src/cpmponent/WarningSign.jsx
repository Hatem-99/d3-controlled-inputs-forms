
import Alert from 'react-bootstrap/Alert';

const WarningSign = (props) => {
return(
    <Alert  variant='danger'>
          {props.alert}
        </Alert>
)
}

export default WarningSign;