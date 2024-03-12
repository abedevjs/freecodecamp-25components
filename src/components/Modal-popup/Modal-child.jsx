import "./modal.css";

function ModalChild({
  onClose,
  id,
  title = "Title Backup",
  body = "Body Backup",
  footer = "Footer Backup",
}) {
  return (
    <div id={id || "Modal"} className="modal" onClick={onClose}>
      <div className="modal-content">
        <div className="header">
          {title && title}
          <span onClick={onClose}>&times;</span>
        </div>
        <div className="body">{body && body}</div>
        <div className="footer">{footer && footer}</div>
      </div>
    </div>
  );
}

export default ModalChild;
