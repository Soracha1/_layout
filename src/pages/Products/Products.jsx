import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Products.css";
// import Carts from "../Carts/Carts";

function Products({ products, carts, setCarts }) {
  return (
    <div className="Products-container">
      <div className="Products-itemps-container">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <b>$&nbsp;{product.price.toFixed(2)}</b>
                </Card.Text>

                {carts.find((cart) => cart.id === product.id) ? (
                  <span className="badge bg-danger">Added</span>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setCarts([...carts, product]);
                    }}
                  >
                    Add To Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
