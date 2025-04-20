// // src/components/Header.js
// import logo from './images.jfif';
// //import './Header.css'; // Create a CSS file for styles

// const Header = () => {
//   return (
//     <header className="header">
//       <h1><img src={logo} alt="logo" width={100} height={100} />Hotel Portfolio</h1>
//       <nav> 
//         <ul>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#properties">Properties</a></li>
//           <li><a href="#gallery">Gallery</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import  "./Hero.css";
import Nav from "./Nav"
const Hero=()=>
{
    return(
        <>
        <section  className="Hero" id="Home">
        <Nav/>
            <div  className="Hero-banner">
               
                <h1 className='Hero-Head'>Rooms<br></br>
                & <br></br>
                Convention Hall</h1>
                <p>
                 Just for You
                </p>
                <a href="#Services" className="Hero-btn">View Rooms</a>
                <div className="overlay"></div>

            </div>
           
      </section>
      </>
        );
}
export default Hero;
