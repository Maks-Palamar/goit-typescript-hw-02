import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    portfolio_url: string;
  };
}

interface UnsplashResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const fetchCards = async (query: string, page: number): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(`search/photos`, {
    params: {
      client_id: 'sTgCl6c4AAr038-n007OfZuRCJKcqje3noGQHPTXGZY',
      query,
      page,
      per_page: 10,
      orientation: 'squarish'
    }
  });

  return response.data;
};
