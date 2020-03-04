import React from "react";
import Popup from "reactjs-popup";
import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./Nav.css";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
};
const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
};

const Nav = () => (
    <div style={styles}>
        <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
    </div>
);

export default Nav;