import reactDom from "react-dom";
import "./BuyModal.css";

const BuyModal = ({ showbuy, children, w, mh }) => {
  return reactDom.createPortal(
    <>
      {showbuy ? (
        <div className={`modalContainer-buy ${showbuy ? "showbuy" : ""}`}>
          <div
            className="buymodal"
            onClick={(e) => e.stopPropagation()}
            style={{ width: `${w}px`, height: `${mh}px` }}
          >
            <main className="modal_content-buy"> {children} </main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("buymodal")
  );
};
export default BuyModal;
