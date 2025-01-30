import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './Banner/HeroBanner.module.css'; // Ensure this path is correct

const FooterComponent = () => {
  const { sitecoreContext }: any = useSitecoreContext();
  const company: any = sitecoreContext?.multisiteSettings?.CompanyName?.value;
  const domain: any = sitecoreContext?.multisiteSettings?.Domain?.value;

  return (
    <footer className={styles.footerContent}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} {company}</p>
        <p>&copy; {domain}</p>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
