import React, { useContext, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const {user,userSignOut} = useContext(AuthContext);
    console.log("my data",user);

    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = () =>{
        userSignOut()
        .then(()=>console.log('user signout'))
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    const closeMenue = () =>{
        setMenuOpen(false)
    }
    const handleScrollToHome = () =>{
        document.getElementById('home').scrollIntoView({behavior: 'smooth'}) 
    }
    const handleScrollToAbout = () =>{
        document.getElementById('about').scrollIntoView({behavior: 'smooth'}) 
    }
    const handleScrollToCourses = () =>{
        document.getElementById('courses').scrollIntoView({behavior: 'smooth'}) 
    }
    const handleScrollToContact = () =>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'}) 
    }
    const navLinks = <>

        <li><NavLink to="/" className='nav-link' onClick={()=> {closeMenue(); handleScrollToHome()}}>Home</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue(); handleScrollToAbout()}}>About</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue(); handleScrollToCourses()}}>Courses</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue(); handleScrollToContact()}}>Contact</NavLink></li>
        {/* <li><NavLink to='/login' className='nav-link' onClick={closeMenue}>Login</NavLink></li> */}
        {
            user && user.emailVerified ? (<li><NavLink to='' className='nav-link' onClick={ ()=> {handleSignOut();closeMenue();}}>Logout</NavLink></li>) : (<li><NavLink to='/login' className='nav-link' onClick={closeMenue}>Login</NavLink></li>)
        }
        {
            user && user.emailVerified ? (user.displayName): ""
        }
        
    </>

    
    return (
        <>
            <header className='bg-green-950 fixed w-full top-0 left-0 z-50'>
                <nav className='container flex items-center justify-between h-16 sm:h-20'>
                    <div className='font-Arima sm:text-2xl'>eStudy</div>

                    <div className={`absolute top-0 ${menuOpen ? 'left-0' : 'left-[-100%]'} min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
                        <ul className='flex flex-col items-center gap-8 lg:flex-row'>

                            {navLinks}
                            
                        </ul>
                        {/* <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
                            <img src={} alt="leaf1" className='w-32'/>
                        </div>
                        <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
                            <img src={leaf2} alt="leaf2" className='w-32'/>
                        </div> */}
                        <div className='absolute top-5 right-5 text-3xl cursor-pointer lg:hidden' onClick={handleMenu}>
                            <IoMdClose/>
                        </div>
                    </div>
                    <div className='text-xl sm:text-3xl cursor-pointer x-50 lg:hidden' onClick={handleMenu} >
                        <IoMdMenu />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;