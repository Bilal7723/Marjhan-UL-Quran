import { React } from "react";
import { Col, Form, Row } from "react-bootstrap";

function Combo(props) {
  const genralstyle = { marginLeft: "2px" };
  const dropdown =
    props.tab === "Recitation" ||
    props.tab === "Translation" ||
    props.tab === "Search"
      ? props.stylesheet
      : genralstyle;
  return (
    <Form.Group as={Row} controlId="{`props.name`}">
      <Col lg={2} style={{ padding: `0px` }}>
        <Form.Label>{props.name}</Form.Label>
      </Col>
      <Col lg={10} style={{ padding: `0px` }}>
        <Form.Control as="select" size={props.size} style={dropdown}>
          <option>Tahir ul Qadri</option>
          <option>Ali Ameen</option>
          <option>Faizan Qadri</option>
          <option>Yousaf zai</option>
          <option>Abdul Hameed</option>
        </Form.Control>
      </Col>
    </Form.Group>
  );
}

export default Combo;
