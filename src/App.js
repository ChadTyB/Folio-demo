import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>

        <body>
    <nav class = "navig">
        <h1 class = "hed">Tyrique Block Portfolio</h1>
        <ul class = "nav-links-container">
            <li class = "nav-link"><a href = "#home-section" class = "links active">Home</a></li>
            <li class = "nav-link"><a href = "#about-section" class = "links">About</a></li>
            <li class = "nav-link"><a href = "#contact-section" class = "links">Contact</a></li>           
        </ul>
    </nav>

    <header class = "header" id = "home-section">
        <div class = "content">
            <h1 class = "header-heading">Hi, I am <span class = "brand-name">Tyrique <span>Block</span></span></h1>

        </div>

        <div class = "header-img-container">
            <div class = "circle"></div>
            <img src = "IMG_20221128_120143.jpg" class = "header-img"></img>
        </div>
    </header>


    <section id = "about-section">
        <h1 class = "heading">About Me</h1>
        <div class = "about-container">
            <div class = "image-container">
                <div class = "square"></div>
                <img src = "IMG_20221128_120143.jpg" class = "about-img"></img>
                </div>
            
        


        <div class = "info">
            <p>I done a three year Diploma in Information Technology. My modules consisted of Programming, 
                Web-Development, Information Systems,
                 Networking and Project Management.</p>

            <p>I am highly motivated, dedicated a hard worker and a quick learner. I have good time management, communication, and 
                organizational skills. I work well under pressure, and I can work effectivelyboth independently 
                and in groups.</p>

            <p>I would like to become a software developer at Sovtech because I am a passionate software developer 
                that is always willing to learn and grow in the IT space. SovTech would also allow me to increase my 
                skills and knowledge about software development. </p>

                <p>And i believe that i could make a positive impact working at SovTech.  dndjnfjdnf</p>
            </div>
        </div>
    </section>

    <h2 class = "sub-heading">Skills</h2>
    <div class = "skills">
        <p class = "skill-name">Java</p>
        <p class = "skill-name">JavaScript</p>
        <p class = "skill-name">HTML</p>
        <p class = "skill-name">CSS</p>
        <p class = "skill-name">C#</p>
        <p class = "skill-name">Visual Basic</p>
    </div>

    <h2 class = "sub-heading">Education</h2>
    <div class = "timeline-container">
        <div class = "card-container">
            <div class = "card">
                <h1 class = "card-title">2020-2023</h1>
                <p class = "card-body">I studied a Diploma in Information Technology at Damelin College</p>
            </div>
        </div>
    </div>

    <section id = "contact-section">
        <h1 class = "heading">Contact</h1>
        <p>Email: blockchad26@gmail.com</p>
        <p>Phone Number: 081 491 8222</p>
        <a href="https://www.linkedin.com/in/tyrique-block-0b02b2244">Tyrique Block LinkedIn</a>
    </section>
    
</body>



        </div>
        
          
        
    
      </header>
    </div>
  );
}

export default App;
