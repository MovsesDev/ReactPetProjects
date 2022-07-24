import { useMutation, useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ALL_CARTS,
  AUTHOR,
  PUBLISH_UPDATE_AUTHOR,
  UPDATE_AUTHOR,
} from "../apollo/requests";
import Basket from "../components/Basket";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Author2, ItemList } from "../types/cartItem";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  setBasketOpen: Dispatch<SetStateAction<boolean>>;
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isBasketOpen, setBasketOpen] = useState<boolean>(false);

  const [updateAuthor, { error, loading, data }] = useMutation(UPDATE_AUTHOR);
  const [
    publishUpdateAuthor,
    { error: publishError, loading: publishLoading, data: publishData },
  ] = useMutation(PUBLISH_UPDATE_AUTHOR);
  const {
    error: authorError,
    loading: authorLoading,
    data: authorData,
  } = useQuery(AUTHOR, {
    variables: {
      email: localStorage.getItem("user"),
    },
  });

  useEffect(() => {
    if (data) {
      publishUpdateAuthor({
        variables: {
          email: localStorage.getItem("user"),
        }, update: (store, {data}) => {
          const {authors} = store.readQuery<any>({query: AUTHOR})
          store.writeQuery({query: AUTHOR, data: {
            authors: [...authors, data.publishUpdateAuthor]
          }})
        }
      });
      console.log("useffect");
    }
  }, [data]);
    

  const onlyUnique = (item: any, index: any, self: string | any[]) => {
    return self.indexOf(item) === index;
  };

  function increaseCartQuantity(id: string) {
    const postIds = authorData.authors[0].items;
    updateAuthor({
      variables: {
        email: localStorage.getItem("user"),
        itemIds: [...postIds, id].filter(onlyUnique),
      },
    });
    return postIds;
  }

  function decreaseCartQuantity(id: string) {
    const postIds = authorData.authors[0].items.filter((i: string) => i !== id);
    updateAuthor({
      variables: {
        email: localStorage.getItem("user"),
        itemIds: postIds,
      },
    });
    return postIds;
  }

  function removeFromCart(id: string) {
    const postIds = authorData.authors[0].items.filter((i: string) => i !== id);
    updateAuthor({
      variables: {
        email: localStorage.getItem("user"),
        itemIds: postIds,
      },
    });
    return postIds;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        setBasketOpen,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
      <Basket active={isBasketOpen} setActive={setBasketOpen} />
    </ShoppingCartContext.Provider>
  );
}
