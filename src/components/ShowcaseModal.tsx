import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface ShowcaseModalProps {
  children: ReactNode;
  closeModal: () => void;
  label: string;
  className?: string;
}

const ShowcaseModal = ({ children, closeModal, label, className = "" }: ShowcaseModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <motion.div
      className="showcase-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={`showcase-dialog ${className}`.trim()}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="showcase-close" onClick={closeModal} aria-label="Close dialog">
          <span aria-hidden="true">×</span>
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ShowcaseModal;
