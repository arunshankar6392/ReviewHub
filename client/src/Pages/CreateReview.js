import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../Hooks/useGetUserID";
import { useCookies } from "react-cookie";
export default function CreateReview() {
  const userID = useGetUserID()
  const [cookies,_] = useCookies(["access_token"])
  const [review, setReview] = useState({
    ShowName: "",
    Characters: [],
    Review: "",
    imageURL: "",
    rating: 0,
    userOwner: userID,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/review/",review ,{headers:{authorization:cookies.access_token}}
      );

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
    setReview({...review, Characters});
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
      <div className="text-white fs-3 mt-3 mb-5" style={{ textAlign: "left" }}>
        Create a Review
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label text-white fs-5 text-left"
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
      <label htmlFor="Characters" className="text-white">Characters</label>
      {review && review.Characters.map((Character, index) => (
        <div>
        <input
          key={index}
          type="text"
          name="Characters"
          value={Character}
          onChange={(event) => handleCharacterChange(event, index)}
        />
        </div>
      ))}
      <button type="button" onClick={handleAddCharacter}>
        Add Character
      </button>
      <div className="mb-3" style={{ marginTop: "4rem" }}>
        <label
          htmlFor="exampleInputPassword1"
          className="form-label text-white fs-5 text-left"
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
          className="form-label text-white fs-5 text-left"
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
          className="form-label text-white fs-5 text-left"
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
