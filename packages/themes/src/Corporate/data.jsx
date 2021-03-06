import textToMultiline from "@pagerland/common/src/utils/textToMultiline";
import background2x from "./assets/header-photo@2x.jpg";
import background from "./assets/header-photo.jpg";
import Goals from "./assets/our-goals.png";
import Goals2x from "./assets/our-goals@2x.png";
import Mission from "./assets/our-mission.png";
import Mission2x from "./assets/our-mission@2x.png";
import Team from "./assets/team.png";
import Team2x from "./assets/team@2x.png";

import Consulting from "./assets/consulting.svg";
import Auditing from "./assets/auditing.svg";
import Strategy from "./assets/strategy.svg";
import Avatar1 from "./assets/avatars/avatar-1.jpg";
import Avatar12x from "./assets/avatars/avatar-1@2x.jpg";
import Avatar2 from "./assets/avatars/avatar-2.jpg";
import Avatar22x from "./assets/avatars/avatar-2@2x.jpg";
import Avatar3 from "./assets/avatars/avatar-3.jpg";
import Avatar32x from "./assets/avatars/avatar-3@2x.jpg";
import Avatar4 from "./assets/avatars/avatar-4.jpg";
import Avatar42x from "./assets/avatars/avatar-4@2x.jpg";
import Avatar5 from "./assets/avatars/avatar-5.jpg";
import Avatar52x from "./assets/avatars/avatar-5@2x.jpg";
import Avatar6 from "./assets/avatars/avatar-6.jpg";
import Avatar62x from "./assets/avatars/avatar-6@2x.jpg";
import Avatar7 from "./assets/avatars/avatar-7.jpg";
import Avatar72x from "./assets/avatars/avatar-7@2x.jpg";
import Avatar8 from "./assets/avatars/avatar-8.jpg";
import Avatar82x from "./assets/avatars/avatar-8@2x.jpg";

export default {
  title: "KaizenDog",
  navbar: {
    links: [
      {
        to: "mission",
        label: "Mission",
      },
      // {
      //   to: 'goals',
      //   label: 'Goals',
      // },
      {
        to: "services",
        label: "Services",
      },
      {
        to: "contact",
        label: "Contact",
      },
    ],
    actions: [],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: "Real Estate",
    },
    title: "KaizenDog",
    // subtitle: 'Gatsby + Reactasdfaf',
    description: "Providing solutions that move you and your users forward!",
    actions: [
      {
        to: "services",
        children: "Learn more",
        variant: "outline",
      },
    ],
  },
  offer: {
    // subtitle: 'What we do',
    title: "Services",
    services: [
      {
        icon: Consulting,
        title: "Custom Software Solutions",
        text: "",
      },
      {
        icon: Auditing,
        title: "DevOps",
        text: "",
      },
      {
        icon: Strategy,
        title: "Monitoring, Compliance, Security",
        text: "",
      },
    ],
  },
  goals: {
    img: {
      src: Goals,
      srcSet: `${Goals} 1x, ${Goals2x} 2x`,
    },
    subtitle: "We stay focus on targets",
    title: "Our goals",
    text: "",
    // cta: {
    //   children: 'Read about our mission',
    //   href:
    //     'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    //   target: '_blank',
    //   as: 'a',
    // },
  },
  mission: {
    img: {
      src: Mission,
      srcSet: `${Mission} 1x, ${Mission2x} 2x`,
    },
    // subtitle: 'Wha we???re dedicated to',
    title: "Our mission",
    text: "",
    // cta: {
    //   children: 'See what we offer',
    //   href:
    //     'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    //   target: '_blank',
    //   as: 'a',
    // },
  },
  supportCta: {
    subtitle: "World class support",
    title: "We???re here to help!",
    text:
      "Simply go to our support website and open a ticket to get fast and professional help directly from them Envato Elite authors.",
    buttons: [
      {
        label: "Open support ticket",
        href: "https://coffeecream.freshdesk.com/",
      },
    ],
  },
  team: {
    img: {
      src: Team,
      srcSet: `${Team} 1x, ${Team2x} 2x`,
    },
    subtitle: "Our biggest value are people",
    title: "Meet our great team",
    text:
      "Proin sed pharetra ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam commodo eu justo in posuere. Sed elementum, ipsum eu faucibus porta, odio mauris posuere quam, eu cursus tellus est et lacus.",
    cta: {
      label: "Join us, we???re hiring!",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: "Timothy Wilson",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: "Bernard Nguyen",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: "Bessie Richards",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: "Judith Black",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: "Robert Edwards",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: "Dianne Robertson",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: "Shane Black",
        position: "Co-Founder, CEO",
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
        },
        name: "Nathan Fox",
        position: "Co-Founder, CEO",
      },
    ],
  },
  testimonials: {
    subtitle: "Our customer reviews",
    title: "Testimonials",
    comments: [
      {
        author: "Pat Cooper, Big Company SEO",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tellus turpis. Suspendisse posuere quam consequat magna bibendum pretium. Vivamus in porta mauris. Vestibulum ut euismod purus. Sed eu malesuada elit. Curabitur posuere consequat gravida. Donec laoreet volutpat sapien, sed malesuada nisi pellentesque et. Etiam imperdiet nunc enim, sit amet tempor sapien molestie id.`,
      },
      {
        author: "Orsola Jeroch, Bigger Company CTO",
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
      },
    ],
  },
  contactCta: {
    subtitle: "Interested in our services?",
    title: "Get a free quote!",
    text:
      "Ut at cursus justo, non luctus lacus. Proin cursus felis at dolor auctor molestie. Aenean fringilla dolor quis felis laoreet.",
    buttons: [
      {
        label: "Get a quote",
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
      },
      {
        label: "Contact us",
        href: "https://coffeecream.freshdesk.com/",
        variant: "outline",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "USD",
      types: {
        a: "Monthly",
        b: "Annually",
      },
      sections: [
        {
          title: "Beginner",
          price: {
            a: "$0",
            b: "$0",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: false,
            },
            {
              text: "Nullam vitae tortor",
              check: false,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Get a quote",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Advanced",
          price: {
            a: "$12",
            b: "$120",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Get a quote",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Expert",
          price: {
            a: "$24",
            b: "$240",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: true,
            },
            {
              text: "Fusce quis vestibulum",
              check: true,
            },
          ],
          button: {
            text: "Get a quote",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },
  contact: {
    // subtitle: 'Drop us a line or visit us',
    title: "Contact",
    addresses: [],
  },
  newsletter: {
    // subtitle: "Stay up to date",
    title: "Contact Us",
    buttonText: "Send",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    inputPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number",
    descriptionPlaceholder: "What services are you interested in?",
  },
  copyright: "??2021 KaizenDog, LLC",
};
