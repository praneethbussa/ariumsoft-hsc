import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteTask(props) {
  return (
    <div>
      <Modal {...props} size="md" centered>
        <div className='flex-column pt-5 py-4'>
          <div className='d-flex justify-content-center headings'>Are you sure you want to</div>
          <div className='d-flex justify-content-center headings'>delete the selected task</div>
        </div>
        <div className='d-flex flex-row justify-content-center mb-5'>
          <Button id='cancel' className='bg-white mx-2' onClick={props.onHide}>Cancel</Button>
          <Button id='save' className='mx-2' style={{width:'37%'}} onClick={props.onHide}>Delete</Button>
        </div>
      </Modal>
    </div>
  )
}
