import React from "react";
import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

import Box from "@pagerland/common/src/components/Box";
import Button from "@pagerland/common/src/components/Button";
import Container from "@pagerland/common/src/components/Container";
import Card from "@pagerland/common/src/components/Card";
import Typography from "@pagerland/common/src/components/Typography";
import Input from "@pagerland/common/src/components/Input";

import data from "../../data";
import Liquid from "../../components/Liquids/B";

import emailjs from "emailjs-com";

const Newsletter = ({
  WrapperProps,
  ContainerProps,
  LiquidProps,
  CardProps,
  TitleProps,
  SubtitleProps,
  InputProps,
  ButtonProps,
  FormProps,
  name,
  title,
  subtitle,
  buttonText,
  inputPlaceholder,
  firstNamePlaceholder,
  lastNamePlaceholder,
  phonePlaceholder,
  descriptionPlaceholder,
  LiquidComponent,
}) => {
  const sendEmail = () => {
    console.log("send email");

    const first_name = "first";
    const last_name = "last";
    const email = "me@kaizendog.com";
    const notes = "Looking for stuff";
    const phone = "123";
    emailjs
      .send(
        "service_hxnubar",
        "template_mo7z1xx",
        {
          first_name,
          last_name,
          email,
          notes,
          phone,
        },
        "user_5TMIyuF55QUKIeB22dujF"
      )
      .then(
        (result) => {
          console.log("success", result.text);
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };

  return (
    <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
      <Box {...WrapperProps} name={name}>
        <Container {...ContainerProps}>
          <LiquidComponent {...LiquidProps} />
          <Card {...CardProps}>
            <Fade bottom cascade duration={600}>
              <Typography {...SubtitleProps}>{subtitle}</Typography>
              <Typography {...TitleProps}>{title}</Typography>
              <Box {...FormProps}>
                <Input
                  name="firstName"
                  {...InputProps}
                  placeholder={firstNamePlaceholder}
                />
                <Input
                  name="lastName"
                  {...InputProps}
                  placeholder={lastNamePlaceholder}
                />
                <Input
                  name="email"
                  {...InputProps}
                  placeholder={inputPlaceholder}
                />
                <Input
                  name="phone"
                  {...InputProps}
                  placeholder={phonePlaceholder}
                />
                <Input
                  name="description"
                  {...InputProps}
                  placeholder={descriptionPlaceholder}
                />
                <Button variant="primary" {...ButtonProps} onClick={sendEmail}>
                  {buttonText}
                </Button>
              </Box>
            </Fade>
          </Card>
        </Container>
      </Box>
    </Reveal>
  );
};

Newsletter.propTypes = {
  name: PropTypes.string.isRequired,
  ContainerProps: PropTypes.object,
  WrapperProps: PropTypes.object,
  LiquidProps: PropTypes.object,
  CardProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  InputProps: PropTypes.object,
  ButtonProps: PropTypes.object,
  FormProps: PropTypes.object,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  inputPlaceholder: PropTypes.string,
  buttonText: PropTypes.node,
  LiquidComponent: PropTypes.elementType,
};

Newsletter.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    py: {
      _: 60,
      lg: 150,
    },
  },
  ContainerProps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: {
      _: 0,
      lg: 148,
    },
    pb: {
      _: 0,
      lg: 163,
    },
  },
  LiquidProps: {
    position: "absolute",
    maxWidth: {
      _: "none",
      lg: 770,
    },
    width: {
      _: "130%",
      lg: "100%",
    },
    zIndex: -1,
    transform: "scale(1, -1)",
  },
  CardProps: {
    textAlign: "center",
    p: {
      _: 4,
      lg: 5,
    },
    width: "100%",
  },
  TitleProps: {
    as: "h2",
    variant: "h4",
    color: "invert",
    mb: 4,
  },
  SubtitleProps: {
    variant: "h5",
    color: "brand",
    mb: 2,
  },
  FormProps: {
    flexBox: true,
    maxWidth: 520,
    alignItems: "center",
    justifyContent: "center",
    mx: "auto",
    mt: 4,
    flexDirection: {
      _: "row",
      md: "column",
    },
  },
  InputProps: {
    WrapperProps: {
      width: "100%",
    },
  },
  ButtonProps: {
    variant: "brand",
    ml: {
      _: 0,
      md: 3,
    },
    mt: {
      _: 2,
      md: 2,
    },
  },
  LiquidComponent: Liquid,
  ...data.newsletter,
};

export default Newsletter;
