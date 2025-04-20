import React from 'react'
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "./sit-area.jpeg";
import bed from "./bedroom.jpeg"
import video from "./egnvideo.mp4"
const About = () => {
    return (
        <>

{/* <div class="site-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-5 mb-md-0">
            
              <div class="img-border">
                <a href="https://vimeo.com/28959265" class="popup-vimeo image-play">
                  <span class="icon-wrap">
                    <span class="icon icon-play"></span>
                  </span>
                  <img src={pic} alt="" class="img-fluid"/>
                </a>
              </div>

              <img src={bed} alt="Image" class="img-fluid image-absolute"/>
            
          </div>
          <div class="col-md-5 ml-auto">
            

            <div class="section-heading text-left">
              <h2 class="mb-5">About Us</h2>
            </div>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..</p>
            <p><a href="https://vimeo.com/28959265" className="popup-vimeo text-uppercase">Watch Video <span class="icon-arrow-right small"></span></a></p>
          </div>
        </div>
      </div>
    </div> */}



    <section class="section">
  <div class="container" id="About">
    <div class="left"></div>
    <div class="right">
      <div class="content">
        <h1>What awaits you...</h1>
        <div class="content">
                                    <p class="sub-head">This lavish property makes for a comfortable stay with its stylish rooms, elegant banqueting facilities and a wide range of amenities.</p>
                                    <hr class="my-4" />
                                    <p class="para">
                                        <ul>
                                            <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                                            <li> Enjoy captivating views of the sea and the property's garden from the comfort of your room.</li>
                                            <li> Visit the exciting VGP Aqua Kingdom which is 1.1 km away from the property.</li>
                                            <li>Wi-fi</li>
                                            <li>Private parking area</li>
                                            <li>Play area</li>
                                        </ul>
                                    </p>
                                    </div>
        <a href="#" class="btn">Watch Video</a>
      </div>
    </div>
  </div>
</section>


            {/* <section class="section">
                <div class="container" id="About"style={{ padding: "90px" }}>
                            <div class="content-section">
                                <div class="title">
                                    <h2>What awaits you...</h2>
                                </div>
                                <div class="content">
                                    <p class="sub-head">This lavish property makes for a comfortable stay with its stylish rooms, elegant banqueting facilities and a wide range of amenities.</p>
                                    <hr class="my-4" />
                                    <p class="para">
                                        <ul>
                                            <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                                            <li> Enjoy captivating views of the sea and the property's garden from the comfort of your room.</li>
                                            <li> Visit the exciting VGP Aqua Kingdom which is 1.1 km away from the property.</li>
                                            <li>Wi-fi</li>
                                            <li>Private parking area</li>
                                            <li>Play area</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div> 
                       
                        

            </section> */}


            {/* <h1 className="About-title">About Us</h1>
                    <p class="lead">This lavish property makes for a comfortable stay with its stylish rooms, elegant banqueting facilities and a wide range of amenities.</p>
                    
                    <ul>
                        <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                        <li> Enjoy captivating views of the sea and the property's garden from the comfort of your room.</li>
                        <li> Visit the exciting VGP Aqua Kingdom which is 1.1 km away from the property.</li>

                    </ul> */}




            {/* <div id="About" className="Aboutpage">
            <h1 className="About-title">About</h1>
        </div>
        <div className="About">
            <div className="About-img"><img className="About_img" src="https://static.wixstatic.com/media/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg" alt="Something went wrong"/></div>
             <div className="About-content">
                <p className="About-para">
                    This lavish property makes for a comfortable stay with its stylish rooms, multiple eateries, elegant banqueting facilities and a wide range of amenities.<br/>
                    <ul>
                        <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                        <li> Enjoy captivating views of the sea and the property's garden from the comfort of your room.</li>
                        <li> Visit the exciting VGP Aqua Kingdom which is 1.1 km away from the property.</li>

                    </ul>
                </p>
                 
            </div>
         </div> */}
        </>
    );
}
export default About;