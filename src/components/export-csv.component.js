import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
export default function ConvertToCsv() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/media-mint`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const headers = [
    { label: "Id", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Gender", key: "gender" },
    { label: "Status", key: "status" },
    { label: "Created Date", key: "created_at" },
    { label: "Updated Date", key: "updated_at" },
  ];

  const csvReport = {
    filename: "UserData",
    headers: headers,
    data: APIData,
  };
  return (
    <div>
      <button>
        <CSVLink {...csvReport} className="csv-link">
          Get CSV File
        </CSVLink>
      </button>
    </div>
  );
}
