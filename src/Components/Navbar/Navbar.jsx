import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems, clearCart, setCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token'); // Usunięcie tokenu z localStorage
    clearCart(); // Wywołanie clearCart, aby zresetować stan koszyka w aplikacji
    window.location.replace('/'); // Przekierowanie użytkownika na stronę główną po wylogowaniu
  };

  const handleLogin = (userCartItems) => {
    setCartItems(userCartItems); // Ustawienie koszyka po zalogowaniu
  };

  return (
    <div className='navbar'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='nav-logo' onClick={() => { setMenu('shop'); }}>
          <img src={logo} alt='' />
          <p><i>iShoppy</i></p>
        </div>
      </Link>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu('shop'); }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mens'); }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === 'mens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('womens'); }}><Link style={{ textDecoration: 'none' }} to='/womens'>Woman</Link>{menu === 'womens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('kids'); }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to='/login'><button onClick={() => handleLogin(JSON.parse(localStorage.getItem('cartItems')))}>Login</button></Link>}
        <Link to='/cart'><img className='cart' src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
