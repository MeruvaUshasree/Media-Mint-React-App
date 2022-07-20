import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

export default function CreateUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const postData = () => {
    axios.post(`http://localhost:3001/media-mint/create-user`, {
      id,
      name,
      email,
      gender,
      status,
    });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Id</label>
          <br />
          <input placeholder="Id" onChange={(e) => setId(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <br />
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <br />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Gender</label>
          <br />
          <input
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Status</label>
          <br />
          <input
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Field>
        <br />
        <Button onClick={postData} type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
}
