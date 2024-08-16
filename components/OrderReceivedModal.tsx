import React from 'react';

const HiddenCheckboxModal: React.FC = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">open modal</label>

      {/* Hidden checkbox to toggle modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle hidden" />

      {/* Modal structure */}
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
      </div>
    </>
  );
};

export default HiddenCheckboxModal;
