import { toast, TypeOptions } from 'react-toastify';

export function showToast(title: string, type: TypeOptions) {
  toast(title, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    type,
  });
}
