import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Fhenix Frontier solidity easy to use the best
      </>
    ),
  },
  {
    title: 'FHE Is the Best',
    Svg: require('@site/static/img/shield_check.svg').default,
    description: (
      <>
        FHE next generation text the best stuff ever weeee<br />
          lots of text seeing what we want to say here <br />
          To make the page a little longer
      </>
    ),
  },
  {
    title: 'Powered by Solidity',
    Svg: require('@site/static/img/surface1.svg').default,
    description: (
      <>
        Solidity #1 fhe fhenix fronter winning
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
