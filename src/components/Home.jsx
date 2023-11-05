// import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>SamsanTech</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only Solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problems solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rem aperiam et, voluptas id repellendus omnis dolore numquam
            mollitia corporis dolores? Dicta, aliquam? Exercitationem quasi,
            velit corrupti nihil dolorem perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rem aperiam et, voluptas id repellendus omnis dolore numquam
            mollitia corporis dolores? Dicta, aliquam? Exercitationem quasi,
            velit corrupti nihil dolorem perferendis?
          </p>
        </div>
      </div>
      <div className="home4" id="breands">
        <div>
            <h1>Brands</h1>

            <article>
                <div
                style={{
                    animationDelay: "0.3s",
                }}
                >
                 
                 <AiFillGoogleCircle />
                 <p>Google</p>
                </div>
                <div
                style={{
                    animationDelay: "0.5s",
                }}
                >
                 
                 <AiFillAmazonCircle />
                 <p>Amazone</p>
                </div>
                <div
                style={{
                    animationDelay: "0.7s",
                }}
                >
                 
                 <AiFillYoutube />
                 <p>Youtube</p>
                </div>
                <div
                style={{
                    animationDelay: "1s",
                }}
                >
                 
                 <AiFillInstagram />
                 <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    <div/>
    </>
  );
}

export default Home;
