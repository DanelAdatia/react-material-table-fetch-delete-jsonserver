import axios from "axios";

export const FetchEmployeeDetails = async () => {
  let result = await axios.get("http://localhost:3000/EmployeeDetails");
  return result;
};

export const DeleteEmployeeDetails = async (id) => {
  let result = await axios.delete(
    `http://localhost:3000/EmployeeDetails/${id}`
  );
  return result;
};

export const UpdateEmployeeDetails = async (id) => {
  let result = await axios.put(`http://localhost:3000/EmployeeDetails/${id}`);
  return result;
};
