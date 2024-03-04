import Category from "./Category.jsx";
export default function MainContent() {
  const prods = {
    1: "Office products",
    2: "Home & Kitchen",
    3: "Mobiles & Accessories",
    4: "Women's Fashion",
    5: "Men's Fashion",
  };
  const source = [
    {
      "Best seller": "./assets/ergonomic_chair.jpg",
      "Our choice": "./assets/office_supplies.jpg",
      "Highest rated": "./assets/office_desk.jpg",
    },
    {
      "Best seller": "./assets/utensil.jpg",
      "Our choice": "./assets/pan_set.jpg",
      "Highest rated": "./assets/carrier.jpg",
    },
    {
      "Best seller": "./assets/headset.jpg",
      "Our choice": "./assets/earpods.jpg",
      "Highest rated": "./assets/phone_stand.jpg",
    },
    {
      "Best seller": "./assets/best_seller_w.jpg",
      "Our choice": "./assets/our_choice.jpg",
      "Highest rated": "./assets/highest.jpg",
    },
    {
      "Best seller": "./assets/men_best_seller.jpg",
      "Our choice": "./assets/m_our_choice.jpg",
      "Highest rated": "./assets/mfashion.jpg",
    },
  ];
  return (
    <main>
      <span>
        <h2>Home</h2>
      </span>
      <Category catNumber={1} prods={prods[1]} source={source[0]} />
      <Category catNumber={2} prods={prods[2]} source={source[1]} />
      <Category catNumber={3} prods={prods[3]} source={source[2]} />
      <Category catNumber={4} prods={prods[4]} source={source[3]} />
      <Category catNumber={5} prods={prods[5]} source={source[4]} />
    </main>
  );
}
