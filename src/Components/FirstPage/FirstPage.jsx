import React from "react";
import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";
const FirstPage = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["lasttname"]}
          onChange={(e) =>
            setUserData({ ...userData, lasttname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Email Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["email"]}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          type="password"
          color="secondary"
          value={userData["password"]}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => setCurrentStep(2)}
          color="primary"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default FirstPage;
