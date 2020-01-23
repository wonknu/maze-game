import React from "react";
import { useHistory } from "react-router-dom";

const Settings: React.FC = () => {
  let history = useHistory();
  return (
    <>
      <h2>Settings:</h2>
      <br/>
      <button onClick={history.goBack}>Go Back</button>
    </>
  )
};

export default Settings;