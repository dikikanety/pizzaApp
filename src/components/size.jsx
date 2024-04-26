import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

export default function Size({ size, setSize }) {
  const handleChange = (event) => {
    const pizzaSize = event.target.value;

    setSize((prevState) => {
      const sizeSelected = prevState.map((item) => {
        item.selected = false;
        if (item.label === pizzaSize) {
          return { ...item, selected: true }
        }
        return item;
      });

      return sizeSelected;
    })
  };

  const value = size.filter((item) => item.selected);

  return (
    <FormControl>
      <h3>Size</h3>
      <RadioGroup
        row
        aria-labelledby="pizza-size"
        name="pizza-size-group"
        value={value[0].label}
        onChange={handleChange}
      >
        {size.map((item) => (
          <FormControlLabel 
            key={item.id} 
            value={item.label} 
            control={<Radio />} 
            label={item.label}
          />
        ))}
        
      </RadioGroup>
    </FormControl>
  );
}