import MaterialTable from "material-table";
import React, { Fragment, useEffect, useState } from "react";
import {
  DeleteEmployeeDetails,
  FetchEmployeeDetails,
  UpdateEmployeeDetails,
} from "../api/api";

const HomePage = () => {
  const [details, setDetails] = useState([]);

  const FetchDetails = async () => {
    try {
      const response = await FetchEmployeeDetails();
      setDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleDelete = async (id) => {
    await DeleteEmployeeDetails(id);
  };

  const UpdateDetails = async (id) => {
    await UpdateEmployeeDetails(id);
  };

  useEffect(() => {
    FetchDetails();
  }, [details]);

  return (
    <Fragment>
      <MaterialTable
        columns={[
          { title: "Employee ID", field: "id", editable: true },
          { title: "Employee Name", field: "name" },
          { title: "Employee Address", field: "address" },
          { title: "Phone Number", field: "phone" },
          { title: "Designation", field: "designation" },
        ]}
        data={details}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) => HandleDelete(rowData.id),
          },
          {
            icon: "update",
            tooltip: "Update User",
            onClick: (event, rowData) => UpdateDetails(rowData.id),
          },
        ]}
        title="Employee Details"
        options={{
          search: true,
          toolbar: true,
        }}
      />
    </Fragment>
  );
};

export default HomePage;
