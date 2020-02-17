import React from "react";


class Form extends React.Component {
  constructor(props){
    super(props);
    console.log('Llamada desde Form a App: ', props);
  }

    render() {
      // const {onSubmit, onChange, form} = this.props;
      return (
        <div className="card">
          <div className="card-header">
            Nueva tarea
          </div>
          <div className="card-body">
            <form onSubmit={this.props.onSubmit} >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Título</label>
                <input type="text" name ="taskName" className="form-control" value={this.props.taskName} onChange={this.props.onChange}></input>

              </div>
              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input type="text" name ="taskDescription" className="form-control" value={this.props.taskDescription} onChange={this.props.onChange}></input>
              </div>
              <button type="submit" className="btn btn-primary">Enviar tarea</button>
            </form>
          </div>
      </div>
        
      )

    }
  
}


export default Form