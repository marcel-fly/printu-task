import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LabelForm } from "./components/LabelForm";
import { ProjectItem } from "./components/ProjectItem";
import { ProjectState } from "./models/ProjectState";

import { State } from "./models/State";
import { init } from "./store/actions";

function App() {
  const projectState: ProjectState = useSelector(
    (state: State) => state.projectState
  );
  const dispatch = useDispatch();
  const isLoading = projectState.loading;
  const project = projectState.project;

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LabelForm />
      {projectState.error && (
        <div
          style={{
            alignSelf: "center",
            marginLeft: "50vw",
          }}
        >
          {" "}
          <p>{projectState.error}</p>
        </div>
      )}
      {isLoading ? (
        <p style={{ marginTop: "50vh" }}>Loading...</p>
      ) : (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${project?.width} ${project?.height}`}
          >
            {project?.items.map((item) => (
              <ProjectItem key={item.id} {...item} />
            ))}
          </svg>
        </div>
      )}
    </div>
  );
}

export default App;
