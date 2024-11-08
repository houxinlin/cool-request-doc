import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '接口快速导出',
    Svg: require('@site/static/img/main-3.svg').default,
    description: (
      <>
        拥有强大的参数推测能力，可一键导出至openapi、apifox.
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
    title: '调用任意方法',
    Svg: require('@site/static/img/main-1.svg').default,
    description: (
      <>
        手动触发任意方法，支持多实例选择，调试代码方便至极
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
