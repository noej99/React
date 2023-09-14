import React from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

// yarn add react-contextmenu
const PopupMenu = () => {
  const divCss = { width: "300px", height: "300px", border: "black solid 3px" };
  return (
    <div>
      <ContextMenuTrigger id="cm" holdToDisplay={10}>
        <div style={divCss}></div>
      </ContextMenuTrigger>
      <ContextMenu id="cm">
        <MenuItem>
          <a href="https://www.naver.com">네이버</a>
        </MenuItem>
        <MenuItem
          onClick={() => {
            alert("ㅎㅇ");
          }}
        >
          메뉴2
        </MenuItem>
        <MenuItem>메뉴3</MenuItem>
      </ContextMenu>
    </div>
  );
};

export default PopupMenu;
