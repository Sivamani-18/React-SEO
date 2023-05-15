import React, { useEffect } from 'react';

interface SEOProps {
  children?: any;
  SEOtitle?: string;
  SEOdescription?: string;
  SEOkeywords?: string;
  SEOauthor?: string;
  SEOogTitle?: string;
  SEOogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  children,
  SEOtitle = 'My Page Title',
  SEOdescription = 'This is a description of my page.',
  SEOkeywords = 'react,typescript,seo',
  SEOauthor = 'Sivamani',
  SEOogTitle = 'Welcome to my website',
  SEOogImage = 'https://example.com/my-image.png',
}) => {
  useEffect(() => {
    // Modify the <head> section when the component mounts
    const title = SEOtitle;
    const description = SEOdescription;
    const keywords = SEOkeywords;
    const author = SEOauthor;
    const ogTitle = SEOogTitle;
    const ogDescription = SEOdescription;
    const ogType = 'website';
    const ogUrl = window.location.href;
    const ogImage = SEOogImage;
    const twitterCard = 'summary_large_image';
    const twitterSite = '@sivamani18';
    const twitterCreator = '@sivamani18';
    const canonicalUrl = window.location.href;

    document.title = title;

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', author);
    document.head.appendChild(metaAuthor);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.setAttribute('content', ogTitle);
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.setAttribute('content', ogDescription);
    document.head.appendChild(metaOgDescription);

    const metaOgType = document.createElement('meta');
    metaOgType.setAttribute('property', 'og:type');
    metaOgType.setAttribute('content', ogType);
    document.head.appendChild(metaOgType);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.setAttribute('content', ogUrl);
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.setAttribute('content', ogImage);
    document.head.appendChild(metaOgImage);

    const metaTwitterCard = document.createElement('meta');
    metaTwitterCard.setAttribute('name', 'twitter:card');
    metaTwitterCard.setAttribute('content', twitterCard);
    document.head.appendChild(metaTwitterCard);

    const metaTwitterSite = document.createElement('meta');
    metaTwitterSite.setAttribute('name', 'twitter:site');
    metaTwitterSite.setAttribute('content', twitterSite);
    document.head.appendChild(metaTwitterSite);

    const metaTwitterCreator = document.createElement('meta');
    metaTwitterCreator.setAttribute('name', 'twitter:creator');
    metaTwitterCreator.setAttribute('content', twitterCreator);
    document.head.appendChild(metaTwitterCreator);

    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', canonicalUrl);
    document.head.appendChild(canonical);

    // Clean up the changes when the component unmounts
    return () => {
      document.title = '';
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaAuthor);
      document.head.removeChild(metaOgTitle);
      document.head.removeChild(metaOgType);
      document.head.removeChild(metaOgUrl);
      document.head.removeChild(metaOgImage);
      document.head.removeChild(metaTwitterCard);
      document.head.removeChild(metaTwitterSite);
      document.head.removeChild(metaTwitterCreator);
      document.head.removeChild(canonical);
    };
  }, []);

  return <main>{children}</main>;
};
