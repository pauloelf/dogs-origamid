import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Enter from './Components/form/login/Enter'
import Register from './Components/form/login/Register'
import LostPassword from './Components/form/login/LostPassword'
import ResetPassword from './Components/form/login/ResetPassword'
import NotFound from './pages/NotFound'

function Rotas() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Home />} />
			<Route path='login' element={<Login />}>
				<Route path='' element={<Enter/>} />
				<Route path='criar' element={<Register/>} />
				<Route path='perdeu' element={<LostPassword/>} />
				<Route path='resetar' element={<ResetPassword/>} />
			</Route>
		</Routes>
	)
}

export default Rotas