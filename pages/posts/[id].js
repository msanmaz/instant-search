import { getUserId } from 'lib/slice/countrySlice';
import React from 'react'
import { useSelector } from 'react-redux';
import { wrapper } from 'lib/store';
const Posts = () => {
    const selector = useSelector(state => state.productSlice)
    console.log(selector)
  return (
    <div>Posts</div>
  )
}

export default Posts


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    console.log(ctx.params)
    await store.dispatch(getUserId(ctx.params.id));
   });