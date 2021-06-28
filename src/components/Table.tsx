import React from 'react'

interface ITable {
    sales: any[]
}

const Table: React.FC<ITable> = ({ sales }) => {

    const columns = ['WEEK ENDING', 'RETAIL SALES', 'WHOLESALE SALES', 'UNITS SOLD', 'RETAILER MARGIN']
    
    return (
        <div>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sales.map(data => (
                        <tr>
                        {Object.keys(data).map(entry => (
                            <th style={{border: 'thin solid'}}>{data[entry]}</th> 
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
