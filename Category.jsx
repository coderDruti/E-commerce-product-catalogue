/* eslint-disable react/prop-types */
import Article from "./Article.jsx";

export default function Category({ catNumber, prods, ...s }) {
  let i = "";
  console.log(s, i);
  const arr = Object.entries(s.source);
  console.log(arr, i);
  const Image1 = arr[0][1];
  const Image2 = arr[1][1];
  const Image3 = arr[2][1];
  console.log(Image1, Image2, Image3);
  return (
    <section>
      <h3 className="Category">
        Category {catNumber}: {prods}
      </h3>
      <h3 className="prod">Some of our products</h3>
      <div className="articles">
        <Article className="article" Image={Image1} caption={"Best Seller"} />
        <Article className="article" Image={Image2} caption={"Our choice"} />
        <Article className="article" Image={Image3} caption={"Highest rated"} />
      </div>
    </section>
  );
}
