import { Box, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function Toppings({ toppings, setToppings }) {
  const handleChange = (event) => {
    const toppingValue = event.target.name;

    setToppings((prevState) => {
      const selectedTopping = prevState.map((item) => {
        if (item.label === toppingValue) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      
      return selectedTopping;
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" variant="standard">
        <h3>Toppings</h3>
        <FormGroup row>
          {toppings.map((topping) => (
            <FormControlLabel
              key={topping.id}
              control={
                <Checkbox 
                  checked={topping.selected} 
                  onChange={handleChange} 
                  name={topping.label} 
                />
              }
              label={topping.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}