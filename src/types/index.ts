export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  origin: string;
  inStock: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}