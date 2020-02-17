import React from "react"

class Task extends React.Component {
  
  changeStatus = () => {
    this.props.onChangeState(this.props.task);
  }

  modifyCard=()=>{
    console.log('Modificando ', this.props.task);
    console.log(this.props.task.description);
    
    //Usar el form
    let modify = prompt('Modificacion: ', this.props.task.description);
    this.props.task.description = modify;
    
    console.log(this.props.task.description);
    
    this.setState(this.state = {desc: modify});    
  }

  render() {
    const { name, description, id } = this.props.task
    return (
      <>
        <div className="card mb-3">
          <div className="card-header">
            Tarea
          </div>
          <div className="card-body">
            <h5 className="card-title">Tarea {id} {name}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary" onClick={this.changeStatus} >Terminada!</button>
            <br></br>
            <br></br>
            <button className="btn btn-primary" onClick={this.modifyCard} >Modificar</button>
          </div>
        </div>
      </>
    )
  }
}

export default Task