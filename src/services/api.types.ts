export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface FetchImages {
  total: number;
  total_pages: number;
  results: Image[];
}
