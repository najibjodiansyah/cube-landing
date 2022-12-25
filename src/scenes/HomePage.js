import React from "react";
import Section from "elements/Section";
import Header from "parts/Header";
import HeroImage from "assets/images/hero-image.png";
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";
import Fade from "react-awesome-reveal";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import Card from "elements/Card";
import List from "elements/Lists";
import Button from "elements/Button";
import Footer from "parts/Footer";

export default function HomePage() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature Tile Icon 01",
      title: "Join The System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature Tile Icon 02",
      title: "Join The System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature Tile Icon 03",
      title: "Join The System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  const listPricing = [
    {
      price: 0,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
      ],
    },
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
      ],
    },
    {
      price: 100,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: true,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
        {
          isChecked: false,
          content: "Excpteur sint occaecat cupidatat non proident",
        },
      ],
    },
  ];
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenterContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={100}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={500}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={1000}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="feature-title">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 500}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div class="container">
            <div class="pricing-inner section-inner has-top-divider">
              <div class="section-header center-content">
                <div class="container-xs">
                  <h2 class="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p class="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div class="tiles-wrap">
                {listPricing.map((list, index) => (
                  <Card hasShadow>
                    <div class="pricing-item-content">
                      <div class="pricing-item-header pb-24 mb-24">
                        <div class="pricing-item-price mb-4">
                          <span class="pricing-item-price-currency h2">
                            {list.currencySymbol}
                          </span>
                          <span
                            class="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="74"
                            data-pricing-yearly="67"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div class="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <List
                          data={list.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></List>
                      </div>
                    </div>
                    <div class="pricing-item-cta mb-8">
                      <Button isPrimary isBlock>
                        Start free trial
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  );
}
