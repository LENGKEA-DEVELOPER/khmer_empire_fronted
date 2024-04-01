import React from 'react';
 

const Title = ({ title }) => {
    return (
        <h3 className="max-sm:text-lg sm:text-2xl md:text-2xl lg:text-2xl uppercase font-bold  ">
            {title}
        </h3>
    );
};

export default Title;