import { Text, RichText, withDatasourceCheck, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './Banner/HeroBanner.module.css'; // Optional: for styling

type GraphQLComponentProps = ComponentProps & {
  fields: {
    data: {
      results: {
        name: TextField;
        title: TextField;
        description: RichTextField;
      }
    }
  }
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const GraphQLComponent = ({ fields }: GraphQLComponentProps): JSX.Element => (
  <div
    className={styles.heroBanner}>
    <div className={styles.content}>
      <Text tag="h2" className="contentTitle" field={fields.data.results.title} />
      <br />
      <RichText className="contentDescription" field={fields.data.results.description} />
    </div>
  </div>


);

export default withDatasourceCheck()<GraphQLComponentProps>(GraphQLComponent);
