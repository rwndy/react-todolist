import React from 'react';

  const TodosItem = (props) => {
    return (
      <div>
        <ul>
          { props.items.map((item, i) => <li key={i}>{item}</li>) }
        </ul>
      </div>
    );
  }
 
export default TodosItem;