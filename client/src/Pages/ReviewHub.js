import React from 'react';

export default function ReviewHub() {
  return (
    <div className="reviewhub-page">
      <h1 style={{marginTop:"4rem"}}>Welcome to ReviewHub</h1>
      <hr className="w-50 mx-auto my-3"></hr>
      <section>
        <div className="container">
          <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
          <h2>About ReviewHub</h2><br></br>
          <h5>
            <b>ReviewHub</b> is a comprehensive platform that allows users to discover, save, and read reviews for movies, shows, anime, and series from around the world. 
            Whether you're a film enthusiast, binge-watcher, or anime aficionado, ReviewHub provides a centralized hub where you can explore the opinions and insights of fellow reviewers.
          </h5>  
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="text-center">
                    <img src="../images/img1.jpg" width="400" height="250"className="solution"/>
                </div>
            </div>
          </div>
        </div>
        </section>
      <main>
        <section style={{marginTop:"6rem"}}>
          <h2>How it Works</h2><br></br>
          <h5>
            ReviewHub features a user-friendly interface that makes it easy to navigate and find the information you need. Here's a breakdown of the key features:
          </h5>
            <h5>-Browse a vast collection of reviews for various genres and categories.<br></br>
            -Discover the latest and most popular reviews.<br></br>
            -Add your own reviews to share your thoughts and recommendations with the community.<br></br>
            -Save reviews that interest you to access them later.</h5>
        </section>
        <section style={{marginTop:"5rem"}}>
          <h2>Join ReviewHub Today</h2><br></br>
          <h5>
            Signing up for <b>ReviewHub</b> is quick and easy. Gain access to a world of reviews and become part of a thriving community of entertainment enthusiasts. 
            Start exploring, contributing, and engaging with fellow reviewers today!
          </h5><br></br>
        </section>
        <section style={{marginTop:"5rem"}}>
    <div className="container text-center common-title fw-bold">
        <h2 className="common-heading">
            Now Playing
        </h2>
        <hr className="w-25 mx-auto"></hr>
    </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-3 col-md-12">
                        <div className="text-center card-box rounded-2 p-5 text-center shadow">
                        <img src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/share.png" width="250" height="150"className="solution"/>
                            <h3 className="my-3 fw-normal">Mission Impossible</h3>
                            <p className="mb-5">The action set pieces in Mission: Impossible - Dead Reckoning Part One are nothing short of spectacular. The film delivers a jaw-dropping train-bound finale that pushes the boundaries of what is physically possible. It is an audacious display of extended action that will leave viewers on the edge of their seats</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-12">
                        <div className="text-center card-box rounded-2 p-5 text-center shadow">
                        <img src="https://www.flickonclick.com/wp-content/uploads/2023/02/The-Boys-Season-4-Release-Date-on-Amazon-Prime-Video-Cast-Story-Trailer-and-More.webp" width="250" height="150"className="solution"/>
                            <h3 className="my-3 fw-normal">The Boys</h3>
                            <p className="mb-5">Adapted from the dark, funny, and at times repulsive graphic novels by Garth Ennis and Darick Robertson, The Boys S1 manages to provide a fresh take in what is probably the most popular (and successful) genre of this generation.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-12">
                        <div className="text-center card-box rounded-2 p-5 text-center shadow">
                        <img src="https://www.koimoi.com/wp-content/new-galleries/2023/05/asur-2-review.jpg" width="250" height="150"className="solution"/>
                            <h3 className="my-3 fw-normal">Asur 2</h3>
                            <p className="mb-5">Asur Season 2, featuring an intensified pursuit of a cunning mastermind manipulating myths and technology to manipulate and harm individuals, delves deeper into the emotional and physical struggles faced by its characters.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-12">
                        <div className="text-center card-box rounded-2 p-5 text-center shadow">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe" width="250" height="150"className="solution"/>
                            <h3 className="my-3 fw-normal">One Piece</h3>
                            <p className="mb-5">There are two responses I get, without fail, every time I try to get someone new to watch this show. "I don't like the art style" or "I've seen the dub - NO THANKS." I'm guilty of both of these myself. But if there's one thing I need to stress before even getting started on this review, it's that the 4Kids dub is NOT One Piece.</p>
                        </div>
                    </div>
        </div>
    </div>
</section>
<div className="custom-shape-divider-bottom-1689427112">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
      </main>
    </div>
  );
}
