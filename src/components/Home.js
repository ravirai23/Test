import React from 'react';

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png' />
        </div>
        <div className='text-wrapper item'>
          <span>Creative Cloud All Apps</span>
          <span>₹4,230.30/month Inclusive of GST</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png' />
        </div>
        <div className='text-wrapper item'>
          <span>Photoshop</span>
          <span>₹1,675.60 /month Inclusive of GST</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png' />
        </div>
        <div className='text-wrapper item'>
          <span>Illustrator</span>
          <span>₹1,675.60 /month Inclusive of GST</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png' />
        </div>
        <div className='text-wrapper item'>
          <span>Premiere Rush</span>
          <span>₹1,675.60 /month Inclusive of GST</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png' />
        </div>
        <div className='text-wrapper item'>
          <span>After Effects</span>
          <span>₹1,675.60 /month Inclusive of GST</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
