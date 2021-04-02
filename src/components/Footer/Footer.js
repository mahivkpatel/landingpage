import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="#">Js developer</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;