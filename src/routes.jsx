import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"
import UserProfile from "./pages/UserProfile"
import Photo from "./pages/Photo"
import Enter from "./Components/form/login/Enter"
import Register from "./Components/form/login/Register"
import LostPassword from "./Components/form/login/LostPassword"
import ResetPassword from "./Components/form/login/ResetPassword"
import ProtectedRoute from "./Components/Helper/ProtectedRoute"
import UserPhotoPost from "./Components/user/UserPhotoPost"
import UserStats from "./Components/user/UserStats"
import Feed from "./Components/feed/Feed"
import NotFound from "./pages/NotFound"

function Rotas() {
  const { data } = useContext(UserContext)

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/dogs-origamid" element={<Home />} />
      <Route path="login" element={<Login />}>
        <Route path="" element={<Enter />} />
        <Route path="criar" element={<Register />} />
        <Route path="perdeu" element={<LostPassword />} />
        <Route path="resetar" element={<ResetPassword />} />
      </Route>
      <Route
        path="conta"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      >
        <Route
          path=""
          element={
            <section className="mx-auto max-w-[50rem] px-4">
              <Feed user={data.id} />
            </section>
          }
        />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Route>
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
    </Routes>
  )
}

export default Rotas
