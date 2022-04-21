import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import Sale from '../components/Sale'
import Newsletter from '../components/Newsletter'
const HomePage = () => {

  const params = useParams()
  const dispatch = useDispatch()

  const keyword = params.keyword

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <>
     <HeroSection/>
     <Categories/>
     <h1 className='pt-5 px-5 px-md-0 text-center'>Latest Products</h1>
     {loading ? (
        <Loader />
        ) : error ? (
        <Message variant='danger'>{error}</Message> 
        ) : (
          <>
          <Row className='mx-5 mx-md-0'>
            {products.slice(0,4).reverse().map((product) => (
              <Col key={product._id} md={6} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <Sale/>
      <Newsletter/>
    </>
  )
}

export default HomePage