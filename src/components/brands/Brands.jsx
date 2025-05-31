import React from 'react'
import Container from '../layout/Container'
import brand_one from '../../assets/brands/brand_one.png'
import brand_two from '../../assets/brands/brand_two.png'
import brand_three from '../../assets/brands/brand_three.png'
import brand_four from '../../assets/brands/brand_four.png'

function Brands() {
  return (
    <div className='my-[117px]'>
        <Container>
            <div className='flex justify-between'>
                <div>
                    <img src={brand_one} alt="brand_one_logo" />
                </div>
                <div>
                    <img src={brand_two} alt="brand_two_logo" />
                </div>
                <div>
                    <img src={brand_three} alt="brand_three_logo" />
                </div>
                <div>
                    <img src={brand_four} alt="brand_four_logo" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Brands