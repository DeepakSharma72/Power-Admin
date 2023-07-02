import React from 'react';
import './widget.scss';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Person4Icon from '@mui/icons-material/Person4';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Widget({ type }) {
    let data;

    switch (type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: "See all users",
                icon: <Person4Icon
                    className='icon'
                    style={{
                        backgroundColor: '#ff000033',
                        color: 'crimson'
                    }} />,
                percentage: 'positive'
            };
            break;
        case "order":
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartIcon className='icon'
                    style={{
                        backgroundColor: '#daa52033',
                        color: 'goldenrod'
                    }}
                />,
                percentage: 'negative'
            };
            break;
        case "earning":
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: "View net earnings",
                icon: <AccountBalanceIcon className='icon'
                    style={{
                        backgroundColor: 'rgba(0,128,0,0.2)',
                        color: 'green'
                    }}
                />,
                percentage: 'positive'
            };
            break;
        case "balance":
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: "See details",
                icon: <CurrencyRupeeIcon className='icon'
                    style={{
                        backgroundColor: 'rgba(128,0,128,0.2)',
                        color: 'purple'
                    }}
                />,
                percentage: 'negative'
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && 'Rs'} 50,000</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage' style={data.percentage === 'positive' ? { color: 'green' } : { color: 'red' }}>
                    {
                        data.percentage === 'positive'
                            ?
                            < KeyboardDoubleArrowUpIcon />
                            :
                            <KeyboardDoubleArrowDownIcon />
                    }
                    20 %
                </div>
                {data.icon}
            </div>
        </div>
    )
}
