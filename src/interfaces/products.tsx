type sd = {
  [key: string]: string | undefined;
};

export interface Product extends sd {
  id?: string;
  name: string;
  price: string;
  color: string;
  description?: string;
}
