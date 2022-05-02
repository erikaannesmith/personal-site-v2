import "./items.css";

export const items = [
  {
    label: "about me",
    key: "about-me",
    body: (
      <p>
        I am an intrinsically motivated, out-of-the-box solution seeker. I love
        developing clean, simple solutions to complex problems. I’ve spent time
        at product companies and consulting companies, in a manager role and an
        engineer role, and written code in the frontend and backend space. I’m
        excited to utilize the multidimensional skill set I’ve built to
        contribute to tackling meaningful challenges.
      </p>
    ),
  },
  {
    label: "work experience",
    key: "work-experience",
    body: (
      <>
        <div>
          <div className="title-date">
            <h3>Coinbase Inc.</h3>
            <p>(01/2022 - present)</p>
          </div>
          <p>Software Engineer</p>
          <ul>
            <li>
              Worked on React Native & React apps within Payments organization
              to ensure compliance with 3DS2 verification protocols for European
              payment methods
            </li>
            <li>
              Contributed to organization-wide data flow migration from rest
              hook endpoints to GraphQL endpoints within frontend applications
            </li>
            <li>
              Expanded ability for users to receive paychecks in cryptocurrency
              assets by integrating with payroll providers such as ADP and by
              utilizing third party systems such as Atomic & Marqeta
            </li>
          </ul>
        </div>
        <div>
          <div className="title-date">
            <h3>Formidable Labs</h3>
            <p>(03/2020 - 12/2021)</p>
          </div>
          <div className="title-date">
            <p>Engineering Manager</p>
            <p>(09/2021 - 12/2021)</p>
          </div>
          <ul>
            <li>
              Increased velocity and client satisfaction by creating a number of
              crucial processes including building a framework for engineering
              protocols/best practices and implementing agile type processes
            </li>
            <li>Managed the career health/growth of four direct reports</li>
            <li>
              Mediated the communication/collaboration of the client
              relationship with key internal stakeholders
            </li>
            <li>
              Created documentation around working agreements, technical &
              interpersonal expectations, and onboarding resources
            </li>
          </ul>
          <div className="title-date">
            <p>Software Engineer</p>
            <p>(03/2020 - present)</p>
          </div>
          <ul>
            <li>
              Worked on five client projects of varying sizes and complexity
            </li>
            <ul>
              <li>
                Built consumer facing sites, internal tools, data visualization
                platforms, and design systems
              </li>
            </ul>
            <li>
              Personally maintained an internal library to manage consistent
              templating of documentation across open source systems
            </li>
            <ul>
              <li>
                Responsibilities included defining work, communicating with
                stakeholders, coordinating with the design team, and
                implementing the engineering work.
              </li>
            </ul>
            <li>
              Served 6 months on board of Diversity, Equity, and Inclusion
            </li>
            <li>
              Utilized a wide range of software tooling, including but not
              limited to: React, NextJS, GraphQL, Redux, ReactQuery, and
              Contexts
            </li>
          </ul>
        </div>
        <div>
          <div className="title-date">
            <h3>Stitch Fix</h3>
            <p>(04/2018 - 03/2020)</p>
          </div>
          <p>Software Engineer</p>
          <ul>
            <li>
              Worked on a Ruby on Rails internal tool to support the
              merchandising process, which expanded from serving one department
              (women’s clothing) to several departments
              (sweaters/pants/accessories) across several genders and age groups
              (men’s/women’s/kid’s)
            </li>
            <li>
              Worked cross functionally with both the merchandising team and the
              data science team to achieve higher efficiency and a higher rate
              of success in our purchasing processes
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    label: "portfolio",
    key: "portfolio",
    body: (
      <>
        <div className="title-date">
          <h3>Blake Kirchner Law Firm Site</h3>
          <p>08/2021</p>
        </div>
        <p>
          Design & engineering - full site revamp for law firm client to
          showcase their latest achievements/bring them into a modern techstack.
        </p>
        <div className="title-date">
          <h3>The Case for Consistent Documentation</h3>
          <p>04/2021</p>
        </div>
        <h4>(Or, How to Leave a Client in 10 Days)</h4>
        <p>
          Writing - blog post advocating for writing good documentation during a
          project as opposed to at the end.
        </p>
      </>
    ),
  },
  {
    label: "education",
    key: "education",
    body: (
      <>
        <div className="title-date">
          <h3>Turing School of Software & Design</h3>
          <p>2018</p>
        </div>
        <p>Backend Engineering (Ruby // JavaScript // API Design)</p>
        <div className="title-date">
          <h3>Michigan State University</h3>
          <p>2017</p>
        </div>
        <p>Bachelors in Advertising Management</p>
      </>
    ),
  },
  {
    label: "other",
    key: "other",
    body: (
      <>
        <p>200 RYT-certified yoga teacher</p>
        <p>Mentor at Turing School of Software & Design, front & backend</p>
        <p>German Shepherd dog-mom (photos available upon request)</p>
      </>
    ),
  },
];
