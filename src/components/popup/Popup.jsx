import React from 'react';
import './popup.css';
import Comment from '../comment/Comment.jsx';

export default function Popup({ visible, setVisible, id }) {
  return (
    <>
      {visible ? (
        <div id="popup" className="modal">
          <div className="modal-content">
            <div className="popup__header">
              <h4>Comments</h4>
              <span className="close" onClick={() => setVisible(false)}>
                X
              </span>
            </div>
            <Comment propKey={id} />
          </div>
        </div>
      ) : null}
    </>
  );
}
