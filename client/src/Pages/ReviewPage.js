import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function ReviewPage() {
  const { reviewID } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/review/${reviewID}`);
        setReview(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReview();
  }, [reviewID]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div
          className="text-center card-box rounded-2 p-5 text-center font-lb cardExpand"
          style={{
            margin: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={review.imageURL}
            alt={review.ShowName}
            width="450"
            height="auto"
            className="solution mb-4"
          />
          <div style={{ textAlign: "left" }}>
            <h2 className="my-3 fw-normal" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              {review.ShowName}
            </h2>
            <hr />
            <p className="mb-5 fs-5 mt-5" style={{ fontSize: "1.5rem" }}>
              {review.Review}
            </p>
            <p className="fs-5" style={{ fontSize: "1.3rem" }}>
              Rating: {review.rating}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
