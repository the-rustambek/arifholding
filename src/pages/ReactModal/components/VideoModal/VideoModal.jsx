import reactDom from "react-dom";
import "./VideoModal.css";

const VideoModal = ({ show, children, w, mh }) => {
  return reactDom.createPortal(
    <>
      {show ? (
        <div className={`modalContainer ${show ? "show" : ""}`}>
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ width: `${w}px`, height: `${mh}px` }}
          >
            <main className="modal_content-video"> {children} </main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("video-modal")
  );
};
export default VideoModal;
