import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";
const ThirdPage = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  return (
    <>
      <div>
        <TextField
          label="Education Level"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["education"]}
          onChange={(e) =>
            setUserData({ ...userData, education: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Employment Status"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["empstats"]}
          onChange={(e) =>
            setUserData({ ...userData, empstats: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Annual Income"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["annincome"]}
          onChange={(e) =>
            setUserData({ ...userData, annincome: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Martial Status"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["marstats"]}
          onChange={(e) =>
            setUserData({ ...userData, marstats: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => setCurrentStep(2)}
          color="secondary"
        >
          Back
        </Button>
        <span> </span>
        <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button>
      </div>
    </>
  );
};

export default ThirdPage;
