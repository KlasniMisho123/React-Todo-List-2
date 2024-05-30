import React from "react";
import ChecklistIcon from '@mui/icons-material/Checklist';


function Header() {
  return (
    <header className="header-div">  
        <h1>TodoList</h1><ChecklistIcon className="craft-icon"fontSize="large" />
    </header>
  );
}

export default Header;