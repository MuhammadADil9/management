import { useState,useRef } from "react";
import "../assets/style.css";
import { useParams } from "react-router-dom";

const Task = () => {
  const { taskID } = useParams();
  const description = useRef()
  //const [points, setPoints] = useState("");
  const [descriptionArr, SetDescriptionArr] = useState([]);

  const addPoint = () => {
    const val = description.current.value;
    SetDescriptionArr([...descriptionArr, val]);
    description.current.value = ""
  };

  return (
    <>
      <div className="task">
        <h1>{taskID}</h1>
        <div>
          <ul className="points">
            {descriptionArr.map((point, index) => (
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
          ref={description}
        />
        <button onClick={addPoint}>Submit</button>
      </div>
    </>
  );
};

export default Task;
