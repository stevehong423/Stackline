//Import React
import React from 'react'

//Define Interface With Sales Set To An 'Any' Array
interface ITable {
    sales: any[]
}

//Destructure Sales To Display Information On Table
const Table: React.FC<ITable> = ({ sales }) => {

    //Create Array With Column Names To Display On Top Of Table
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
            ))};
          </tbody>
        </table>
      </div>
    )
};

export default Table;
