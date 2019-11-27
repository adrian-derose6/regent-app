import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return(  
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.code} item={cartItem} />)
                :
                    <span className='empty-message'>You cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { 
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

