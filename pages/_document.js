/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js" />
        {/* <script
          charSet="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/shell.js"
        ></script>
        <script>
          hbspt.forms.create(
          {`
            region: "na1",
            portalId: "21718124",
            formId: "95a7dc71-bffb-497d-987d-caa607475986"
          `}
          );
        </script> */}
      </body>
    </Html>
  );
}
