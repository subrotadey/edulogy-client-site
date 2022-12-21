import { BsPlayCircle } from "react-icons/bs";

const FeatureInfoModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn btn-ghost text-white flex items-stretch my-auto">
                <div className="self-center my-auto"><BsPlayCircle className="text-6xl"></BsPlayCircle></div>
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <iframe
                  src="https://www.youtube.com/embed/8pKjULHzs0s"
                  className="modal-style"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">Close</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FeatureInfoModal;