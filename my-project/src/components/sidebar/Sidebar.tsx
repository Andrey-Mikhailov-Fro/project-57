import Panel from "./panel/Panel";
import "./Sidebar.scss";

function Sidebar() {
  const panelMainIcons = ["logo.svg", "bag.svg", "search.svg"];
  const additionalIcons = ["settings.svg", "exit.svg"];

  const menu = [
    { id: 1, icon: "bag.svg", text: "Organisations" },
    { id: 2, icon: "contractor.svg", text: "Contractors" },
    { id: 3, icon: "clients.svg", text: "Clients" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-panel">
        <Panel variant="main" icons={panelMainIcons} />
        <Panel variant="additional" icons={additionalIcons} />
      </div>
      <div className="sidebar-content">
        <div className="sidebar-title">
          <h3>Oak Tree Cemetery</h3>
          <p>Process Manager</p>
        </div>
        <hr className="sidebar-content-separator" />
        <div className="menu">
          {menu.map((item) => (
            <button
              key={item.id}
              className={item.id === 1 ? "menu-button menu-filled" : "menu-button menu-outline"}
            >
              <img src={`/${item.icon}`} className="outline-icon" />
              {item.text}
            </button>
          ))}
        </div>
        <div className="sidebar-copyrights">
          All Funeral Services © 2015-2025
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
