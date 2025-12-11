import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
      return (
            <div>
                  <h4>{cart.length} - Bottle Purchased</h4>
                  <div className="cart-container">
                        {
                              cart.map(bottle => <div>
                                     <img key={bottle.id} src={bottle.img}></img>
                                     <button onClick={handleRemoveFromCart(bottle.id)}>Remove</button>
                              </div> )
                        }
                  </div>
            </div>
      );
};


Cart.propTypes = {
      cart: PropTypes.array.isRequired,
      handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;