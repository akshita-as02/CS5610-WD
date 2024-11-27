import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 2,
    title: "NodeJS Module",
    description: "How to create a NodeJS server with ExpressJS",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      {/* Modifying Assignment Properties */}
      <h4>Modifying Assignment Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <br />
      <input
        type="number"
        className="form-control w-50"
        id="wd-assignment-score"
        placeholder="Update Score"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary mt-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <br />
      <br/>
      <label>
        <input
          type="checkbox"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary mt-2 ms-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <hr />

      <h4>Retrieving Assignment</h4>
      <a
        id="wd-retrieve-assignment"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Modifying Module Properties</h4>
      <a
        id="wd-update-module-title"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/title/${module.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-module-title"
        defaultValue={module.title}
        onChange={(e) => setModule({ ...module, title: e.target.value })}
      />
      <br />
      <a
        id="wd-update-module-description"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75 mt-2"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <hr />

      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
    </div>
  );
}
