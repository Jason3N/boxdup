import "../index.css";
import { motion } from "framer-motion";

function Home() {
    return (
        <>
            <div className = "text-6xl">
            <motion.div
                initial={{ x: "0%", opacity: 0 }}
                animate={{ x: "10%", opacity: 1 }}
                transition={{ duration: 2 }}
                >
                welcome to boxdup
            </motion.div>
            </div>
            <div>
            <motion.div
                initial={{ x: "0%", opacity: 0 }}
                animate={{ x: "10%", opacity: 1 }}
                transition={{ duration: 2 }}>
                box up your favorite media
            </motion.div>
            </div>
        </>
    )
}

export default Home;