import reactDom from "react-dom";
import "./ModalSucces.css";

const ModalSucces = ({ shows, children, w, mh }) => {
  return reactDom.createPortal(
    <>
      {shows ? (
        <div className={`modalContainers ${shows ? "shows" : ""}`}>
          <div
            className="modals"
            onClick={(e) => e.stopPropagation()}
            style={{ width: `${w}px`, height: `${mh}px` }}
          >
            <main className="modal_contents"> {children} </main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modals")
  );
};
export default ModalSucces;
