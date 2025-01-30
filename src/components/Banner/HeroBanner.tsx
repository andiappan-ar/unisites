import { RichText, Field, ImageField, withDatasourceCheck, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './HeroBanner.module.css'; // Optional: for styling

type HeroBannerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: RichTextField;
    Image: ImageField;
  };
};

const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => (
  <div
    className={styles.heroBanner}
    style={{ backgroundImage: `url(${fields.Image?.value?.src})` }}
  >
    <div className={styles.content}>
      <h1>{fields.Title?.value}</h1>
      <RichText className="contentDescription" field={fields.Description} />

    </div>
  </div>
);

export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);




