import {  RichText, Field,ImageField, withDatasourceCheck, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './HeroBanner.module.css'; // Optional: for styling

type HeroBannerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: RichTextField;
    Image:ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
// const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
//   <div className="contentBlock">
//     <Text tag="h2" className="contentTitle" field={fields.heading} />

//     <RichText className="contentDescription" field={fields.content} />
//   </div>
// );


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




