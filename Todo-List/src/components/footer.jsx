import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div>© {year}</div>
        </footer>
    );
}


export default Footer;