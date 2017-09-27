import React, { Component } from 'react';
import Todos from '../Todos/index';
import Categories from '../Categories/index';
import './index.css';

const ListView = ({ match }) => {
  const { category } = match.params;
  console.log('cat:', category)
  return (
    <div className="app">
      <h2>To-Do List</h2>
      <div className="main">
        <div className="left-panel">
          <Categories selectedCategory={category} /> 
        </div>
        <div className="right-panel">
          <Todos selectedCategory={category} /> 
        </div>
      </div>
    </div>
  );
}


export default ListView;


// export default class ListView extends Component {
//   constructor(props) {
//     super(props);
//     const { category } = props.match;
//     this.setState({ category });
//   }

//   componentDidMount = () => {
    
//   }
  

//   render() {
//     const { category } = this.state;
//     return (
//       <div className="app">
//         <h2>To-Do List</h2>
//         <div className="main">
//           <div className="left-panel">
//             <Categories selectedCategory={category} />
//           </div>
//           <div className="right-panel">
//             <Todos selectedCategory={category} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
