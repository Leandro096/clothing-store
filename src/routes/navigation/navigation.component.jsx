import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";


import { signOutUSer } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUSer}>
                            {' '}
                            SIGN OUT {' '}
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
