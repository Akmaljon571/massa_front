import { Route, Routes } from 'react-router-dom'
import { Home, Category, Like, Order } from '../page'
import { Error } from '../components'

function Routers () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/*' element={<Category />} />
      {/* <Route path='/profile' element={} /> */}
      <Route path='/like' element={<Like />} />
      <Route path='/order' element={<Order />} />
      {/* <Route path='/product/*' element={} /> */}
      {/* <Route path='/category/:id' element={} /> */}
      <Route path='/*' element={<Error />} />
    </Routes>
  )
}

export default Routers
