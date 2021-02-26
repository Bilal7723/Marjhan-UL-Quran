import React from 'react';
import { Alert } from "react-bootstrap";

function alertBox(props) {
    return (
        <>
            <Alert className="myAlert-bottom" variant="success">
            <p>
            Warning!! {props.Data.error}
            </p>
            </Alert>
        </>
    )
}

export default  alertBox;