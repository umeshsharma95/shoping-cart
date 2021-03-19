import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts, sortProducts } from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-3">
          <label>
            Order by
            <select
              className="form-select"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value,
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-3">
          <label>
            {" "}
            Filter Size
            <select
              className="form-select"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value,
                );
              }}
            >
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
        <div className="col-md-3">
          <Link to="/cart" className="btn btn-primary">
            CheckOut{" "}
            <span class="badge bg-secondary">
              {this.props.cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  cartItems: state.cart.items,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter,
);
