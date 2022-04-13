import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import React, { useState, useRef, useEffect } from "react";

import ReactDOM from "react-dom";

function Register(props) {
  const education = useRef("");
  const cityElement = useRef("");
  const [cities, setCities] = useState([]);
  const [edu, setEdu] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch("./iranstates.json")
      .then((res) => res.json())
      .then((res) => {
        setCities(res);
      });
  });

  return (
    <div dir="rtl">
      <Form className="p-2">
        <h3 className="p-3">رایگان ثبت‌ نام کنید</h3>
        <Row>
          <Col>
            <Form.Control placeholder="نام" />
          </Col>
          <Col>
            <Form.Control placeholder="نام خانوادگی" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Select
              onChange={() => {
                setCity(cityElement.current.value);
              }}
              ref={cityElement}
            >
              <option disabled>استان</option>

              {Object.entries(cities).map(([key, value]) => (
                <option value={key}>{key}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option disabled>شهر</option>
              {city != "" &&
                Object.entries(cities[city]).map(([key, value]) => (
                  <option value={value}>{value}</option>
                ))}
            </Form.Select>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control
              placeholder="تحصیلات"
              ref={education}
              onChange={() => {
                setEdu(education.current.value);
              }}
            />
          </Col>

          {edu != "" && (
            <Col>
              <Form.Control placeholder="محل تحصیل" />
            </Col>
          )}
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control type="email" dir="auto" placeholder="پست الکترونیک" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control type="password" placeholder="رمز عبور" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <div className="d-grid mt-5">
              <Button variant="success" size="lg">
                  ثبت‌ نام
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
