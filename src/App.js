import "./App.css";

const navbarItem = [
  "File",
  "Edit",
  "Format",
  "View",
  "History",
  "Book",
  "Tools",
  "Help",
];

function App() {
  return (
    <div className="app-container">
      <h1 className="heading">Dropdown</h1>
      <div className="navbar">
        {navbarItem.map((item) => (
          <button type="button" className="nav-item">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
