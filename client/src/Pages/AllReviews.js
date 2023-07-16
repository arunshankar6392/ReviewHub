import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../Hooks/useGetUserID";
import { useCookies } from "react-cookie";
export default function Home() {
  const [review, setreview] = useState([]);
  const [savedReviews, setSavedReviews] = useState([]);
  const [cookies,_] = useCookies(["access_token"])
  const userID = useGetUserID();
  const handleClick = async (reviewID) => {
    try {
      const response = await axios.put("http://localhost:3001/review", {
        reviewID,
        userID,
      },{headers:{authorization:cookies.access_token}});
      setSavedReviews(response.data.savedReviews);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/review/");
        setreview(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSavedReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/review/savedReviews/ids/${userID}`
        );
        setSavedReviews(response.data.savedReviews);
      } catch (err) {
        console.log(err);
      }
    };

    fetchReviews();
    if(cookies.access_token) fetchSavedReviews();
  }, []);
  return (
    <div>
      <h1>Reviews</h1>
      <ul style={{ display: "flex" }}>
        {review.map((review) => (
          <li
            key={review._id}
            style={{
              background: "red",
              maxWidth: "13rem",
              margin: "1rem",
              border: "2px solid black",
              borderRadius:"12px"
            }}
          >
            <div>
              <h2>{review.ShowName}</h2>
              {savedReviews && savedReviews.includes(review._id) ? (
                <button disabled>Saved</button>
              ) : (
                <button onClick={() => handleClick(review._id)}>
                  Save Review
                </button>
              )}
            </div>
            <div className="review">
              <p>{review.Review}</p>
            </div>
            <img
              src={review.imageURL}
              alt={review.ShowName}
              style={{ maxHeight: "5rem" }}
            />
            <p>Rating : {review.rating} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
