import Todo from "./Todo"
import { useContext } from 'react';
import TodoContext from '../contexts/todoContext';


const HomePage = () => {

  const { todos, dispatch } = useContext(TodoContext)



  return (
    <>  
    <TodoContext.Provider value={{ todos, dispatch }}>

        <h1 className="text-center">My Home Page</h1>
        <h2 className="text-center">Global Statge Management: UseContext Example</h2>
        <div className="container-fluid">
            <div className="row">
                <Todo/>


            </div>


        </div>
        </TodoContext.Provider>

    </>
  )
}

export default HomePage