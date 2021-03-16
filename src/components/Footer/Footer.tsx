import React from "react";
import rsLogo from "../../assets/rs_logo.svg";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.github}>
        <ul>
          <li>
            <a href="https://github.com/borodichAlex">borodichAlex</a>
          </li>
          <li>
            <a href="https://github.com/PavelMGs">PavelMGs</a>
          </li>
          <li>
            <a href="https://github.com/nickomo">nickomo</a>
          </li>
          <li>
            <a href="https://github.com/StanislavNarckevich">
              StanislavNarckevich
            </a>
          </li>
        </ul>
      </div>
      <div className={s.year}>2021</div>
      <div className={s.logo}>
        <a target="_blank" rel="noreferrer" href="https://rs.school/js/">
          <img src={rsLogo} alt="rs_logo" />
        </a> 
      </div>
    </footer>
  );
}
