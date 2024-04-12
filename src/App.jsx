import React from 'react';
import './components/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhoneAndroid } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

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

      </div>
      <div className="shop">
        <h1>Welcome to Blog Home!</h1>
        <p>A Bootstrap 5 starter layout for your next blog homepage</p>
      </div>

      <div className="container d-flex mt-5" style={{ gap: "20px" }}>
        <div className="cont-left">
          <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
          <div className="text">
            <h1>Featured Post Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
              Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button className='btn btn-primary'>Read more</button>
          </div>
        </div>
        <div className="cont-right d-flex flex-column  gap-3">

          <Card className="cardd w-100">
            <Card.Header className='w-100'>Search</Card.Header>
            <Card.Body className='w-100 py-0' >
              <InputGroup>
                <Form.Control
                  placeholder="Enter search term"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  Go!
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
          {/* ======== */}
          <Card className="cardd w-100">
            <Card.Header className='w-100'>Categories</Card.Header>
            <Card.Body className='d-flex justify-content-around w-100 py-0' >
              <div className='d-flex flex-column'>
                <a href="#">Web Design</a>
                <a href="#">HTML</a>
                <a href="#">Freebies</a>
              </div>
              <div  className='d-flex flex-column'>
                <a href="#">JavaScript</a>
                <a href="#">CSS</a>
                <a href="#">Tutorials</a>
              </div>

            </Card.Body>
          </Card>
          {/* ======== */}
          <Card className="cardd w-100">
            <Card.Header className='w-100'>Side Widget</Card.Header>
            <Card.Body className='w-100 py-0' >
            You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
            </Card.Body>
          </Card>

        </div>
      </div>

<div className="container mt-5">
  <div className="cont-left gap-3 d-flex flex-column">
  <div className='d-flex gap-3'>
  <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='d-flex gap-3'>
  <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='d-flex gap-3'>
  <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card className='w-50' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  </div>
  </div>
</div>
<div className='container d-flex justify-content-center m-5'>
<Pagination>
      
      <Pagination.Item>Newer</Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      
      
      <Pagination.Item>{15}</Pagination.Item>
      <Pagination.Item>Older</Pagination.Item>
    </Pagination>
</div>

      <div className="footer mt-3">
        <p>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default App;