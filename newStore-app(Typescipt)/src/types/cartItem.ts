export type Item = {
  id: string;
  name: string;
  price: number;
  imgUrl: {
    url: string;
  };
};

export type ItemList = {
  stores: Item[];
};

export type Author = {
  createAuthor: {
    id: string;
    email: string;
  }
};
