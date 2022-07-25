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
        },
      });
      console.log("useffect");
    }
  }, [data]);

  const onlyUnique = (item: any, index: any, self: string | any[]) => {
    return self.indexOf(item) === index;
  };

  function increaseCartQuantity(id: string) {
    let postIds = authorData.authors[0].itemInfo;
    const item = postIds?.find((i: { itemId: string }) => i.itemId === id);

    // console.log(postIds.find((i: { itemId: string; }) => i.itemId === id));

    const addItem = () => {
      if (postIds === null) {
        console.log("1");
        // let quantity = postIds.find((i: { itemId: string; }) => i.itemId === id).quantity;
        postIds = [{ itemId: id, quantity: 1 }];

        return postIds;
      } else {
        console.log(postIds);

        if (item) {
          console.log("2");
          const pos = postIds
            .map((i: { itemId: string }) => i.itemId)
            .indexOf(id);
          const postIdsCopy = [...postIds];
          postIdsCopy[pos] = { itemId: id, quantity: item.quantity + 1 };
          console.log(postIdsCopy);
          
          return postIdsCopy;
        } else {
          console.log("3");
          postIds = [...postIds, { itemId: id, quantity: 1 }];

          return postIds;
        }
      }
    };

    updateAuthor({
      variables: {
        email: localStorage.getItem("user"),
        items: addItem(),
      },
    });
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
