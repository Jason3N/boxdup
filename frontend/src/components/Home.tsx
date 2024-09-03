import { useRef } from "react";
import "../index.css";
import { motion, useInView } from "framer-motion";

function Home() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <>  
        <div>
            <motion.div
                initial={{ x: "0%", opacity: 0 }}
                animate={{ x: "10%", opacity: 1 }}
                transition={{ duration: 2 }}
                >
                <div className = "text-6xl">
                welcome to boxdup
                </div>
                <div>
                    box up your media and share it with the world!
                </div>
                <div>
                    sign up or join to get started!
                </div>
            </motion.div>
            </div>
            <div className = "mt-96">
            <div ref={ref}>
                    <span
                        style={{
                        transform: isInView ? "0" : "translateX(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                    letterboxd, goodreads, and more!
                </span>
            </div>
            <div>
                <img>
                </img>
            </div>
            </div>
        </>
    )
}

export default Home;