import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./About.css";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
          <div className="row">
            <div className="column" style={{ backgroundColor: "#aaa" }}>
              <h3>Objective</h3>
              <p>
                An opportunity to work and upgrade oneself, as well as being
                involved in an organization that believes in gaining a
                competitive edge and giving back to the community. I’m presently
                expanding my solid experience in UI / UX design. I focus on
                using my interpersonal skills to build good user experience and
                create a strong interest in my employers. I hope to develop
                skills in motion design and my knowledge of the Web, and become
                an honest asset to the business. As an individual, I’m
                self-confident you’ll find me creative, funny and naturally
                passionate. I’m a forward thinker, which others may find
                inspiring when working as a team.
              </p>
              <h3>What I DO ?</h3>
              <p>
                I have been working as a web interface designer since. I have a
                love of clean, elegant styling, and I have lots of experience in
                the production of CSS3 and HTML5 for modern websites. I loving
                creating awesome as per my clients’ need. I think user
                experience when I try to craft something for my clients. Making
                a design awesome.
              </p>
            </div>
            <div className="column2" style={{ backgroundColor: "#bbb" }}>
              <h3>Column 3</h3>
              <p>Some text..</p>
            </div>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
