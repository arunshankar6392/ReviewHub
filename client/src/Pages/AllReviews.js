import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGetUserID } from "../Hooks/useGetUserID";
import { useCookies } from "react-cookie";

export default function Home() {
  const [review, setReview] = useState([]);
  const [savedReviews, setSavedReviews] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const [search, setSearch] = useState("");
  const userID = useGetUserID();

  const handleClick = async (reviewID) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/review",
        {
          reviewID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedReviews(response.data.savedReviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/review/");
        setReview(response.data);
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
    if (cookies.access_token) fetchSavedReviews();
  }, []);

  const filteredReview = review.filter((r) =>
    r.ShowName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{marginRight:"2rem",marginTop:"1rem"}}>
        <form className="form-inline d-flex justify-content-end">
          <div className="input-group d-flex justify-content-end">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ maxWidth: "250px",border:"1px solid black" }}
              value={search || ""}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "2rem" }}>
      {filteredReview.map((review) => (
        <div key={review._id} style={{ width: "20rem", margin: "1rem", padding: "1rem" }}>
          <div className="text-center card-box rounded-2 p-5 text-center shadow" style={{width:"20rem",height:"35rem"}} >
            <img
              src={review.imageURL}
              alt={review.ShowName}
              width="150"
              height="auto"
              className="solution mb-4"
            />
            <div>
              {savedReviews && savedReviews.includes(review._id) ? (
                <button disabled className="btn btn-secondary">Saved</button>
              ) : (
                <button onClick={() => handleClick(review._id)} className="btn btn-dark">
                  Save Review
                </button>
              )}
            </div>
            <h3 className="my-3 fw-normal">{review.ShowName}</h3>
            <p>Rating : {review.rating} </p>
            <Link to={`/reviews/${review._id}`} className="btn btn-dark">Read More</Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
