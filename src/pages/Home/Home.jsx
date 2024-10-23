import "./Home.css";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-img">
        <img src="../public/home.png" alt="" />
      </div>
      <div className="Home-text">
        <h1>
          Hello,it's <span>Rew</span>
        </h1>
        <h4>
          &nbsp;&nbsp;Department of Computer Science and Software Development Innovation
        </h4>
        <p>
          &nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut magni odit repellendus illo aliquam, cupiditate corporis voluptates praesentium quam ex molestias temporibus odio! Odio quis commodi laboriosam eius exercitationem voluptas!
        </p>
      </div>
      <div className="Home-card-container">
        <div className="card-home">
          <img src="../public/cat.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card1</h3>
            <p>
            I like cats, I like to take pictures of cats, and I like animals.
            </p>
            <a href="" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src="../public/fish.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card2</h3>
            <p>
            I like fish, I like to take pictures of fish, and I like animals.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src="../public/cat2.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card3</h3>
            <p>
            I like cats, I like to take pictures of cats, and I like animals.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
