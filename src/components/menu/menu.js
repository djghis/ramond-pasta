import React, { useState } from 'react'
import Antipasti from './antipasti'
import Pasta from './pasta'
import HotDrinks from './hot-drinks'
import ColdDrinks from './cold-drinks'
import Desserts from './desserts'

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
  } else if (menuCategory === 'desserts') {
    SelectedCategory = Desserts
  }
  
  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('antipasti')}>Our Antipasti</li>
        <li className="menu-header" onClick={() => setMenuCategory('pasta')} >Fresh Pasta</li>
        <li className="menu-header" onClick={() => setMenuCategory('desserts')} >Our Desserts</li>
        <li className="menu-header" onClick={() => setMenuCategory('hotDrinks')}>Hot Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('coldDrinks')}>Cold Drinks</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;