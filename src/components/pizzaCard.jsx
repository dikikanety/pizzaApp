import { Typography, Card, CardActions, CardContent, CardMedia, Radio } from '@mui/material';

export default function PizzaCard({ name, price, img, selected, setMenus }) {
  const handleChange = (event) => {
    const selectedMenu = event.target.value;
    setMenus((prevMenu) => {
      const updateMenu = prevMenu.map((menu) => {
        menu.selected = false
        if (menu.name === selectedMenu) {
          return { 
            ...menu, 
            selected: true, 
          }
        }
        return menu;
      })

      return updateMenu;
    });
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Radio
          checked={selected}
          onChange={handleChange}
          value={name}
          name="radio-buttons"
          inputProps={{ 'aria-label': name }}
        />
      </CardActions>
    </Card>
  );
}
