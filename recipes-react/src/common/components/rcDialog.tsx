import { DialogTitle, Dialog } from '@mui/material/';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  component : JSX.Element
}

const SimpleDialog = ({onClose, open, title, component}: SimpleDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {component}
    </Dialog>
  );
}

export default SimpleDialog;