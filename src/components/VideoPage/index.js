import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '接口快速导出',
    Svg: require('@site/static/img/main-3.svg').default,
    description: (
      <>
        拥有强大的参数推测能力，可一键导出为openapi、apifox.
      </>
    ),
  },
  {
    title: '拦截器绕过',
    Svg: require('@site/static/img/main-2.svg').default,
    description: (
      <>
        新一代请求调用能力，通过反射绕过拦截器，调用接口无需在配置Token
      </>
    ),
  },
  {
    title: '手动触发定时器',
    Svg: require('@site/static/img/main-1.svg').default,
    description: (
      <>
        一键触发定时器任务，无需配置/等待，提升开发效率
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function VideoPage() {
  return (
    <section className={styles.features}>
      <div className="container">
      <iframe src="//player.bilibili.com/player.html?aid=325284510&bvid=BV1Hw411576y&cid=1382879124&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" height="645" allowfullscreen="true"> </iframe>

      </div>
    </section>
  );
}
