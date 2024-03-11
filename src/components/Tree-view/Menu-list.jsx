import MenuItem from "./Menu-item";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length ? list.map((li) => <MenuItem item={li} />) : null}
    </ul>
  );
}

export default MenuList;
