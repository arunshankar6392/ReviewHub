import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../Hooks/useGetUserID";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styling/hr.css";
export default function CreateReview() {
  const navigate = useNavigate();
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [review, setReview] = useState({
    ShowName: "",
    Characters: [],
    Review: "",
    imageURL: "",
    rating: 0,
    userOwner: userID,
  });
  const handleSubmit = async (event) => {
    navigate("/all-reviews");
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/review/", review, {
        headers: { authorization: cookies.access_token },
      });

      alert("Review Created");
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleAddCharacter = () => {
    const Characters = [...review.Characters, ""];
    setReview({ ...review, Characters });
  };

  const handleCharacterChange = (event, index) => {
    const { value } = event.target;
    const Characters = [...review.Characters];
    Characters[index] = value;
    setReview({ ...review, Characters });
  };


  return (
    <form
      className="container custom-form mt-5"
      style={{ maxWidth: "40rem" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3 text-black">
        <div className="fs-4 font-lb" style={{marginTop:"-2rem"}}>Create a Review</div>
        <hr  style={{marginTop:"-0.2rem",marginBottom:"3rem"}}  id="four" data-symbol="SECTION"/>
        <label
          htmlFor="exampleInputEmail1"
          className="form-label fs-5 text-left"
        >
          ShowName :
        </label>
        <input
          type="text"
          name="ShowName"
          value={review.ShowName}
          className="form-control custom-input"
          id="name"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="Characters" className="mt-5">
        Characters
      </label>
      {review &&
        review.Characters.map((Character, index) => (
          <div>
            <input
              key={index}
              type="text"
              name="Characters"
              value={Character}
              onChange={(event) => handleCharacterChange(event, index)}
              style={{marginTop:"0.3rem"}}
            />
          </div>
        ))}
      <button type="button" onClick={handleAddCharacter} style={{marginLeft:"1rem",marginTop:"1rem"}} className="font-lb">
        Add Character
      </button>
      <div className="mb-3" style={{ marginTop: "4rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fs-5 text-left"
        >
          Review :
        </label>
        <input
          type="text"
          name="Review"
          value={review.Review}
          className="form-control custom-input"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3" style={{ marginTop: "4rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label  fs-5 text-left"
        >
          Image URL :
        </label>
        <input
          type="text"
          name="imageURL"
          value={review.imageURL}
          className="form-control custom-input"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3" style={{ marginTop: "4rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label  fs-5 text-left"
        >
          Rating :
        </label>
        <input
          type="text"
          name="rating"
          value={review.rating}
          className="form-control custom-input"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary custom-button">
        Create Review
      </button>
    </form>
  );
}
