import './Profile.css';
import BoxAPMhis from './BoxAPMhis';
import Boxprofile from './Boxprofile';
import Tabbar from '../Home/Tabbar';

export default function Profile() {
  
  return (
  <div className='profile'>
  <Tabbar/>
  <div className='flex'>
    <Boxprofile/>
    <BoxAPMhis/>
  </div>
  </div>
  )
}
