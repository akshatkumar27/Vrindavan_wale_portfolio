import { Map } from './components/Map';
import { QRCodeGenerator } from './components/QRCode';
import { SocialLinks } from './components/SocialLinks';
import { Hero } from './components/Hero';
import { BusinessInfo } from './components/BusinessInfo';
import { Reviews } from './components/Reviews';
import { Card } from './components/ui/Card';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-100">
      <Hero 
        title="Vrindavan wale Sweets and Namkeen"
        subtitle="Authentic Indian Sweets & Snacks Since 1950"
        backgroundImage="https://imgs.search.brave.com/jUsjRLGWx8EYotAnTpIwNwHNsIiYzeHlXBXUQ1HrlMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzIxLzE2Lzgw/LzM2MF9GXzkyMTE2/ODA1NF9aMmtmU3Z2/YjluRTdZNkpiNnUy/TmV6NmFKOHhKNk1q/WS5qcGc"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <BusinessInfo />
            <Card>
              <SocialLinks />
            </Card>
            <Card>
              <QRCodeGenerator />
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden">
              <Map />
            </Card>
          </div>
        </div>
      </div>

    
      <Reviews/>
    </div>
  );
}