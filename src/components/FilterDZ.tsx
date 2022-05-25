import React, {useState} from 'react';

type FilterPropsType = {
    correntMoney: Array<CorrentMoneyType>,
    callBack: (a: FilterType)=>void
}
type FilterType = 'all' | 'rubls' | 'dollars';
type CorrentMoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const FilterComponentDZ = (props: FilterPropsType) => {

    return <div>
        <button onClick={() => props.callBack('all')}>all</button>
        <button onClick={() => props.callBack('rubls')}>rubls</button>
        <button onClick={() => props.callBack('dollars')}>dollars</button>

        <ul>
            {props.correntMoney.map((u, i) => {
                return <li key={i}>
                    {u.banknots} : {u.value} : {u.number}
                </li>
            })}
        </ul>
    </div>
};