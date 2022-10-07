import React, { useState, useEffect } from 'react';
import './post.css';
import Popup from '../popup/Popup';

export default function Post() {
  const [items, setItems] = useState([]);
  const [dataisLoaded, setDataisLoaded] = useState([]);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(false);

  function handleClick() {
    setVisible((prev) => !prev);
  }
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
    <div className="container__posts">
      <Popup visible={visible} setVisible={setVisible} id={key} />
      {items.map(({ id, title, body }) => {
        return (
          <article
            key={id}
            className="post"
            onClick={() => {
              handleClick();
              setKey(id)
            }}
          >
            <h3 className="post__title">{title}</h3>
            <p className="post__content">{body}</p>
          </article>
        );
      })}
    </div>
  );
}
