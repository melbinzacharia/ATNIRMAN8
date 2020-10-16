import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import product from '../products';
import Rating from './Rating';

const Product = ({ product }) => {
    return (
       < Card className='my-3 py-3 rounded'>
         <Link  to={'/product/${product._id}'} >
           < Card.Img src={product.image} variant='top' />
           
          </Link >
          < Card.Body>
            <Link  to={'/product/${product._id}'} >
              < Card.Title as='h4'>
                 <h4>{product.name}</h4>
              </Card.Title>
              </Link >
              <Card.Text as='div'>
                
                    <Rating 
                      value={product.rating}  
                      text={product.numReviews}   
                    />
                

              </Card.Text>
              <Card.Text as='h3'>
                RS.{product.price}
              </Card.Text>
            
          </Card.Body>
       </Card>
       
    )
}


export default Product 

