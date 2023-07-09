import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guides",
    img: "img/guide-book-white.png",
    imgBlack: "img/guide-book-black.png",
    link: "/guides",
    description: <>A guide to help you get started with algomo.</>,
  },
  {
    title: "Documentation",
    img: "img/docs-white.png",
    imgBlack: "img/docs-black.png",
    link: "/docs",
    description: (
      <>
        A complete documentation of algomo, including all the features and how
        to use them.
      </>
    ),
  },
  {
    title: "Changelog",
    link: "/changelog",
    img: "img/changelog-white.png",
    imgBlack: "img/changelog-black.png",
    description: (
      <>A changelog of all the updates and changes made to algomo.</>
    ),
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
        <h2>{title}</h2>
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
          <h1
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}>
            Quick Check!
          </h1>
          <div className={styles.row}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <div
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
          </div>
        </div>
      </section>
    </div>
  );
}
