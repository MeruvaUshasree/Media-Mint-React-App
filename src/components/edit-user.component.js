import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

export default function EditUser() {
  const [id, setId] = useState(" ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [updated_at, setUpdatedAt] = useState(new Date());
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setGender(localStorage.getItem("gender"));
    setStatus(localStorage.getItem("status"));
    setUpdatedAt(localStorage.getItem("updated_at"));
  }, []);
  const updateAPIData = () => {
    axios.patch(`http://localhost:3001/media-mint/update-user/${id}`, {
      name,
      email,
      gender,
      status,
      updated_at,
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Id</label>
          <br />
          <input
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <br />
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <br />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Gender</label>
          <br />
          <input
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Status</label>
          <br />
          <input
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Updated Date</label>
          <br />
          <input
            type="date"
            placeholder="Updated Date"
            value={updated_at}
            onChange={(e) => setUpdatedAt(e.target.value)}
          />
        </Form.Field>
        <br />
        <Button onClick={updateAPIData} type="submit">
          Edit User
        </Button>
      </Form>
    </div>
  );
}
