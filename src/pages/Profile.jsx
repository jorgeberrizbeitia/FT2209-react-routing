import { useParams } from "react-router-dom"
// con use params accedemos a la funcioalidad avanzada de parametros dinamicos en la ruta

function Profile() {

  // como accedemos a ese parametro dinamico ?
  // const parametrosDinamicos = useParams()
  // console.log(parametrosDinamicos)
  // const {username} = parametrosDinamicos

  const { username } = useParams()
  // username ES PORQUE NOSOTROS EN ROUTES LO LLAMAMOS :username

  return (
    <div>

        <h3>Viendo el perfil de {username}</h3>

        <p>Imagenes de {username === "caro" ? "perretes" : "gatetes"}</p>

    </div>
  )
}

export default Profile