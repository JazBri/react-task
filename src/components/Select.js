import React from 'react';
import Task from "./Task";

class Select extends React.Component{
    constructor(props){
        super(props);
        
    }
    //Funcion para mostrar los done:true
    addTaskShow =(task)=>{
    //  console.log(task);
     // console.log(this.state.tasks);
    }

    //Funcion que diferencia las tareas verdaderas de las falsas.
    showTasks =(e)=>{
      //e.preventdefault();
        const list = this.props.tasksList.map((tacksS =>{
            if(tacksS.done !== false){
            console.log('Tareas true: ', tacksS);
            this.addTaskShow(tacksS); 
        }
        }))
    }  

    convert(e){
        e.preventDefault();
        console.log('Lista:', this.props.tasksList);
    }

    guardarSelect(select){   
        console.log(select);
        const done =[];
        if(select === 'FINALIZADAS'){
            this.showDoneTasks();
            console.log(this.props.tasksList.filter(task=>task.done));
            done.push(this.props.tasksList.filter(task=>task.done));
            console.log(done);
        }
    }

    //Filtra las tareas terminadas
    showDoneTasks = () => this.props.tasksList.filter(task=>task.done)
    showNotDoneTasks = () => this.props.tasksList.filter(task=>!task.done);
    showAllTasks = () => this.props.tasksList;

    render(){
        return(
            <>
                <form>
                    <div className="form-group">      
                        <select className="form-control" 
                            onClick ={ e=> this.guardarSelect(e.target.value)
                            }
                        >         
                            <option>FINALIZADAS</option>
                            <option>EN PROCESO</option>
                            <option>ALL</option>
                        </select>
                    </div>
                </form>
                

                <div className="card mb-3">
                    <div className="card-header">
                        Tareas Finalizadas
                    </div>
                <div className="card-body">
                    {this.showDoneTasks().map((task, key) =>( 
                        <>
                            <h5 className="card-title">Tarea {task.id} {task.name}</h5>
                            <p className="card-text">{task.description}</p></>
                    ))}
                </div>
            </div>

            <div className="card mb-3">
                    <div className="card-header">
                        Tareas en Proceso
                    </div>
                <div className="card-body">
                    {this.showNotDoneTasks().map((task, key) =>( 
                        <>
                            <h5 className="card-title">Tarea {task.id} {task.name}</h5>
                            <p className="card-text">{task.description}</p></>
                    ))}
                </div>
            </div>

            <div className="card mb-3">
                    <div className="card-header">
                        Todas las Tareas
                    </div>
                <div className="card-body">
                    {this.showAllTasks().map((task, key) =>( 
                        <>
                            <h5 className="card-title">Tarea {task.id} {task.name}</h5>
                            <p className="card-text">{task.description}</p></>

                    ))}
                </div>
            </div>
            </>
        );
    }
}

export default Select

/**
 * Por el momento voy a poner el div de las Cards en Select.js, ya que 
 * le quiero quitar el botón 'Terminada!' dado que da error.
 * 
 * 
 * Queda además ver cómo comparar el valor del Select
 */