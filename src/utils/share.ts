import { toast } from './toast';

export async function shareContent(data: { title: string; text: string; url: string }) {
  try {
    // Check if running on localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
    
    // Check if Web Share API is available and we're either on HTTPS or localhost
    if (navigator.share && (window.location.protocol === 'https:' || isLocalhost)) {
      await navigator.share(data);
      return;
    }

    // Fallback to clipboard
    await navigator.clipboard.writeText(data.url);
    toast.success('Link copied to clipboard!');
  } catch (error) {
    // Handle user cancellation gracefully
    if (error instanceof Error && error.name === 'AbortError') {
      return;
    }
    
    // Fallback to clipboard if sharing fails
    try {
      await navigator.clipboard.writeText(data.url);
      toast.success('Link copied to clipboard!');
    } catch {
      toast.error('Unable to share or copy link');
    }
  }
}