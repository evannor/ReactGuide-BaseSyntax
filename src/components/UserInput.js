import React from "react";

const UserInput = (props) => {
  const style = {
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h3>Please enter the third user's name: </h3>
      <input type="text" onChange={props.change} value={props.currentName} />
    </div>
  );
};

export default UserInput;
