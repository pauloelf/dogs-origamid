import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Enter from './Components/form/login/Enter'
import Register from './Components/form/login/Register'
import LostPassword from './Components/form/login/LostPassword'
import ResetPassword from './Components/form/login/ResetPassword'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import UserPhotoPost from './Components/user/UserPhotoPost'
import UserStats from './Components/user/UserStats'
import Feed from './Components/feed/Feed'
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
			<Route
				path='conta'
				element={
					<ProtectedRoute>
						<User/>
					</ProtectedRoute>
				}>
				<Route path='' element={<Feed />} />
				<Route path='postar' element={<UserPhotoPost />} />
				<Route path='estatisticas' element={<UserStats />} />
			</Route>
		</Routes>
	)
}

export default Rotas