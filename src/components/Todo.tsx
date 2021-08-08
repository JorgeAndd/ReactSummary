import { useState } from 'react';
import Modal from './Modal';

interface TodoProps {
  title: string;
} 

function Todo(props: TodoProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && 
          <Modal onCancel={closeModal} onConfirm={closeModal} />
      }
    </div>
  );
}

export default Todo;
