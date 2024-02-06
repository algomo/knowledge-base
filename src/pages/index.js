import React from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.custom__bg}>
      <h1 className={styles.hidden}>Algomo Documentation</h1>
      <div className="">
        <a href="https://www.algomo.com/" className={styles.h1__link}>
          <h2 className="hero__title">
            Customer support, <br />
            powered by generative AI
          </h2>
        </a>
        <p className="hero__subtitle">
          Automate and optimize your customer and employee support in 100+
          languages, in less than 3 minutes.
        </p>
        {/* <div className={styles.buttons}>
          <Link className={styles.arrow_button_wrap} to="/getting-started">
            <div class={styles.flexed_button_content}>
              <div>Get Started</div>
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
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learning resources to help you get started on Algomo. Here you will learn how to use the Algomo chatbot and improve your users experience."
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
