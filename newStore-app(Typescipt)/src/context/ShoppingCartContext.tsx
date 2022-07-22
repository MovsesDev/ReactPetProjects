import { useMutation } from "@apollo/client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { PUBLISH_UPDATE_AUTHOR, UPDATE_AUTHOR } from "../apollo/requests";
import Basket from "../components/Basket";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  setBasketOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [ids, setIds] = useState<String[]>([]);
  const [updateAuthor, { error, loading, data }] = useMutation(UPDATE_AUTHOR);
  const [
    publishUpdateAuthor,
    { error: publishError, loading: publishLoading, data: publishData },
  ] = useMutation(PUBLISH_UPDATE_AUTHOR);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isBasketOpen, setBasketOpen] = useState<boolean>(false);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  useEffect(() => {
    if (data) {
      publishUpdateAuthor({
        variables: {
          email: localStorage.getItem("user"),
        },
      });
    }
  }, [data]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function onlyUnique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }

  function increaseCartQuantity(id: string) {
    setIds((prev) => {
      const postIds = [...prev, id];
      updateAuthor({
        variables: {
          email: localStorage.getItem("user"),
          itemIds: postIds.filter(onlyUnique),
        },
      });
      console.log("HERE!!!", ids, postIds);
      return postIds;
    });

    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setIds((prev) => {
      updateAuthor({
        variables: {
          email: localStorage.getItem("user"),
          itemIds: prev.filter((i) => i !== id),
        },
      });
      console.log(prev);
      
      return prev;
    });
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        setBasketOpen,
        cartItems,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
      <Basket active={isBasketOpen} setActive={setBasketOpen} />
    </ShoppingCartContext.Provider>
  );
}
