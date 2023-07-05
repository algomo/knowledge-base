import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Widgets",
    img: "img/widgets.png",
    link: "/widgets",
    description: (
      <>
        The <code>UI element</code> where your visitors will interact with{" "}
        <code>algomo</code> if you install it on a website.
      </>
    ),
  },
  {
    title: "Chatbots",
    img: "img/chatbots.png",
    link: "/chatbots",
    description: (
      <>
        Our chatbots are <code> MULTILINGUAL NATIVELY</code>, i.e. you can
        provide information in any language, and they can respond back to any
        language.
      </>
    ),
  },
  {
    title: "Data Sources",
    link: "data-sources",
    img: "img/data-sources.png",
    description: (
      <>
        Any collection of data that can be used to train our chatbots. We have a
        growing list of data sources, and you can also provide your own from
        different sources.
      </>
    ),
  },
];

function Feature({ img, title, description, link }) {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}>
          Features!
        </h1>
        <div className="row">
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
  );
}
