import React from 'react';

class Select extends React.Component{
    constructor(){
        super()
        this.state = { condicion: ' '}
    //Funcion para mostrar los done:true
    // addTaskShow =(task)=>{
    //  console.log(task);
     // console.log(this.state.tasks);
    // }
    }
    //Funcion que diferencia las tareas verdaderas de las falsas.
    showTasks =(e)=>{
      //e.preventdefault();
        const list = this.props.tasksList.map((tacksS =>{
            if(tacksS.done !== false){
            console.log('Tareas true: ', tacksS);
            // this.addTaskShow(tacksS); 
        }
        }))
    }  

    convert(e){
        e.preventDefault();
        console.log('Lista:', this.props.tasksList);
    }

    guardarSelect(select){   
        
        this.setState({condicion: select});
        
        
        
        // const done =[];
        // if(select === 'ALL'){
        //     this.showDoneTasks();
        //     console.log(this.props.tasksList.filter(task=>task.done));
        //     done.push(this.props.tasksList.filter(task=>task.done));
        //     console.log(done);
        // }
    }

    //Filtra las tareas terminadas

    taskList = () => {
        
        let select = 'ALL';
        if(select === 'FINALIZADAS'){
        return this.props.tasksList.filter(task=>task.done)
        }else if(select === 'EN PROCESO'){
            return this.props.tasksList.filter(task=>!task.done)
        }else if(select === 'ALL'){
            return this.props.tasksList;
        }else{
            console.log('El state falla');
        }
    }

    showDoneTasks = () => this.props.tasksList.filter(task=>task.done)
    showNotDoneTasks = () => this.props.tasksList.filter(task=>!task.done);
    showAllTasks = () => this.props.tasksList;


    render(){
        const a = 'Muestra el render';

        return(
            <>
{/* SELECT */}
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
                
{/* SELECT 1 */}
                <div className="card mb-3">
                    <div className="card-header">
                        Tareas
                    </div>
                
                <div className="card-body">
                    {this.taskList().map((task, key) =>( 
                        <>
                            <h5 className="card-title">Tarea {task.id} {task.name}</h5>
                            {a}
                            <p className="card-text">{task.description}</p></>
                    ))}
                </div>
            </div>

{/* SELECT 2 */}

            {/* <div className="card mb-3">
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
            </div> */}

{/* SELECT 3 */}

            {/* <div className="card mb-3">
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
            </div> */}
{/* FIN SELECT */}

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