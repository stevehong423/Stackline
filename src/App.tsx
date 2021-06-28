import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/postActions';
import './App.css';

//Components
import Bio from './components/Bio';
import Graph from './components/Graph';
import Table from './components/Table';

import { FETCH_DATA } from "./actions/types";

interface IProps {
  items: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
    sales: any[];
  }
}

const App: React.FC<IProps> = (props: { items }) => {

  const dispatch = useDispatch();

  const fetchData = () => {
    fetch('./stackline_frontend_assessment_data_2021.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_DATA,
        payload: data
    }))
  };

  useEffect(() => {
    fetchData()
  }, []);

  const state = useSelector(state => state)
  console.log(props.items)
  
  return (
    <div className='App'>
      {props.items && (
        <div>
          <div className="outer">
            <h1>Title</h1>
          </div>
          <div className='grid-container'>
          <div className='bio'>
          <Bio title={props.items.title} subtitle={props.items.subtitle} image={props.items.image} tags={props.items.tags} />
          </div>
          <div className='graph'>
            <Graph />
          </div>
          <div className='table'>
            <Table sales={props.items.sales}/>
          </div>    
          </div>
        </div>       
      )}     
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items[0]
})

export default connect(mapStateToProps, { fetchData })(App);
