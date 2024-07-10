import React, { useState } from 'react';

const RatingAndReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const submitReview = () => {
    // Implement logic to submit review to backend
  };

  return (
    <div>
      <h2>Rating and Review</h2>
      <div>
        <label>Rating:</label>
        <input type="number" min="1" max="5" value={rating} onChange={(e) => handleRatingChange(e.target.value)} />
      </div>
      <div>
        <label>Review:</label>
        <textarea value={review} onChange={handleReviewChange} />
      </div>
      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
};

export default RatingAndReview;