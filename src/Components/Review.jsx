import React, { useEffect, useState } from "react";
import images from "../assets/images";

const Review = () => {
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulated API call for ratings
    const fetchRatings = async () => {
      const ratingData = [
        { stars: 5, count: 124, percentage: 68 },
        { stars: 4, count: 56, percentage: 42 },
        { stars: 3, count: 23, percentage: 18 },
        { stars: 2, count: 12, percentage: 12 },
        { stars: 1, count: 7, percentage: 6 },
      ];
      setRatings(ratingData);
    };

    // Simulated API call for reviews
    const fetchReviews = async () => {
      const reviewData = [
        {
          id: 1,
          name: "Jane Cooper",
          time: "10 mins ago",
          avatar: images.messenger2,
          content:
            "Google is a fantastic multinational company. It focusing on search engine technology, web application software, quantum computing. I love this company",
        },
        {
          id: 2,
          name: "Arijit Singh",
          time: "6 hours ago",
          avatar: images.messenger4,
          content:
            "Google is a fantastic multinational company. It focusing on search engine technology, web application software, quantum computing. I love this company",
        },
        {
          id: 3,
          name: "Sonu Nigam",
          time: "2 days ago",
          avatar: images.messenger3,
          content:
            "Google is a fantastic multinational company. It focusing on search engine technology, web application software, quantum computing. I love this company",
        },
      ];
      setReviews(reviewData);
    };

    fetchRatings();
    fetchReviews();
  }, []);

  const totalReviews = ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div>
      {/* Ratings Summary */}
      <div className="text-[#121927] dark:text-white shadow-sm mt-[24px] py-[20px] px-[18px] gap-[40px] dark:bg-[#242f49] rounded-xl">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <div className="flex gap-[16px]">
              <div className="flex">
                <p className="text-[36px] font-bold leading-[20px]">4.6</p>
                <p className="text-[18px] font-semibold leading-[26px]">/5</p>
              </div>
              <img src={images.review} alt="" />
            </div>
            <p className="text-[12px] leading-[20px]">
              Based on {totalReviews}+ Reviews
            </p>
            <div className="mt-[12px] flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <img key={i} src={images.star} alt="star" />
              ))}
              <img src={images.star2} alt="half star" />
            </div>
          </div>

          <div className="min-w-[50%] rounded-xl">
            <div className="max-w-md mx-auto px-4 bg-white dark:bg-[#242f49] rounded-lg">
              <div className="space-y-3">
                {ratings.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-1">
                    <div className="w-8 text-[10px] font-medium text-gray-500 leading-[12px]">
                      {rating.stars} Star
                    </div>
                    <div className="flex-1 h-[8px] bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Header */}
      <div className="mt-[20px] flex justify-between items-center">
        <h1 className="text-[16px] leading-[19px]">Employee Reviews</h1>
        <select className="cursor-pointer pl-[20px] pr-[5px] outline-none bg-white dark:bg-[#111d39] text-[14px] leading-[24px] font-medium">
          <option value="">Most Recent</option>
          <option value="">Oldest First</option>
        </select>
      </div>

      {/* Review List */}
      <div className="mt-[20px]">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-[16px] mb-[20px] dark:bg-[#242f49] rounded-2xl"
          >
            <div className="flex w-full bg-white dark:bg-[#242f49] rounded-xl mb-[12px] gap-[12px] items-center">
              <img
                src={review.avatar}
                className="border h-[28px] w-[28px] flex-shrink-0 border-green-800 rounded-full"
                alt="avatar"
              />
              <div className="flex flex-col flex-grow gap-[6px]">
                <p className="text-[15px] font-bold leading-[18px]">
                  {review.name}
                  <span className="inline-block h-[3px] w-[3px] bg-green-600 rounded-full mx-[6px] mb-[2px]" />
                  <span className="text-[12px] font-medium text-[#12192799] dark:text-white">
                    {review.time}
                  </span>
                </p>
              </div>
              <div className="flex gap-[2px] flex-shrink-0 items-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} className="size-[16px]" src={images.star} alt="star" />
                ))}
              </div>
            </div>
            <p className="text-[11px] font-medium text-gray-500 dark:text-gray-300 leading-[20px]">
              “{review.content}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
