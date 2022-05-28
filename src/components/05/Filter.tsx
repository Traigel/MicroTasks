import React, {useState} from 'react';
import {FilterComponentDZ, FilterType} from "./FilterDZ";

export const FilterComponent = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let correntMoney = money

    const [filter, setFilter] = useState('all')

    if (filter === 'all') {
        correntMoney = money
    }
    if (filter === 'rubls') {
        correntMoney = money.filter((u) => u.banknots === 'RUBLS');
    }
    if (filter === 'dollars') {
        correntMoney = money.filter((u) => u.banknots === 'Dollars');
    }

    let onClickFilterHandler = (banknot: FilterType) => {
        console.log(banknot)
        setFilter(banknot)

    }

    return <div>
        <FilterComponentDZ correntMoney={correntMoney} callBack={onClickFilterHandler}/>
    </div>
};