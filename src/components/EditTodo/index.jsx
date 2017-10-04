import React from 'react';

import {
  Button,
  CheckedBox,
  UncheckedBox
} from '../Buttons/index';

import './index.css';

const EditTodo = ({ todo, closeTodo, onChange }) => {
  const { title, checked, description } = todo;
  return (
    <div className="edit-todo">
      <div className="edit-todo__buttons">
        <Button className="simple bordered" onClick={() => closeTodo(true, todo)}>Save changes</Button>
        <Button className="simple bordered" onClick={() => closeTodo()}>Cancel</Button>
      </div>
      <div className="edit-todo__title">
        <input
          type="text"
          name="title"
          placeholder="input todo title"
          value={title}
          onChange={onChange} />
      </div>
      <div className="edit-todo__check">
        {checked
          ? <UncheckedBox onClick={this.onCheck} />
          : <CheckedBox onClick={this.onCheck} />
        }
        <span>Done</span>
      </div>
      <div className="edit-todo__description">
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={onChange}/>
      </div>
    </div>
  );
};

export default EditTodo;

// export default class EditTodo extends Component {
//
//
//   render() {
//     const { title, checked, description } = todo;
//     return (
//       <div className="edit-todo">
//         <div className="edit-todo__buttons">
//           <Button className="simple bordered" onClick={() => closeTodo(true, todo)}>Save changes</Button>
//           <Button className="simple bordered" onClick={() => closeTodo()}>Cancel</Button>
//         </div>
//         <div className="edit-todo__title">
//           <input
//             type="text"
//             name="title"
//             placeholder="input todo title"
//             value={title}
//             onChange={this.onChange} />
//         </div>
//         <div className="edit-todo__check">
//           {checked
//             ? <UncheckedBox onClick={this.onCheck} />
//             : <CheckedBox onClick={this.onCheck} />
//           }
//           <span>Done</span>
//         </div>
//         <div className="edit-todo__description">
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={description}
//             onChange={this.onChange}/>
//         </div>
//       </div>
//     );
//   }
// }
