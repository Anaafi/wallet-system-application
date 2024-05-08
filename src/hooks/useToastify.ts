import { toast, ToastOptions } from 'react-toastify';
interface ToastOptionsCustom extends ToastOptions {
  position?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  draggable?: boolean;
  progress?: undefined;
}
export function useToastify() {
  const toastOptions: ToastOptionsCustom = {
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  };
  function successToast(msg: string, options: ToastOptionsCustom = {}) {
    toast.success(msg, { ...toastOptions, ...options });
  }
  function errorToast(msg: string, options: ToastOptionsCustom = {}) {
    toast.error(msg, { ...toastOptions, ...options });
  }

  return {
    successToast,
    errorToast,
  };
}
