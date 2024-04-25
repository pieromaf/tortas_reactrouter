import Menu from '../componentes/Menu'
import imagenn from '../assets/img/cakeees.jpeg';
const Home = () => {
  return (
    <>
      <h1 className='text-center mt-4'>Bienvenido a  <b> Happy Cake</b></h1>
      <h6 className='text-center'>El lugar de los <b> pasteles felices </b></h6>
      <div className='text-center mt-5'>
      <img src={imagenn} alt=""/>
      </div>
    </>
  )
}

export default Home

