import { Route, Routes } from 'react-router-dom'
import { Home } from '../page'
import Category from '../page/category/category'

function Routers () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/*' element={<Category />} />
      {/* <Route path='/profile' element={} /> */}
      {/* <Route path='/like' element={} /> */}
      {/* <Route path='/order' element={} /> */}
      {/* <Route path='/product/*' element={} /> */}
      {/* <Route path='/category/:id' element={} /> */}
    </Routes>
  )
}

export default Routers
