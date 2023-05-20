import React from "react";
import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";
const SecondPage = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="date"
          style={{ width: "220px" }}
          value={userData["date"]}
          onChange={(e) => setUserData({ ...userData, date: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Gender"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["gender"]}
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Phone Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["pnum"]}
          onChange={(e) => setUserData({ ...userData, pnum: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["address"]}
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => setCurrentStep(1)}
          color="secondary"
        >
          Back
        </Button>
        <span> </span>
        <Button
          variant="contained"
          onClick={() => setCurrentStep(3)}
          color="primary"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default SecondPage;
