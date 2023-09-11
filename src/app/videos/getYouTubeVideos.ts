const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const requestURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;

export default async function GetYouTubeVideos() {
  try {
    const response = await fetch(requestURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch YouTube videos: ${response.statusText}, ${JSON.stringify(response)}`);
    }

    return await response.json();
  } catch (error) {
  console.error(`Error fetching YouTube videos: ${error}`);
  throw error;
  }
}