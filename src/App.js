//Importar el framework y el uso del estado, para manejar la información
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  // Función para manejar el cambio en el campo de entrada de nueva tarea
  /**handleInputChange se utiliza para actualizar el estado newTask cuando se produce un cambio en el campo de entrada de nueva tarea. */
  handleInputChange = event => {
    this.setState({ newTask: event.target.value });
  };

  // Función para agregar una nueva tarea
  /**addTask se encarga de agregar una nueva tarea a la lista. 
   * 
   * Primero, verifica que el valor de newTask no esté vacío y luego crea una nueva matriz de tareas actualizada con la nueva tarea agregada.
   * 
   *  Finalmente, actualiza el estado con la matriz actualizada y restablece el campo de entrada de nueva tarea. */
  addTask = () => {
    const { tasks, newTask } = this.state;

    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      this.setState({ tasks: updatedTasks, newTask: '' });
    }
  };

  // Función para marcar una tarea como completada
  /**completeTask se utiliza para marcar una tarea como completada. Obtiene el índice de la tarea y crea una copia actualizada de la matriz de tareas. Marca la tarea correspondiente como completada cambiando la propiedad completed a true.
   * 
   *  Luego, actualiza el estado con la matriz actualizada. */
  completeTask = index => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    this.setState({ tasks: updatedTasks });
  };

/**el método render se muestra el título de la lista de tareas y un campo de entrada de texto para agregar nuevas tareas. También hay un botón "Agregar" que llama a la función addTask cuando se hace clic. */
  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          value={newTask}
          onChange={this.handleInputChange}
          placeholder="Agregar una tarea"
        />
        <button onClick={this.addTask}>Agregar</button>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => this.completeTask(index)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
