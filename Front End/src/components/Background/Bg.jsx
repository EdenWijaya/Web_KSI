import './Bg.css'
import sampah from '../../assets/sampah.mp4'

const Bg = ({ playStatus, heroCount }) => {
      return (
        <video className='background' autoPlay loop muted>
          <source src={sampah} type="video/mp4" />
        </video>
      )

}
export default Bg