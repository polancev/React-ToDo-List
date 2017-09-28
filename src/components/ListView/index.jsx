import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Todos from '../Todos/index';
import Categories from '../Categories/index';
import './index.css';

// const ListView = ({ match }) => {
//     const { category } = match.params;
//     return (
//         <div className="app">
//             <Link to={"/"}>
//                 <h2>To-Do List</h2>
//             </Link>
//             <div className="main">
//                 <div className="left-panel">
//                     <Categories selectedCategory={category} />
//                 </div>
//                 <div className="right-panel">
//                     <Todos selectedCategory={category} />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
//
// export default ListView;


export default class ListView extends Component {
  componentWillUpdate() {

  }

  render() {
    const { category } = this.props.match.params;
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
    )
  }
}
