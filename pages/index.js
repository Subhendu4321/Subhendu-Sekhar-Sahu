import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Component/Profile';
import Link from 'next/link';


function App(){
    return(
        <div >
        <Login />
        {/* <Register /> */}
        {/* <Profile /> */}
        {/* <ul>
            <li>
              <Link href="Component/Profile">
                <a>profile</a>
              </Link>
                            
            </li>
            <li>
            <Link href="/Register">
                  <a>Regiter</a>
              </Link>
            </li>
          </ul>
          <button type="button"><Link href="/About">About</Link></button> */}

      </div>
    )

}

export default App;
