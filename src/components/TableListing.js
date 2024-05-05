import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import base_url from "../base_url";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function TableListing() {
  const navigate = useNavigate();
  console.log("Inside View");
  const [employee, setEmployee] = useState([]);
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`${base_url}/employees/delete/${id}`).then(
      (response) => {
        console.log("Removing employee ");
        const updateList = employee.filter((record) => record.key !== id);
        setEmployee(updateList);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleUpdate = (value) => {
    navigate("/update", { state: { value } });
  };

  useEffect(() => {
    console.log("Component mounting");
    axios.get(`${base_url}/employees`).then(
      (response) => {
        console.log(response.data);
        const employees = response.data.map((employee) => {
          return {
            key: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
          };
        });
        setEmployee(employees);
        console.log("Component de-mounting");
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (row) => (
        <button
          className="btn btn-primary"
          onClick={() => {
            handleUpdate(row);
          }}
        >
          Update
        </button>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      key: "operation",
      render: (index) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(index.key);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={employee} />
    </div>
  );
}

export default TableListing;
