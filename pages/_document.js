import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Hier kannst du Metadaten oder globale Skripte hinzufügen */}
          <script
            src="https://formspree.io/js/formbutton-v1.min.js"
            defer
          ></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            src="https://formspree.io/js/formbutton-v1.min.js"
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
