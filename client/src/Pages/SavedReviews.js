import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useGetUserID } from "../Hooks/useGetUserID";

export default function Home() {
  const [savedReviews, setSavedReviews] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/review/savedReviews/${userID}`);
        console.log(response.data); // Check the response from the server
        setSavedReviews(response.data.savedReviews);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedReviews();
  }, []);

  console.log(savedReviews); // Check the value of savedReviews

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "2rem" }}>
      {savedReviews.map((review) => (
        <div key={review._id} style={{ width: "20rem", margin: "1rem", padding: "1rem" }}>
            <div className="text-center card-box rounded-2 p-5 text-center shadow" style={{width:"20rem",height:"35rem"}}>
              <img
                src={review.imageURL}
                alt={review.ShowName}
                width="150"
                height="auto"
                className="solution mb-4"
              />
              <div>
              </div>
              <h3 className="my-3 fw-normal">{review.ShowName}</h3>
              <p>Rating : {review.rating} </p>
              <Link to={`/reviews/${review._id}`} className="btn btn-dark">Read More</Link>
            </div>
          </div>
          ))}
        </div>
  );
}
