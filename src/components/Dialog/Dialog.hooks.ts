import React from "react";

export const useDialog = () => {
  const ref = React.useRef<HTMLDialogElement | null>(null);

  const isOpen = Boolean(ref.current?.open);

  const handleOpen = () => {
    if (!ref.current) return;

    ref.current.showModal();
  };
  const handleClose = () => {
    if (!ref.current) return;

    ref.current.close();
  };

  return {
    ref,
    isOpen,
    handleOpen,
    handleClose,
  };
};
