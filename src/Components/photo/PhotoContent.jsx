import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../UserContext"
import PhotoComments from "./PhotoComments"
import PhotoDelete from "./PhotoDelete"
import Image from "../Helper/Image"
import { ReactComponent as Visualization } from "../../assets/svgs/visualizacao-black.svg"

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext)
  const { photo, comments } = data

  return (
    <div
      className={`photo-content ${single ? "grid-cols-1 h-auto static" : ""}`}
    >
      <div
        className={`smmd:[grid-row:1/4] grid-rows-1 ${
          single ? "[grid-row:1!important] rounded overflow-hidden" : ""
        }`}
      >
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={`${single ? "p-0 pt-4" : "p-8 pb-0"}`}>
        <div className="flex justify-between mb-4 opacity-50 items-center">
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link className="hover:underline" to={`/perfil/${photo.author}`}>
              @{photo.author}
            </Link>
          )}
          <span className="flex items-center">
            <Visualization
              width="16px"
              height="10px"
              className="inline-block mr-2"
            />
            {photo.acessos}
          </span>
        </div>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className="flex text-[1.125rem] font-bold mt-4 mb-8">
          <li className="atributos">{photo.peso} kg</li>
          <li className="atributos">{photo.idade} anos</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  )
}

export default PhotoContent
