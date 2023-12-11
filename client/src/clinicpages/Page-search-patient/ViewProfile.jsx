import '../../ClientPages/profile/Profile.css';
import Boxprofile from '../../ClientPages/profile/Boxprofile';
import BoxAPMhis from '../../ClientPages/profile/BoxAPMhis';
import Tabbarclinic from '../Tabbarclinic/Tabbarclinic';

export default function ViewProfile() {
  
    return (
    <div className='profile'>
    <Tabbarclinic/>
    <div className='flex'>
      <Boxprofile/>
      <BoxAPMhis/>
    </div>
    </div>
    )
  }