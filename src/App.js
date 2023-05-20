import "./App.css";
import FirstPage from "./Components/FirstPage/FirstPage";
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./Components/StepContext";
import { useContext } from "react";
import DisplayData from "./Components/DisplayData/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      default:
        return step;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="react-head">React Multi-Step Form</h1>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {displayStep(currentStep)}
        <br></br>
        {finalData.length > 0 ? <DisplayData /> : null}
      </header>
    </div>
  );
}

export default App;
