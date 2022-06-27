import React,{} from 'react';//importer 
import {
    NavLink,
    useHistory 
} from "react-router-dom";
import Store from "../../services/Store";
import "./Header.css";

const Header = (props) =>{
    const {token,updateToken} = props;
    const store = new Store();
    const history = useHistory();

    //const [key, setkey] = useLocalStorage("user", "");
    // window.addEventListener('storage', () => {
    //   let key2 = JSON.parse(store.getStorage('user'));
    //   console.log(key2);
    //   setKey(key2);
    // });

    // const setKey = (k) => {
    //   key = k;console.log(key)
    // }

    const deconnect = ()=>{
      history.push("/connexion");
      store.removeStorage("user");
      updateToken(null);
    }

    return (
        <React.Fragment>
            <div id="dashboard" className="fixed-top">
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div className="container-fluid">
                        <div className="navbar-brand" >Reactjs</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={token === null ? "nav-item d-none" : "nav-item"}>
                                    <NavLink className={isActive =>"nav-link" + (!isActive ? " unselected" : "")} to='/accueil'>Accueil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/logs'>Logs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/formulaires'>Formulaires</NavLink>
                                </li>
                                <li className={token !== null ? "nav-item d-none" : "nav-item"}>
                                    <NavLink className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}  to='/connexion'>Connexion</NavLink>
                                </li>
                                <li className={token !== null ? "nav-item d-none" : "nav-item"}>
                                    <NavLink className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}  to='/inscription'>Inscription</NavLink>
                                </li>
                                <li className={token === null ? "nav-item d-none" : "nav-item"}>
                                    <div className="nav-link" >
                                      <button type="button" className="btn btn-outline-danger btn-sm" onClick={deconnect}>Déconnexion</button>
                                    </div>
                                </li>
                                <li className="nav-item">
                                  {/* {
                                    token !== null && (<div className="nav-link">{token["email"]}</div>)
                                  } */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

/*
// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }
  
*/
export default Header;