import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import {Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    const [products, setProducts] = useState([])
     
      
    useEffect(() => {
             const fetchProducts = async ()=> {
                const { data } = await axios.get('/api/products')
                
                setProducts(data)
                }
             fetchProducts()
    },[])
                
    return (
        <div>
            <Row>
                
                  {products.map(product =>(
                    <Col sm={12} md={6} lg={3}>
                        <Product product={product} />
                    </Col> 
                    ))}
                
            </Row>
        </div>
    )
}

export default HomeScreen
