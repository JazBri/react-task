import React from "react";
import Task from "./Task";


class List extends React.Component {
  //Muestra la lista recibida console.log(this.props.tasksList);
  pendingTasks = () => this.props.tasksList.filter(task => !task.done)
  

  render() {
    return (
      <>

        {this.pendingTasks().map((task, key) => 
          (<Task task={task} onChangeState={ () =>
            this.props.onChangeTaskStatus( task ) } key={key} 
          />)
        )}
        
      </>

    )
  }
}

export default List