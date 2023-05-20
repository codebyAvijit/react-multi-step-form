import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@mui/material";
import { multiStepContext } from "../StepContext";
const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
          aria-label="caption table"
        >
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "red",
                color: "white",
                fontSize: "20px",
              }}
            >
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Educational Level</TableCell>
              <TableCell>Employment Status</TableCell>
              <TableCell>Annual Income</TableCell>
              <TableCell>Martial Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lasttname}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.pnum}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.education}</TableCell>
                <TableCell>{data.empstats}</TableCell>
                <TableCell>{data.annincome}</TableCell>
                <TableCell>{data.marstats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayData;
