import MenuList from "./Menu-list";
import MenuItem from "./Menu-item";
import "./styles.css";

function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
