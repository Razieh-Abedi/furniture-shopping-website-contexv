import React from "react";
import Card from "../components/Card";
import productsData from "../data/productsData";

function Home() {
 
  return (
    <div className="py-3">
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          { productsData.map((item) => (
            <Card
              key={item.id}
              // name={item.name}
              // id={item.id}
              // price={item.price}
              // des={item.des}
              // img={item.img}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
