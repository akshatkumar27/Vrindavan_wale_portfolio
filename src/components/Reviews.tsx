import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
}

const reviews: Review[] = [
  {
    author: "Rahul Kumar",
    rating: 5,
    content: "Best sweets in Lucknow! The Gulab Jamun and Kaju Katli are out of this world. Must try their special Namkeen mixture.",
    date: "2 weeks ago",
    likes: 12
  },
  {
    author: "Priya Singh",
    rating: 5,
    content: "Traditional taste maintained over generations. Their Rasmalai is simply divine. Great service and hygiene standards.",
    date: "1 month ago",
    likes: 8
  },
  {
    author: "Shiv Gupta",
    rating: 4,
    content: "Excellent variety of sweets and snacks. Prices are reasonable considering the quality. Packaging could be improved.",
    date: "2 months ago",
    likes: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-12 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <a
            href="https://www.google.com/maps/place/Vrindavan+wale+Sweets+and+Namkeen/@26.776143,80.9281324,16z/data=!4m6!3m5!1s0x399bfb0062bff299:0x35be37f6ef3413dc!8m2!3d26.7761575!4d80.9311499!16s%2Fg%2F11wv3w57hj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            <MessageCircle className="mr-2" size={20} />
            Write a Review on Google
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-black">{review.author}</h3>
                  <div className="flex items-center space-x-2">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              {/* <div className="flex items-center text-gray-500 text-sm">
                <ThumbsUp size={16} className="mr-1" />
                <span>{review.likes}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}