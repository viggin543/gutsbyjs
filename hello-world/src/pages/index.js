import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
//https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
//This means that 1rem equals the font size of the html element
// (which for most browsers has a default value of 16px).
export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello jGatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </div>
  </Layout>
)
