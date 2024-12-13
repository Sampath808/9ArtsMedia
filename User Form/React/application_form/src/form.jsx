import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registerUser } from "./state/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./state/userSlice";
import "./styleForm.css";

const form = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const intialFormData = {
    name: "",
    email: "",
    phoneNo: "",
    designation: "",
    date: "",
  };
  const [formData, setFormData] = useState(intialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    if (status == "success") {
      console.log(status);
      setFormData(intialFormData);
    } else {
      console.log(status);
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit} className="colorful-form">
        <div className="form-title">Contact Us Form</div>
        <Form.Group className="form-row">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-data"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNo"
            placeholder="Enter Phone Number"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control
            type="text"
            name="date"
            placeholder="Use 00-00-0000 format"
            value={formData.doj}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default form;
