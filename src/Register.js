import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";

function Register(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      state: "آذربايجان شرقي",
      city: "آذر شهر",
      education: "",
      university: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("@@@@@@@");
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
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
      <Form className="p-2" onSubmit={formik.handleSubmit}>
        <h3 className="p-3">رایگان ثبت‌ نام کنید</h3>
        <Row>
          <Col>
            <Form.Control
              placeholder="نام"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="نام خانوادگی"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Select
              onChange={(e) => {
                formik.handleChange(e);
                setCity(cityElement.current.value);
              }}
              ref={cityElement}
              name="state"
              value={formik.values.state}
            >
              <option disabled>استان</option>

              {Object.entries(cities).map(([key, value]) => (
                <option value={key}>{key}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
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
              onChange={(e) => {
                formik.handleChange(e);
                setEdu(education.current.value);
              }}
              name="education"
              value={formik.values.education}
            />
          </Col>

          {edu != "" && (
            <Col>
              <Form.Control
                placeholder="محل تحصیل"
                name="university"
                onChange={formik.handleChange}
                value={formik.values.university}
              />
            </Col>
          )}
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control
              type="email"
              dir="auto"
              placeholder="پست الکترونیک"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}

            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="رمز عبور"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
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
