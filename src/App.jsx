import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
// components
import PizzaCard from "./components/pizzaCard";
import Size from './components/size';
import Toppings from './components/toppings';
// assets
import pizza1 from './assets/pizza1.jpg';
import pizza2 from './assets/pizza2.jpeg';
import pizza3 from './assets/pizza3.jpeg';

function App() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      name: 'pizza_name1',
      price: 8,
      img: pizza1,
      selected: false,
    },
    {
      id: 2,
      name: 'pizza_name2',
      price: 10,
      img: pizza2,
      selected: true,
    },
    {
      id: 3,
      name: 'pizza_name3',
      price: 12,
      img: pizza3,
      selected: false,
    },
  ]);
  const [size, setSize] = useState([
    {
      id: 1,
      label: 'small',
      price: -1,
      selected: false,
    },
    {
      id: 2,
      label: 'medium',
      price: 0,
      selected: true,
    },
    {
      id: 3,
      label: 'large',
      price: 2,
      selected: false,
    },
  ]);
  const [toppings, setToppings] = useState([
    {
      id: 1,
      label: 'avocado',
      price: 1,
      selected: false,
    },
    {
      id: 2,
      label: 'broccoli',
      price: 1,
      selected: false,
    },
    {
      id: 3,
      label: 'onions',
      price: 1,
      selected: false,
    },
    {
      id: 4,
      label: 'zucchini',
      price: 1,
      selected: false,
    },
    {
      id: 5,
      label: 'lobster',
      price: 2,
      selected: false,
    },
    {
      id: 6,
      label: 'oyster',
      price: 2,
      selected: false,
    },
    {
      id: 7,
      label: 'salmon',
      price: 2,
      selected: false,
    },
    {
      id: 8,
      label: 'tuna',
      price: 2,
      selected: false,
    },
    {
      id: 9,
      label: 'bacon',
      price: 3,
      selected: false,
    },
    {
      id: 10,
      label: 'duck',
      price: 3,
      selected: false,
    },
    {
      id: 11,
      label: 'ham',
      price: 3,
      selected: false,
    },
    {
      id: 12,
      label: 'sausage',
      price: 3,
      selected: false,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  // calculate total price
  useEffect(() => {
    const selectedMenu = menus.filter((menu) => menu.selected);
    const selectedSize = size.filter((menu) => menu.selected);

    const selectedTopping = toppings.filter((menu) => menu.selected);
    const totalPriceTopping = selectedTopping.reduce((total, item) => total + item.price, 0);

    const calculate = selectedMenu[0].price + totalPriceTopping + selectedSize[0].price;
    setTotalPrice(calculate);
  }, [menus, size, toppings]);

  return (
    <Container fixed>
      <Grid item xs={12}>
      <h3>Pizza</h3>
        <Grid container justifyContent="space-between" spacing={1}>
          {menus.map((menu) => (
            <Grid key={menu.id} item>
              <PizzaCard 
                name={menu.name}
                price={menu.price}
                img={menu.img}
                selected={menu.selected}
                setMenus={setMenus}
              />   
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Size */}
      <Grid item xs={12}>
        <Size 
          size={size} 
          setSize={setSize} 
        />   
      </Grid>
      <Grid item xs={12}>
        <Toppings 
          toppings={toppings} 
          setToppings={setToppings} 
        />   
      </Grid>
      <Grid item xs={12}>
        <h3>Price: <span style={{ color: 'red' }}>${totalPrice}</span></h3>
      </Grid>
    </Container>
  )
}

export default App
