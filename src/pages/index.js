
import ShoppingCart from "@/components/shopping_cart/ShoppingCart";
import ShoppingCartContextProvider from "@/context/ShoppingCartContextProvider";

export default function Home() {

  return (
    <>
      <ShoppingCartContextProvider>
        <ShoppingCart />
      </ShoppingCartContextProvider>
    </>
  );
}


