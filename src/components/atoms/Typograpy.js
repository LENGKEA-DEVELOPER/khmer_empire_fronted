import React from 'react';


const Typograpy = ({ text }) => {
    return (
        // font-medium
        <p className="text-lg  text-neutral-500 dark:text-neutral-300 ">
            {text}
        </p>
    );
};

export default Typograpy;