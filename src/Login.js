import React, { useState ,useRef} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./App.module.css";
import Container from "react-bootstrap/esm/Container";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Nav from 'react-bootstrap/Nav'

function Login(props) {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div>
      <Form className="p-3">
        <h3 className="p-4">خوش‌ آمدید</h3>
        <Row className="mt-3">
          <Col>
            <Input
              type="email"
              style={{ width: "100%", color: "white" }}
              placeholder="پست الکترونیک"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Input
              style={{ width: "100%", color: "white" }}
              placeholder=""
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-right" style={{textAlign:"right"}}>
            <Nav.Link href="#" > فراموش کردید؟</Nav.Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="d-grid mt-5 ">
              <Button variant="success" size="lg">
                  ورود
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
