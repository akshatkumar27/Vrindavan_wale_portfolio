import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-6 items-center justify-center">
      <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors transform hover:scale-110">
        <Facebook size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors transform hover:scale-110">
        <Instagram size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors transform hover:scale-110">
        <Twitter size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors transform hover:scale-110">
        <Youtube size={24} />
      </a>
    </div>
  );
}