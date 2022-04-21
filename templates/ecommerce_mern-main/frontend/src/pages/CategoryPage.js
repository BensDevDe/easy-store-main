import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions'

const CategoryPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const category = params.name
    const keyword = params.keyword
  
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
  
    useEffect(() => {
      dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    console.log(category)
  return (
    <Container>
    <h1 className='pt-5 px-5 px-md-0 text-center'>{category}</h1>
    {loading ? (
       <Loader />
       ) : error ? (
       <Message variant='danger'>{error}</Message> 
       ) : (
         <>
         <Row className='mx-5 mx-md-0'>
           {products.map((product) => (product.category === category) && (      
             <Col key={product._id} md={6} xl={3}>
               <Product product={product} />
             </Col>
           ))}
         </Row>
       </>
     )}

   </Container>
  )
}

export default CategoryPage