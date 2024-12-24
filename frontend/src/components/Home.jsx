// import React from 'react'

// const Home = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Home

import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } },
};

const Home = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="page-container"
        >
            <h1>Welcome to My Blog</h1>
            <p>This is the homepage.</p>
        </motion.div>
    );
};

export default Home;
