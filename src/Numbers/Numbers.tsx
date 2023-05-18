import React from 'react';

interface INumbersProps {
    num: number[];
}

const Numbers: React.FC<INumbersProps> = (props) => {
    return (
        <div className="num">
            {props.num.map((number, index) => (
                <div className="circle" key={index}>{number}</div>
            ))}
        </div>
    );
};

export default Numbers;