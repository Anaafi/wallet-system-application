// import { TransferFunds } from '../components';
interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
  // onOpenButtonClik: () => void;
}

export function Modal({ show, children }: ModalProps) {
  if (!show) {
    return null;
  }
  return <div className="overlay">{children}</div>;
}
