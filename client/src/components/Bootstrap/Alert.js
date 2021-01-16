import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Notifi = (props) => {
    const [show, setShow] = useState(true);

    setTimeout(setShow, 5000, false)

    return (
        <div>
            <Alert variant='danger' show={show}>
                {props.err}
            </Alert>
        </div>
    )
}

export default Notifi;