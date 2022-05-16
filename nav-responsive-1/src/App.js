import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="logo">
          <h3>Dailly</h3>
        </div>
        <div className="main-menu-pc">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        <div className="main-menu-mobile">
          <div className="dropdown-center">
            <button className="btn" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
            <div className="drop-nav-menu-mobile">
              <ul className="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">Product</a></li>
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
