import reactDom from "react-dom";
import "./NavModal.css";

const NavModal = ({ show, children, w, mh }) => {
  return reactDom.createPortal(
    <>
      {show ? (
        <div className={`nav-modalContainer ${show ? "nav-show" : ""}`}>
          <div
            className="navmodal"
            onClick={(e) => e.stopPropagation()}
            style={{ width: `${w}px`, height: `${mh}px` }}
          >
            <main className="nav-modal_content"> {children} </main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("navmodal")
  );
};

export default NavModal;
