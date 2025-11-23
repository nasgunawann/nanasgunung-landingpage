import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/62881082469420" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white 
                 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow
                 flex items-center gap-2 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline-block font-medium">Chat WhatsApp</span>
    </motion.a>
  );
};

export default FloatingCTA;
