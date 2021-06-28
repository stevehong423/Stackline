//Import React, Redux Hooks, CSS File
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import stackline_logo from './icon/stackline_logo.svg';
import './App.css';

//Import Components
import Bio from './components/Bio';
import Graph from './components/Graph';
import Table from './components/Table';

//Import FetchData Action & Function
import { fetchData } from './actions/postActions';
import { FETCH_DATA } from "./actions/types";

//Define Interface For Props
interface IProps {
  items: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
    sales: any[];
  }
};

const App: React.FC<IProps> = (props: { items }) => {

  //Initialize Dispatch
  const dispatch = useDispatch();

  //Define FetchData Function
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

  //Call FetchData Within UseEffect()
  useEffect(() => {
    fetchData()
  }, []);  
  
  return (
    <div className='App'>
      {props.items && (
        <div>
          <div className="outer">
            <img src={stackline_logo} alt='logo' className='logo' />
          </div>
          <div className='grid-container'>
            <div className='bio'>
              <Bio title={props.items.title} subtitle={props.items.subtitle} image={props.items.image} tags={props.items.tags} />
            </div>
            <div className='graph'>
              <Graph sales={props.items.sales} />
            </div>
            <div className='table'>
              <Table sales={props.items.sales}/>
            </div>    
          </div>
        </div>       
      )}     
    </div>
  );
};

//Define MapStateToProps
const mapStateToProps = state => ({
  items: state.items[0]
})

//Connect MapStateToProps To App Component (Redux)
export default connect(mapStateToProps, { fetchData })(App);
