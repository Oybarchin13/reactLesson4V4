import React from 'react';
import './components/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhoneAndroid } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function App(props) {
  return (
    <div className='div'>
      <header>
        <h6>Overview Page</h6>
        <div className="icon">
          <p><FaComputer /></p>
          <p><MdPhoneAndroid /></p>
          <p><FaTabletAlt /></p>
        </div>
        <div className="header-right">
          <button className='btn btn-outline-danger'>Free Download</button>
        </div>
      </header>
      <div className="header-bottom">
        <div className="menu">
          <h3>Start Bootstrap</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>
        </div>
        <button className='btn btn-outline-dark'><FaCartShopping /> Cart</button>
      </div>
      <div className="shop">
        <h1>Shop in style</h1>
        <p>With this shop hompeage template</p>
      </div>
      <div className="card-container-big">
        <div className="card-container">
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="text">
              <h4>Fancy Product</h4>
              <p>$40.00 - $80.00</p>
            </div>
            <button className='btn btn-outline-dark'>View options</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default App;