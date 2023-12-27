const baseMetadata = {
  openGraph: {
    description: 'Top-notch developers for your brilliant ideas.',
    siteName: 'OpenTech',
    images: [
      {
        url: 'https://images2.imgbox.com/f8/75/5TeWxBIu_o.png',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    description: 'Top-notch developers for your brilliant ideas.',
    images: [
      {
        url: 'https://images2.imgbox.com/f8/75/5TeWxBIu_o.png',
        type: 'image/png',
      },
    ],
  },
};

const keywords =
  'dev full stack dev web full stack developer web full stack full cycle developer full developer full stack agency full stack developer engineer full stack developer near me full stack developer senior full stack developer services full stack developer web developer full stack development full stack development agency full stack development services full stack devops full stack senior full stack web developer full stack web development services full stack website developer full stack website development full web development fullstack development fullstack development services mid full stack developer mid level full stack developer senior full stack senior full stack developer senior full stack engineer senior full stack web developer senior fullstack developer senior fullstack engineer development turn my project around quickly front end development ';

const robots = {
  index: true,
  follow: true,
  nocache: true,
};

const createMetadata = (
  path: string,
  title: string,
  pageName: string,
  description: string
) => {
  const metadataBase = new URL(`https://www.open-tech.io/${path}`);

  return {
    metadataBase,
    title,
    description,
    keywords,
    robots,
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageName,
      url: metadataBase.href,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageName,
    },
  };
};

export const homeMetadata = createMetadata(
  '',
  'OpenTech',
  'Home',
  'OpenTech is a web development agency. We specialize in building complex and scalable web app using modern technology such as React, Node.js, and others. '
);
export const portfolioMetadata = createMetadata(
  'portfolio',
  'Portfolio',
  'Portfolio',
  'Our team creates an exceptional visualization and thought-out functionality. We believe, our clients deserve to be remarkable in their business.'
);
export const contactMetadata = createMetadata(
  'contact',
  'Contact',
  'Contact',
  'If you are looking for a web development agency that can help you build a web app, contact OpenTech today. We would be happy to discuss with you.'
);
export const aboutUsMetadata = createMetadata(
  'about-us',
  'About Us',
  'About Us',
  'We are passionate about building web apps. We also believe in the importance of communication and collaboration, and we work closely with our client.'
);
