import { MapPin, Clock, Phone, Star } from 'lucide-react';

export function BusinessInfo() {
  return (
    <div className="bg-dark-800 p-8 rounded-xl shadow-3d transform hover:scale-105 transition-all duration-300">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Welcome to Tradition</h2>
          <p className="text-gray-300 leading-relaxed">
            Experience the authentic taste of traditional Indian sweets and snacks, 
            crafted with love and premium ingredients. Our recipes have been passed 
            down through generations, ensuring you get the perfect blend of flavors 
            in every bite.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <MapPin className="text-accent-500" />
            <span>Lucknow, Uttar Pradesh, India</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <Clock className="text-accent-500" />
            <span>Open Daily: 8:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <Phone className="text-accent-500" />
            <span>+91 94544 77420</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="text-accent-500" />
            <a 
              href="https://maps.app.goo.gl/cZR34oLcsoTrCwpf7"
              className="text-accent-500 hover:text-accent-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}