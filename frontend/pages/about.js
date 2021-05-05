import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About({
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  cartState,
  toggleCartOpen
}) {
  return (
    <Layout
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      cartState={cartState}
      toggleCartOpen={toggleCartOpen}
    >
      <main className="pv3 pv5-ns vh-100 white dt mw8 center">
        <div className="items-center">
          <p className="lh-copy">
            VRS is a fully-functional e-commerce store by Varchitect.
            <br />
            <br />
            Using virtual reality technologies of realities significantly improves the quality of shopping and speed of purchase with the help of interactive products configuration. It becomes possible to showcase rare and expensive products, which previously was difficult for many companies. Virtual reality store give companies the possibility to simulate even the most situations without any risk.
          </p>
          <p className="lh-copy" />
        
        
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
