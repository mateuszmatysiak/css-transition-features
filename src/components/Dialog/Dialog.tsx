import { useDialog } from "./Dialog.hooks";
import styles from "./Dialog.module.css";

export const Dialog = () => {
  const { ref, isOpen, handleOpen, handleClose } = useDialog();

  return (
    <>
      <button className={styles.button} onClick={handleOpen}>
        Open dialog
      </button>

      <dialog className={styles.dialog} ref={ref} open={isOpen}>
        <h2>What is Dialog?</h2>

        <p>
          The Dialog component is a versatile UI element used to display
          important information or prompt user interactions in a modal window.
          It typically overlays the main content, drawing attention to critical
          tasks or messages without navigating away from the current screen.
        </p>

        <button className={styles.button} autoFocus onClick={handleClose}>
          Close dialog
        </button>
      </dialog>
    </>
  );
};
