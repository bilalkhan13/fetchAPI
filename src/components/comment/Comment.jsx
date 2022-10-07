import React, { useState, useEffect } from 'react';
import './comment.css';

export default function Comment({ propKey }) {
  const [items, setItems] = useState([]);
  const [dataisLoaded, setDataisLoaded] = useState([]);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((res) => {
        setDataisLoaded(true);
        setItems(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (!dataisLoaded)
    return (
      <div>
        <h1> Pleses wait some time.... </h1>{' '}
      </div>
    );

  return (
    <div className="container__comments">
      {!items.postId === propKey ? 'No data found' : null /*this statement is in progress */}
      {items
        .filter((item) => item.postId === propKey)
        .map((item) => {
          return (
            <>
              <section className="comment__box">
                <h3 className="comment__by">Post Id: {item.postId}</h3>
                <h3 className="comment__by">Comment by: {item.name}</h3>
                <p className="comment__id">Comment ID: {item.id}</p>
                <p className="comment__content">Message: {item.body}</p>
                <p className="comment__content">Comment by: {item.email}</p>
              </section>
            </>
          );
        })}
    </div>
  );
}
