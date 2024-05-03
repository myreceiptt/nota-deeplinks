import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Please note that this link merely provides a list of Prof. NOTA's Deep Links and does not facilitate the access to or use of the Deep Links."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="4; url='/'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Deep Links Redirection
        </h1>

        <p className={styles.description}>
          Redirecting to{" "}
          <a href="/" target="_blank">
            Prof. NOTA's Deep Links
          </a>
        </p>

        <social>
          <a
            href="https://twitter.com/MyReceiptTT"
            target="_blank"
            title="Go visit @MyReceiptTT, Prof. NOTA's Twitter account."
          >
            <img src="/twitter.svg" alt="Prof. NOTA v.1.47" className={styles.icon} />
          </a>&nbsp;
          <a
            href="https://api.whatsapp.com/send?phone=628563160756&amp;text=Hi%20Prof.%20NOTA!!!!%0A%F0%9F%A4%AB%F0%9F%A4%AB%F0%9F%A4%AB%F0%9F%A4%AB%20Shush%2C%20I%20need%20to%20talk%20with%20you!%20Okay!" 
            target="_blank"
            title="Go contact Prof. NOTA's Whatsapp account."
          >
            <img src="/whatsapp.svg" alt="Prof. NOTA v.1.47" className={styles.icon} />
          </a>&nbsp;
          <a
            href="https://instagram.com/myreceipt"
            target="_blank"
            title="Go visit @MyReceipt, Prof. NOTA's Instagram account."
          >
            <img src="/instagram.svg" alt="Prof. NOTA v.1.47" className={styles.icon} />
          </a>&nbsp;
        </social>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
          >
            <h3>The Deep Links &rarr;</h3>
            <p>Does not facilitate the access to or use of the links.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://iqraa.straight-line.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
          {" "}© All rights belong to Prof. NOTA ©{" "}
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 4.7rem 0 1.47rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        social {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: x-small;
        }
        @media (min-width: 425px) {
          footer {
            font-size: small;
          }
        }
        @media (min-width: 640px) {
          footer {
            font-size: medium;
          }
        }
        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer a:hover {
          color: yellow;
          text-decoration: underline;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Fira Code, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Fira Code, monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
