import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "moment";
export default function ListUser() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/media-mint`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  console.log("APIData:", APIData);
  const setData = (data) => {
    let { id, name, email, gender, status, updated_at } = data;
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Status", status);
    localStorage.setItem("Updated Date", updated_at);
  };
  return (
    <div>
      <Link to="/csv">
        <div>
          <Button> Export to CSV</Button>
        </div>
      </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Updated Date</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.gender}</Table.Cell>
                <Table.Cell>{data.status}</Table.Cell>
                <Table.Cell>
                  {Moment(data.created_at).format("DD-MM-YYYY")}
                </Table.Cell>
                <Table.Cell>
                  {Moment(data.updated_at).format("DD-MM-YYYY")}
                </Table.Cell>
                <Link to="/edit">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Edit</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
