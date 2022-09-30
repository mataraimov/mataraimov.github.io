import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h3>JOIN OUR NEWSLETTER</h3>
        <ul>
          <li>
            <a href="https://www.tiktok.com/@zara">TIKTOK</a>
          </li>
          <li>
            <a href="https://www.instagram.com/zara/">INSTAGRAM</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Zara">FACEBOOK</a>
          </li>
          <li>
            <a href="https://twitter.com/ZARA">TWITTER</a>
          </li>
          <li>
            <a href="https://es.pinterest.com/zaraofficial">PINTEREST</a>
          </li>
          <li>
            <a href="http://www.youtube.com/user/zara">YOUTUBE</a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv">SPOTIFY</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

/* <div className="footer__features">
  <div>
    <a href="/">Создать свою пиццу</a>
    <a href="/">Стань франчайзи</a>
  </div>
  <div>
    <a href="/">FAQ</a>
    <Link to="/career">Карьера</Link>
  </div>
  <Link to="/Adress">Адреса ресторанов</Link>
</div>
<div className="container">
  <div className="footer__copyright">
    <p>© Copyright 2004 — 2022 ОсОО «Пи Джей Сентрал Эйжа». Все права защищены.</p>
  </div>
</div> */
