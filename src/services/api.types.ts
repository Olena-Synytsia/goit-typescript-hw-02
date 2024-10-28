export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
}

export interface FetchImages {
  total: number;
  total_pages: number;
  results: Image[];
}
