import React, { useState } from 'react'
import Antipasti from './breakfast'
import Pasta from './lunch'
import HotDrinks from './hot-drinks'
import ColdDrinks from './cold-drinks'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('hotDrinks');
  let SelectedCategory;
  if (menuCategory === 'hotDrinks' ) {
    SelectedCategory = HotDrinks;
  } else if (menuCategory === 'coldDrinks') {
    SelectedCategory = ColdDrinks
  } else if (menuCategory === 'antipasti') {
    SelectedCategory = Antipasti
  } else if (menuCategory === 'pasta') {
    SelectedCategory = Pasta
  }
  
  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('hotDrinks')}>Hot Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('coldDrinks')}>Cold Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('antipasti')}>Antipasti</li>
        <li className="menu-header" onClick={() => setMenuCategory('pasta')} >Pasta</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;