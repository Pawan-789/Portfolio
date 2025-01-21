/*
import React, { useState } from 'react';

const ProductReviewForm = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the review with the rating
  };

  return (
    <form onSubmit={handleSubmit}>
      <RatingComponent currentRating={rating} onRatingChange={setRating} />
      {/* Additional form fields *//*}
    /*  <button type="submit">Submit Review</button>
    </form>
  );
};

export default ProductReviewForm*
*/
/*import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleRatingClick = (index) => setRating(index);

  const handleMouseEnter = (index) => setHoverRating(index);

  const handleMouseLeave = () => setHoverRating(0);

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback && profilePic) {
      onSubmit({ rating, feedback, profilePic });
      setRating(0);
      setFeedback("");
      setProfilePic(null);
      alert("Thank you for your feedback!");
    } else {
      alert("Please provide a rating, feedback, and your profile picture.");
    }
  };

  return (
    <div
      className="bg-zinc-800 p-5 rounded-xl min-w-[320px] lg:min-w-[420px] text-white flex flex-col"
    >
      <h3 className="text-lg font-bold mb-3">Rate Your Experience</h3>
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`material-symbols-rounded text-2xl cursor-pointer ${
              (hoverRating || rating) >= index ? "text-yellow-300" : "text-gray-500"
            }`}
            onClick={() => handleRatingClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            star
          </span>
        ))}
      </div>

      <textarea
        className="w-full p-2 bg-zinc-700 text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Write your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
        rows={2} // Reduced rows
      />

      <div className="mb-3">
        <label
          className="block text-sm font-semibold mb-2"
          htmlFor="profilePic"
        >
          Upload your profile picture:
        </label>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleImageChange}
          className="text-gray-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-yellow-500 file:text-black hover:file:bg-yellow-600"
        />
      </div>

      <button
        className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {profilePic && (
        <div className="mt-4 flex items-center gap-3">
          <img
            src={profilePic}
            alt="User profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-yellow-400">Thank you for sharing your feedback!</p>
            <p className="text-sm text-gray-400 italic">"{feedback}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

ReviewCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewCard;*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");

  const handleRatingClick = (index) => setRating(index);

  const handleMouseEnter = (index) => setHoverRating(index);

  const handleMouseLeave = () => setHoverRating(0);

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback && profilePic && name) {
      onSubmit({ rating, feedback, profilePic, name });
      setRating(0);
      setFeedback("");
      setProfilePic(null);
      setName("");
    } else {
      alert("Please provide a rating, feedback, name, and your profile picture.");
    }
  };
<h1>Share your experience</h1>
  return (

    
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] text-white flex flex-col">
      <h3 className="text-lg font-bold mb-3">Rate Your Experience</h3>
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`material-symbols-rounded text-2xl cursor-pointer ${
              (hoverRating || rating) >= index ? "text-yellow-300" : "text-gray-500"
            }`}
            onClick={() => handleRatingClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            star
          </span>
        ))}
      </div>

      <input
        className="w-full p-2 bg-zinc-700 text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
        type="text"
      />

      <textarea
        className="w-full p-2 bg-zinc-700 text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Write your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
        rows={2}
      />

      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2" htmlFor="profilePic">
          Upload your profile picture:
        </label>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleImageChange}
          className="text-gray-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-yellow-500 file:text-black hover:file:bg-yellow-600"
        />
      </div>

      <button
        className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

ReviewCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReviewSubmit = (review) => {
    setReviews((prev) => [...prev, review]);
    setCurrentIndex(reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <ReviewCard onSubmit={handleReviewSubmit} />

      {reviews.length > 0 && (
        <div className="mt-8 w-full max-w-xl bg-zinc-800 rounded-xl p-5 relative">
          <div className="absolute top-1/2 -left-5 transform -translate-y-1/2">
            <button
              className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600"
              onClick={handlePrev}
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
            <button
              className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600"
              onClick={handleNext}
            >
              ▶
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={reviews[currentIndex].profilePic}
              alt="Reviewer"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <div className="text-center">
              <p className="text-lg font-bold text-white">{reviews[currentIndex].name}</p>
              <p className="text-yellow-400">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded">
                    star
                  </span>
                ))}
              </p>
              <p className="text-white italic mb-3">
                "{reviews[currentIndex].feedback}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsCarousel;



