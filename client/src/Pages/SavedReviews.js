import React, { useEffect, useState } from "react";
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
    <div>
      <h1>Saved Reviews</h1>
      <ul style={{ display: "flex" }}>
        {savedReviews && savedReviews.map((review) => (
          <li
            key={review._id}
            style={{
              background: "red",
              maxWidth: "13rem",
              margin: "1rem",
              border: "2px solid black",
            }}
          >
            <div>
              <h2>{review.ShowName}</h2>
            </div>
            <div className="Review">
              <p>{review.Review}</p>
            </div>
            <img
              src={review.imageURL}
              alt={review.ShowName}
              style={{ maxHeight: "5rem" }}
            />
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
