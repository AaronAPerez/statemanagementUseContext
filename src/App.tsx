import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import TodoContext from "./contexts/todoContext"
import loginReducer from "./reducers/authReducer"
import LoginContext from './contexts/loginContext';



const App = () => {
  const [todos, todosDispatch] = useReducer(todoReducer, []);
  const [user, userDispatch] = useReducer(loginReducer, '')



  return (
    <>


      {/* <Counter/> */}
      {/* <Todo/> */}
      <LoginContext.Provider value={{ user, dispatch: userDispatch }}>

      <TodoContext.Provider value={{ todos, dispatch: todosDispatch }}>
     
  
        <MyNavbar />
        
        <HomePage />

      </TodoContext.Provider>

</LoginContext.Provider>




    </>
  );
};

export default App