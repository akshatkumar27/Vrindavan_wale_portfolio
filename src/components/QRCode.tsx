import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { shareContent } from '../utils/share';

export function QRCodeGenerator() {
  const [showQR, setShowQR] = useState(false);
  const currentURL = window.location.href;

  const handleShare = () => {
    shareContent({
      title: 'Vrindavan wale Sweets and Namkeen',
      text: 'Check out our delicious sweets and snacks!',
      url: currentURL,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setShowQR(!showQR)}
          className="bg-accent-500 text-white px-6 py-3 rounded-xl hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-neon"
        >
          {showQR ? 'Hide QR Code' : 'Show QR Code'}
        </button>
        <button
          onClick={handleShare}
          className="bg-accent-500 text-white px-6 py-3 rounded-xl hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-neon flex items-center"
        >
          <Share2 size={20} className="mr-2" />
          Share
        </button>
      </div>
      
      {showQR && (
        <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all duration-300">
          <QRCodeSVG value={currentURL} size={128} />
          <p className="mt-2 text-xs text-dark-950">Scan to visit our website</p>
        </div>
      )}
    </div>
  );
}