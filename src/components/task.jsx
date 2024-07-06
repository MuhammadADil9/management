import { useState } from "react";
import "../assets/style.css";
import { useParams } from "react-router-dom";

const Task = () => {
  const { taskID } = useParams();
  const [points, setPoints] = useState("");
  const [pointList, setPointList] = useState([]);

  const addPointer = () => {
    console.log("click");
    setPointList([...pointList, points]);
    setPoints(""); // Clear input field after adding point
  };

  return (
    <>
      <div className="task">
        <h1>{taskID}</h1>
        <div>
          <ul className="points">
            {pointList.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <br />
        <label htmlFor="description">Add Details</label>
        <input
          type="text"
          name="description"
          id="description"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button onClick={addPointer}>Submit</button>
      </div>
    </>
  );
};

export default Task;
