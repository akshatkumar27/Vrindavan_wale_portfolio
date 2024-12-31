import { ThumbsUp } from 'lucide-react';
import { StarRating } from './StarRating';

interface ReviewCardProps {
  author: string;
  rating: number;
  content: string;
  date: string;
  likes?: number;
}

export function ReviewCard({ author, rating, content, date, likes }: ReviewCardProps) {
  return (
    <div className="bg-dark-800 rounded-xl p-6 shadow-3d transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">{author}</h3>
          <div className="flex items-center space-x-2">
            <StarRating rating={rating} />
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      {/* {likes !== undefined && (
        <div className="flex items-center text-gray-400 text-sm">
          <ThumbsUp size={16} className="mr-1" />
          <span>{likes}</span>
        </div>
      )} */}
    </div>
  );
}