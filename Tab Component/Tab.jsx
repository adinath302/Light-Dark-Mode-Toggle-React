import React from 'react'
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"


const New_Tab = ({ item, renderitem }) => {
    return (
        <ul className='flex '

        ><AnimatePresence>
                {
                    item.map((item) => (
                        <motion.li
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }} // Add an exit animation
                            transition={{ delay: item.id * 0.1 }}
                            key={item.id}
                        >
                            {renderitem(item)}
                        </motion.li>
                    ))
                }
            </AnimatePresence>
        </ul>
    )
}

export default New_Tab;