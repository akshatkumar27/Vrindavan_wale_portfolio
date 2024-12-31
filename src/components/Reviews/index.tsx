import { MessageCircle } from 'lucide-react';
import { ReviewsList } from './ReviewsList';

const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/cZR34oLcsoTrCwpf7";

export function Reviews() {
  return (
    <section className="py-12 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Customer Reviews</h2>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl shadow-neon transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2" size={20} />
            Write a Review on Google
          </a>
        </div>

        <ReviewsList />
      </div>
    </section>
  );
}