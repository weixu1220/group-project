import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInput } from "../formSlice";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");

  //   const RandomBearPictureGenerator = () => {

  //     // const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here");
    dispatch(changeInput({ name: name, height: height, width: width }));
    setHeight("");
    setName("");
    setWidth("");
    navigate(`/joke/${name}`);
    //       // Check if width and height are valid numbers
    //       // if (isNaN(width) || isNaN(height)) {
    //       //   setError('Please enter valid width and height.');
    //       //   return;
    //       // }

    //       // Implement logic to get a random bear picture here...
  };
  
  return (

      <div className="d-flex flex-column">
        <h1 className="text-center">Random Bear Picture Generator</h1>
        <form className="form-example d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
          <div className="form-group">
            <br/>
            <label className="m-1" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="m-1" htmlFor="width">Width:</label>
            <input
              type="text"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Enter width"
              required
            />
          </div>
          <br />
          <div className="form-group">
          <label className="m-1" htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            required
          />
          </div>
          <br />
          <br />
          <button className="btn btn-dark" type="submit">
            Get Bear Picture
          </button>
        </form>
      </div>
  );
}

//   return <RandomBearPictureGenerator />;
