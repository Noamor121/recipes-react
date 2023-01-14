import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

export type namedObject = {
    id: string 
    name: string
}

type selectProps = {
    title: string,
    options: namedObject[]
}

const RcSelect = ({title, options}: selectProps) => {

  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select
            label= {title}
            value={value}
            onChange={handleChange}
        >
        { options?.map(option => {
            return (
                <MenuItem key={option.id} value={option.id}>
                    {option.name}
                </MenuItem>
            );
        })} 
        </Select>
    </FormControl>
  );
}

export default RcSelect;