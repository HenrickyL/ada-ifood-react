export interface IReview {
    id: string;
    name: string;
    comment: string;
    rating: number;
  }
  
  export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    rating: number;
    reviews: IReview[];
  }