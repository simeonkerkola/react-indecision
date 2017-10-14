import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  // Modal requires these 2 props
  <Modal
    isOpen={!!props.selectedOption} // !! converts string to true, and undef to false
    onRequestClose={props.handleClearSelectedOption} // close the modal w/ esc
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button
      onClick={props.handleClearSelectedOption}
      >
        Okay
    </button>
  </Modal>
)

export default OptionModal
