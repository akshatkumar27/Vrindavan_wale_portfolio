const PLACE_ID = '0x399bfb0062bff299:0x35be37f6ef3413dc'; // Your Google Place ID

export async function fetchGoogleReviews() {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}/reviews`,
      {
        headers: {
          'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
          'X-Goog-FieldMask': 'reviews.authorName,reviews.rating,reviews.text,reviews.relativePublishTimeDescription',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    return data.reviews || [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    throw error;
  }
}