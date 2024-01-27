import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import VideoPage from '@site/src/components/VideoPage';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
    
        <div className={styles.buttons}>

          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始 ⏱️
          </Link>
          <a
            className="button button--primary button--lg download-btn"
            href="/cool-request-plugin-2024.2.1.zip"
            download
          >
            下载
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <VideoPage></VideoPage>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
