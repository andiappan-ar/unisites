import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Navigation from 'src/Navigation';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Headline: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route, context }: any = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const BGColor = context?.multisiteSettings?.BgColor?.value;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Headline?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      <Navigation />
      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container" style={{ backgroundColor: BGColor }}>
        {route && <Placeholder name="headless-main" rendering={route} />}</div>
    </>
  );
};
export default Layout;