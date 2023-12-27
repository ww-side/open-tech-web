// Core
import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GTM_ID, pageview } from '@/lib/gtm';

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
        }}
      />
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jlojewvfvn");
        `,
        }}
      />
    </>
  );
};
