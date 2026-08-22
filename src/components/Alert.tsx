import { AnimatePresence, motion } from "motion/react";

interface AlertProps {
  type: "success" | "danger";
  text: string;
}

const Alert = ({ type, text }: AlertProps) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`flex items-center rounded-md p-5 leading-none text-indigo-100 lg:inline-flex lg:rounded-full ${
            type === "danger" ? "bg-red-800" : "bg-royal"
          }`}
        >
          <p
            className={`mr-3 flex rounded-full px-2 py-1 text-xs font-semibold uppercase ${
              type === "danger" ? "bg-red-500" : "bg-lavender"
            }`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
