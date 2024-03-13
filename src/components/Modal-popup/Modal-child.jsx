import "./modal.css";

function ModalChild({
  onClose,
  id,
  title = "Title Backup",
  body = "Body Backup",
  footer = "Footer Backup",
}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          {title && title}
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
        </div>
        <div className="body">{body && body}</div>
        <div className="footer">{footer && footer}</div>
      </div>
    </div>
  );
}

export default ModalChild;
