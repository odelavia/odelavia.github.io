import React, { Fragment } from "react"

const Resume = () => (
 <div id="resume-page">
  <div className="nav-spacer"/>
  <div id="Resume" className="yui-t2">
   <div id="inner">

    <div id="bd">
     <div id="main">
      <div className="yui-b right-main">

      <div className="yui-gf">
        <div className="yui-u">
        <h2>Projects</h2>
        <div className="job">
          <h5>2 Bears, <span>Developer & Team Lead</span></h5>
          <h4>May 2018 - Present</h4>
          <p>Currently leading team of three US based developers in building responsive cross platform POS app for IOS/Android.</p>
          <p>Managed the upgrade of an internal tool to latest technologies by translating business requisites into software, improving customer service.</p>
          <p>Influenced system architecture decisions to reflect technical strategy.</p>
          <p>Developed user stories, wireframes, weekly sprints, triaged and corrected bugs, and delivered a user-centered functional app.</p>
          <p>Tools: JavaScript, React, Redux, React-Native, HTML, CSS/SASS, PostgreSQL, Sequelize, Node, Express, Grunt, and Webpack</p>
        </div>

        <div className="job">
          <h5>Facetagger, <span>Developer</span></h5>
          <h4>March 2018 - May 2018</h4>
          <p>Built a full-stack, responsive face-tagger game that utilizes the Clarifai API.</p>
          <p>Developed navigation, authentication/authorization/registration, user profile modals, image-url input loader, face-tagging implementation, and user rank funtionality.</p>
          <p>Configured Webpack to bundle code using React, Redux, SCSS, Babel, and implemented hot module reloading.</p>
          <p>Tools: JavaScript, React, Redux, HTML, CSS/SASS, PostgreSQL, Node, Express, and Webpack</p>
        </div>

        <div className="job">
          <h5>Gecho, <span>Developer</span></h5>
          <h4>Feb 2018 - April 2018</h4>
          <p>Built a full-scale web app that plays music videos utilizing the Youtube API with a team of two American and one Argentinian developers.</p>
          <p>Configured MongoDB user schemas to persist music and user preferences.</p>
          <p>Connected Youtube API to search bar and implemented server-side rendering of music videos to hide secret keys.</p>
          <p>Worked on app-wide UI and developed error handling across app.</p>
          <p>Tools: JavaScript, React, React-Router, Redux, HTML, CSS/SASS, MongoDB, Mongoose, Node, Express, Gulp, and Webpack</p>
        </div>
        </div>
      </div>

       <div className="yui-gf">
        <div className="yui-u">
         <h2>Volunteer Experience</h2>
         <div className="job">
         <h5>Chingu<span>, Developer & Online Community Facilitator</span></h5>
         <h4>Feb 2018 – Present</h4>
         <div className="spacing"><i>A global collaboration platform and coding-cohort generator. They connect motivated learners with shared goals to learn, help and build together.</i></div>
         <p>Helping to facilitate 700+ developers in 140+ remote international coding cohorts.</p>
         <p>Organized remote teams, answered questions, helped other junior developers with code, troubleshot and kept teams on track for their weekly Agile sprints.</p>
         <p>Presented a talk/demo on the benefits of pair-programming for the Chingu Community.</p>
         <p>Meet weekly sprint deadlines in Agile environment typically within two-month series, rapid prototyping of features, writing client-side and server-side code in JavaScript, React, React-Native and Node.</p>
         <p>Technologies in production include React progressive web apps, relational and NoSQL databases, user authentication (Passport.JS, OAuth), RESTful APIs, and build tools (Gulp, Grunt, Webpack).</p>
        </div>

         <div className="job">
          <h5>Dara Global Arts<span>, Associate Gallery Director</span></h5>
          <h4>Nov 2016 - Nov 2017</h4>
          <div className="spacing"><i>A Boutique art gallery based in Vienna, Virginia.</i></div>
          <p>Consulted on a complete renovation of the space and Wordpress website overhaul.</p> 
          <p>Rendered daily operations including presentation, inventory, and installation of artwork.</p>
          <p>Created a new database of the gallery inventory to reduce the time needed for Director’s bi-weekly inventory check by 85%.</p>
         </div>

        </div>
       </div>

       <div className="yui-gf">
        <div className="yui-u">
          <h2>Employment</h2>

          <div className="job last">
           <h5>HD Contractors, Inc.<span>, Project Supervisor, Construction</span></h5>
           <h4>July 2010 - Present</h4>
           <div className="spacing"><i>Residential/commercial contracting company that renovates spaces in the Washington D.C. area.</i></div>
           <p>Lead day-to-day team, perform quality checks, teach and mentor new employees.</p>
           <p>Define project purpose and scope, calculate resources required, establish standards and protocols, allocate resources, schedule and coordinate staff, resolve design problems, evaluate and implement change orders.</p>
           <p>Implemented a Proposal Generator to cut time on drafting project bids in half (<a href="http://www.propgen.surge.sh">propgen.surge.sh</a>).</p>
          </div>

        </div>
       </div>

       <div className="yui-gf">
       <div className="yui-u education">
        <h2>Education</h2>
        <div className="job wellesley">
         <h5>Virginia Commonwealth University, <span>B.F.A., Comunication Arts</span></h5>
         <h4>Graduated Dec 2014</h4>
        </div>
       </div>
      </div>



      </div>
     </div>

     <div className="yui-b left-nav" style={{width: '220px' }}>
        <div className="yui-gf">
       <div className="yui-u">
        <div className="name">
         <h2><span>Oliver <br/>De La Via</span></h2>
        </div>
        <div className="contact-info">
         <h5><i>Software Developer based in Arlington, Virginia.</i></h5>
         <br/>
           <p>odelavia@gmail.com</p>
           <p>(571) 277 - 5557</p>
         <p><a href="http://odelavia.github.io">odelavia.github.io</a></p>
           <p><a href="https://twitter.com/odelavia">@odelavia</a></p>
        </div>

         <div className="languages">
         <h2>Skills</h2>

         <div className="job">
          <h5>Core Competencies</h5>
          <p>Agile SDLC</p>
          <p>Software Analysis and Design</p>
         </div>

         <div className="job">
          <h5>Programming Languages</h5>
          <p>Primary: JavaScript - ES5/6, CSS/SASS, HTML</p>
          <p>Experienced: Python</p>
         </div>

         <div className="job">
          <h5>Technologies</h5>
          <p>React, React-Native, React-Router, Redux</p>
          <p>Jest, Enzyme</p>
          <p>Node.js, Express.js</p>
          <p>REST API</p>
          <p>MongoDB, PostgreSQL, MySQL, Redis</p>
          <p>Git, Gulp, Webpack</p>
          <p>MacOS, Windows</p>
          <p>Adobe Photoshop, Illustrator</p>
          <p> Figma, Sketch</p>
         </div>
          </div>
        </div>
       </div>

     </div>

    </div>

   </div>


  </div>
 </div>
);

export default Resume;