import { useState } from 'react';
import './StocksAndTips.css';
import { assets } from '../../assets/assets';

const stocksData = [
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
];

const optionsData = [
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
    { name: 'Jackson PLC', price: '£103', change: '2.4%' },
];

const tipsData = [
    {
        title: 'Gold is up 20%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: assets['gold'],
    },
    {
        title: 'BitCoin is up 20%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: assets['bitcoin'],
    },
    {
        title: 'Real-Estate is up 20%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: assets['realestate'],
    },
    {
        title: 'Gold is up 20%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: assets['gold'],
    },
];

const StocksAndTips = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < tipsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='container'>
            <div className="container-left">
                <div className="section-header">
                    <h3>Stocks</h3>
                    <button className="buy-new-button">Buy New</button>
                </div>
                <ul className="list-group">
                    {stocksData.map((stock, index) => (
                        <li key={index} className="list-group-item">
                            <span>{stock.name}</span>
                            <span/>
                            <span/>
                            <span>{stock.price}</span>
                            <span className="change">{stock.change}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container-center">
                <div className="section-header">
                    <h3>Options</h3>
                    <button className="buy-new-button">Buy New</button>
                </div>
                <ul className="list-group">
                    {optionsData.map((option, index) => (
                        <li key={index} className="list-group-item">
                            <span>{option.name}</span>
                            <span/>
                            <span/>
                            <span>{option.price}</span>
                            <span className="change">{option.change}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container-right">
                <h3 className="tips-header">Tips</h3>
                <div className="carousel">
                    <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {tipsData.map((tip, index) => (
                            <div key={index} className="carousel-item">
                                <div>
                                    <h4>{tip.title}</h4>
                                    <p>{tip.description}</p>
                                </div>
                                <img src={tip.icon} alt={tip.title} />
                            </div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
                        <div className="carousel-indicators">
                            {tipsData.map((_, index) => (
                                <button
                                    key={index}
                                    className={index === currentIndex ? 'active' : ''}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        <button onClick={handleNext} disabled={currentIndex === tipsData.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StocksAndTips;
