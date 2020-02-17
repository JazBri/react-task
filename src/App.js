import React from 'react';
import List from './components/List';
import Form from './components/Form';
import Select from './components/Select';

/**
 * AGREGAR UN SELECT DE FINALIZADAS, EN PROCESO, TODAS
 */

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: " ", description: "Realizando la tarea", done: false },
        { id: 2, name: " ", description: "Realizando la tarea", done: false },
        { id: 3, name: " ", description: "Realizando la tarea", done: true },
        { id: 4, name: " ", description: "Realizando la tarea", done: true }
      ],
      form: [{
        taskName: 'Hi',
        taskDescription:'bye' 
      }],
    }
  }

  handleInputChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  
  crearTarea =(e)=>{
    e.preventDefault();
      const task = {
        id: 0,
        name : this.state.taskName,
        description: this.state.taskDescription,
        done: false
    };
    this.addTask( task )
  }


  addTask = (task) => {
    task.id = this.state.tasks[this.state.tasks.length - 1].id + 1;
    this.state.tasks.push(task);

    const newTask = this.state.tasks;
    this.setState(this.state = { tasks: newTask });
    
  }


  changeTaskStatus = (task) => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id) taskEl.done = !taskEl.done
      return taskEl
    })
    this.setState({
      tasks: taskUpdated
    })
  }


  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-3">
            <div className="col mb-3">
              <Form
                onChange= {this.handleInputChange}
                onSubmit={this.crearTarea}
                form ={this.state.form}
              />
            </div>
            <div className="col">
              
              <List tasksList={this.state.tasks} onChangeTaskStatus={this.changeTaskStatus} />
              <Select tasksList={this.state.tasks} />
            </div>
          </div>
        </div>

      </>
    );

  }

}

export default App;
