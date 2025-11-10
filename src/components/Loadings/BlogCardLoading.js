import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogCardLoading = () => {
  return (
    <>
      <Skeleton height="180px" width='100%' className='mb-2' />
      <Skeleton height="6px" width='80px' className='mb-1' />

      <Skeleton height="10px" width='100%' />
      <Skeleton height="10px" width='85%' className='mb-2' />

      <Skeleton height="7px" width='100%' count={3}/>
      <div className="d-flex mt-2">
        <Skeleton height="30px" width='80px' />
        <Skeleton height="30px" width='100px' className='mx-2' />
      </div>
    </>
  )
}

export default BlogCardLoading