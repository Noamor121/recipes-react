import { TextField } from '@mui/material';

type textFieldProps = {
    title: string
}

const RcTextField = ({title}: textFieldProps) => {
    return (
        <TextField label={title}/>
    );
}

export default RcTextField;