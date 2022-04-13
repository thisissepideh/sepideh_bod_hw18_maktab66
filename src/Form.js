import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Form(props) {
  const [islogin, setIslogin] = useState(true);

  return (
    <div className={styles.container}>
      <Row className="mx-0 p-3">
        <Col>
          <div className="d-grid">
            <Button
              as={Col}
              size="lg"
              onClick={() => {
                setIslogin(true);
              }}
              variant={islogin ? "success" : "secondary"}
            >
              ورود
            </Button>
          </div>
        </Col>
        <Col>
        <div className="d-grid">
        <Button
            as={Col}
            size="lg"
            onClick={() => {
              setIslogin(false);
            }}
            variant={islogin ? "secondary" : "success"}
          >
            ثبت نام
          </Button>
        </div>
          
        </Col>
      </Row>

      {islogin ? <Login /> : <Register />}
    </div>
  );
}

export default Form;
