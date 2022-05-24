import React from 'react';

type NewComponentPropsType = {
    topCars: Array<CarsType>
}
type CarsType = {
    id: number,
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return <div>
        <table>
            <caption>Top Cars</caption>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.topCars.map((u) =>
                <tr key={u.id}>
                    <td>{u.manufacturer}</td>
                    <td>{u.model}</td>
                </tr>
            )}
        </table>
    </div>
};