import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us Training" />
    <h1>Hi the About Us page!</h1>
    <p>Drupal 8 / Gatsby Training NEDCamp 2019</p>
    <Section title="Test Title #1" body="Body text la la la..." />
    <Section title="Test Title #2" body="Body text la la la..." />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
