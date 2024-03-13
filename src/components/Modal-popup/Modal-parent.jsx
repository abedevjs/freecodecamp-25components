import { useState } from "react";
import ModalChild from "./Modal-child";

function ModalParent() {
  function handleOnClose() {}
  const [openModal, setOpenModal] = useState(false);

  function handleOnClick() {
    setOpenModal(!openModal);
  }
  function handleOnClose() {
    setOpenModal(false);
  }
  return (
    <div>
      <button onClick={handleOnClick}>Open Modal</button>
      {openModal && (
        <ModalChild onClose={handleOnClose} id="some-id" title={<Title />} />
      )}
    </div>
  );
}

function Title() {
  return <p>This is title component</p>;
}
export default ModalParent;
