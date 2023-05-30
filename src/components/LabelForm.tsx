import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProject, init } from "../store/actions";

export const LabelForm = () => {
  const [projectID, setProjectID] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(projectID);
    dispatch(projectID ? fetchProject(projectID) : init());
    setProjectID("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        minWidth: 280,
        width: "100vw",
        position: "absolute",
        zIndex: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="labelInput">Project ID: </label>
        <input
          type="text"
          id="labelInput"
          value={projectID}
          onChange={handleChange}
          placeholder={"For random leave empty"}
        />
        <button type="submit">Fetch</button>
      </form>
    </div>
  );
};
