import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Quick Start",
    link: "/quick_start",
    img: "img/quickstart_white.svg",
    imgBlack: "img/quickstart_blue.svg",
    description: <>New to Algomo? Click here to get started!</>,
  },

  {
    title: "Guides",
    img: "img/guide_white.svg",
    imgBlack: "img/guide_blue.svg",
    link: "/guides",
    description: <>Learn how to make the most of Algomo.</>,
  },

  {
    title: "Documentation",
    img: "img/docs_white.svg",
    imgBlack: "img/docs_blue.svg",
    link: "/docs",
    description: <>A comprehensive documentation of Algomo</>,
  },
];

function Feature({ img, imgBlack, title, description, link }) {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      className={clsx(styles.card__link)}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          sources={{
            light: imgBlack,
            dark: img,
          }}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.row}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}>
            <Link className={styles.arrow_button_wrap} to="/getting-started">
              <div class={styles.flexed_button_content}>
                <div>Check more</div>
                <div class={styles.space_horizontal_tiny}></div>
                <img
                  src="https://uploads-ssl.webflow.com/6421a177cdeeaf4e0591b744/6421a177cdeeaf275891b7b8_Arrow%20right%20long%20WHITE.svg"
                  loading="lazy"
                  alt=""
                  class={styles.image_arrow}
                />
              </div>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
