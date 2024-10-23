import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Carts.css";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-itemps-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>$&nbsp;{cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  remove from Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4 style={{marginTop: "10px"}}>
        Item: {carts.length} item - Total Price: $
        {carts
          .reduce((prev, cart) => {
            return prev + cart.price;
          }, 0)
          .toFixed(2)}
      </h4>
      <button className="btn btn-success bi-cart3">&nbsp;Checkout</button>
    </div>
  );
}

export default Carts;
