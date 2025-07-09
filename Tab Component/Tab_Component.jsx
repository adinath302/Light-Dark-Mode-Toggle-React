import React, { useContext, useState } from 'react';
import New_Tab from './Tab';
import { motion } from "motion/react"
import { DarkModeContext } from '../Light/Dark Mode/Light/Create_Context';
import { FaBlackTie } from 'react-icons/fa';
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const tabsData = [
    {
        id: 1,
        title: 'Overview',
        content: 'This tab provides a general overview of the product, its purpose, and how it can help users solve their problems efficiently.',
    },
    {
        id: 2,
        title: 'Features',
        content: 'Explore the powerful features including real-time collaboration, intuitive design, and seamless integration with your favorite tools.',
    },
    {
        id: 3,
        title: 'Pricing',
        content: 'Choose from flexible pricing plans to suit individuals, small teams, and large enterprises. No hidden fees, cancel anytime.',
    },
    {
        id: 4,
        title: 'FAQs',
        content: 'Find answers to frequently asked questions about our product, setup, billing, and customer support.',
    },
    {
        id: 5,
        title: 'Contact',
        content: 'Need help? Reach out to our support team via email or chat. We’re here to help 24/7.',
    },
];

const Tab_Component = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <div className={`${darkMode ? "bg-gray-400 m-4 flex flex-col items-center relative" : "m-4 flex flex-col items-center relative"}`}>
            <h1 className={`text-center font-serif mb-5 text-2xl"
            ${darkMode ? "text-white" : "text-black"}
                `}>Tab Component</h1>
            <button
                onClick={toggleDarkMode}
                className="font-semibold ">
                <img
                    src={darkMode ? light : dark}
                    className="inline-block w-8 h-8 absolute right-2 top-2" // Add some styling for the image
                />
            </button>
            <New_Tab
                item={tabsData}
                renderitem={(item) => (
                    <button
                        key={item.id}
                        className={`
                            ${activeTab === item.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}
                            ${darkMode ? "px-4 py-2 rounded-t-xl border font-medium bg-gray-800 text-white " : "px-4 py-2 rounded-t-xl border font-medium "}
                            ${darkMode && item.id === activeTab ? "bg-red-600" : ""} `}
                        onClick={() => setActiveTab(item.id)} // update the active tab
                    // aria-selected={activeTab === item.id} // used to indicate the selected tab to screen readers from the tab panel
                    // role="tab" // set the role to "tab"
                    >
                        {item.title}
                    </button>
                )}
            />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: activeTab * 0.5 }}
                // role="tabpanel"
                className={`border w-[520px] p-4 h-[125px] overflow-auto mt-2 ${darkMode ? "bg-gray-800 text-white"
                    : ""
                    }`}
            >
                {tabsData.find((item) => item.id === activeTab)?.content || "The Content Is not available"}
            </motion.div>
        </div >
    );
};

export default Tab_Component;