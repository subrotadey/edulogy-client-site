const FeatureInfoModal = () => {
    return (
        <div 
        className="background h-72 w-full opacity-80 rounded-lg  shadow-lg shadow-cyan-500/50"
        style={{ backgroundImage: "url('https://i.ibb.co/x2PSxxR/banner.jpg')", backgroundSize: "cover"}}
        >
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="btn flex">Click for more information</label>


          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
              <iframe
            // src="https://www.youtube.com/embed/8pKjULHzs0s"
            className="modal-style w-1/2 h-64 w-80 "
            title="YouTube video player"
            allowFullScreen="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
            </div>
          </div>
        </div>
    );
};

export default FeatureInfoModal;