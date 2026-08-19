export type Product = {
  id: number; name: string; category: string; price: number; oldPrice?: number;
  rating: number; reviews: number; stock: number; image: string; description: string;
  keywords: string[]; colors: string[]; sizes: string[];
};
export type CartItem = { product: Product; quantity: number; color?: string; size?: string };
