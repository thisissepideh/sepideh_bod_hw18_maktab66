import React, { useState, useRef, useEffect, useContext } from "react";
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
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import user from "./component/authContext";
import { Formik } from 'formik';

function Login(props) {

  const { userLogin, setUserLogin } = useContext(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/users`).then((res) => {
      const persons = res.data;

      setUsers(persons);
      //console.log(users)
      //this.setState({ persons });
    });
  }, []);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const CheckLogin = () => {
    const isFindUser = users.find((user) => {
      return user.email == email && user.password == password;
    });
    if (isFindUser) {
     
      setUserLogin(isFindUser)
      //console.log(userLogin)
    }
  };
  return (
    <div>
      <Form className="p-3" >
        <h3 className="p-4">خوش‌ آمدید</h3>
        <Row className="mt-3">
          <Col>
            <Input
              type="email"
              style={{ width: "100%", color: "white" }}
              placeholder="پست الکترونیک"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              name="password"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-right" style={{ textAlign: "right" }}>
            <Nav.Link href="#"> فراموش کردید؟</Nav.Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="d-grid mt-5 ">
              <Button variant="success" size="lg" onClick={()=>CheckLogin()}>
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
