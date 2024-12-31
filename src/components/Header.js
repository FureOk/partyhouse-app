import '../App.css';
import logo from '../imgs/airbnb-logo.png';
import userImg from '../imgs/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (
        <div className="Header">
            <div className= 'logo'>
                <img src={logo} className='logo'/>
            </div>
            <div className ='search-bar'>
                <p>From</p>
                <input type="date"></input>
                <p>To</p>
                <input type="date"></input>
                <div className='search-icon'>
                <FontAwesomeIcon icon={faSearch} />  
                </div>              
            </div>
            <div className='write-up'>
                <img src={userImg} className='userImg'/>                
            </div>
        </div>
    )
}

export default Header;