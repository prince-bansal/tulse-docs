export type ToastType = "success" | "error" | "info" | "warning";

export type toastPosition =
  | "right-top"
  | "right-bottom"
  | "left-top"
  | "left-bottom"
  | "center-top"
  | "center-bottom";

export type Toast = {
  id: number;
  title: string;
  description?: string;
  type: ToastType;
};

export type IToastContext = {
  toasts: Toast[];
  warningToast: (title: string, description?: string) => void;
  addToast: (type: ToastType, title: string, description?: string) => void;
  infoToast: (title: string, description?: string) => void;
  successToast: (title: string, description?: string) => void;
  errorToast: (title: string, description?: string) => void;
  removeToast: (id: number) => void;
  setPosition: (value: toastPosition) => void;
  position: toastPosition;
};

export const initialToastState: IToastContext = {
  toasts: [],
  infoToast: (title: string, description?: string) => {},
  addToast: (type: ToastType, toast: string, description?: string) => {},
  warningToast: (title: string, description?: string) => {},
  successToast: (title: string, description?: string) => {},
  errorToast: (title: string, description?: string) => {},
  removeToast: (id: number) => {},
  setPosition: (value: toastPosition) => {},
  position: "left-bottom",
};
