import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";

import Theme, { theme } from "@pagerland/themes/src/Corporate";
import {
  Navbar,
  Welcome,
  Offer,
  Goals,
  Mission,
  Cta,
  Team,
  Testimonials,
  Pricing,
  Copyright,
  Newsletter,
  Contact,
} from "@pagerland/themes/src/Corporate/containers";
import data from "@pagerland/themes/src/Corporate/data";

import preview from "@pagerland/themes/src/Corporate/assets/preview.jpg";

import SEO from "../components/SEO";

const Corporate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="KaizenDog" />

    <Navbar />
    <Welcome name="" />
    <Mission name="mission" />
    <Offer name="services" />
    {/* <Goals name="goals" /> */}
    <Newsletter name="contact" />
    <Copyright />
  </Theme>
);

Corporate.propTypes = {
  url: PropTypes.string,
};

Corporate.defaultProps = {
  url: "https://kaizendog.com/",
};

export default Corporate;
