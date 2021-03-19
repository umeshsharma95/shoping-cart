import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { util } from "../util";
import {
  addToCart,
  removeFromCart,
  decreaseFromCart,
  increaseFromCart,
} from "../actions/cartActions";
class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div
        className="alert alert-info mb-5"
        style={{ width: "500px", margin: "0 auto" }}
      >
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="mb-2">
                    <b>{item.title}</b>
                    <button
                      style={{ float: "right" }}
                      className="btn btn-danger btn-sm mt-2"
                      onClick={(e) =>
                        this.props.removeFromCart(this.props.cartItems, item)
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <span className="mx-2">
                    {util.formatCurrency(item.price)}
                  </span>
                  <button
                    className="btn btn-info btn-sm ms-5 me-2"
                    onClick={(e) =>
                      this.props.decreaseFromCart(this.props.cartItems, item)
                    }
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="btn btn-info btn-sm ms-2"
                    onClick={(e) =>
                      this.props.increaseFromCart(this.props.cartItems, item)
                    }
                  >
                    +
                  </button>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="d-flex justify-content-around">
          {cartItems.length !== 0 && (
            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0),
              )}
            </b>
          )}
          <Link to="/" className="btn btn-primary">
            Go to Products
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
})(Basket);
