import Header from "./component/Header";
import Products from "./component/Products";

export default function Home() {
  return (
    <div>
      <Header />

      <div className='max-w-[1200px] mx-auto px-5'>
        <Products />
      </div>
    </div>
  );
}
