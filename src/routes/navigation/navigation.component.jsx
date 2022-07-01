import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUSer } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action"; 

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer
} from './navigation.styles'

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUSer);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUSer = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUSer}>
                            {' '}
                            SIGN OUT {' '}
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
