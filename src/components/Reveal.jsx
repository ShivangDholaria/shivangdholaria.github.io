import { motion, useReducedMotion } from "framer-motion";

// Shared scroll-reveal: subtle fade + rise, fires once on enter.
// Honors the OS "reduce motion" setting by rendering statically.
const Reveal = ({ children, delay = 0, y = 16, className = "" }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
