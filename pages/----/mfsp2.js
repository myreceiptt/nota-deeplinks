import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Failed Side Project - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="My Receipt sebagai developer berpendapat bahwa teknologi dalam NFT, yaitu blockchain, adalah titik vital desentralisasi transaksi jual beli aset digital untuk karya seni."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://jatim.telusur.co.id/detail/the-roty-broi-megaproyek-nft-pertama-di-surabaya#:~:text=My%20Receipt%20sebagai%20developer%20berpendapat%20bahwa%20teknologi%20dalam%20NFT%2C%20yaitu%20blockchain%2C%20adalah%20titik%20vital%20desentralisasi%20transaksi%20jual%20beli%20aset%20digital%20untuk%20karya%20seni.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          My Failed Side Project
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://jatim.telusur.co.id/detail/the-roty-broi-megaproyek-nft-pertama-di-surabaya#:~:text=My%20Receipt%20sebagai%20developer%20berpendapat%20bahwa%20teknologi%20dalam%20NFT%2C%20yaitu%20blockchain%2C%20adalah%20titik%20vital%20desentralisasi%20transaksi%20jual%20beli%20aset%20digital%20untuk%20karya%20seni." target="_blank">
            The Roty Broi, Megaproyek NFT Pertama di Surabaya
          </a>
        </p>

        <social>
          <code>jatim.telusur.co.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://jatim.telusur.co.id/detail/the-roty-broi-megaproyek-nft-pertama-di-surabaya#:~:text=My%20Receipt%20sebagai%20developer%20berpendapat%20bahwa%20teknologi%20dalam%20NFT%2C%20yaitu%20blockchain%2C%20adalah%20titik%20vital%20desentralisasi%20transaksi%20jual%20beli%20aset%20digital%20untuk%20karya%20seni."
            className={styles.card}
            target="_blank"
          >
            <h3>The Roty Broi... &rarr;</h3>
            <p>My Receipt sebagai developer berpendapat bahwa teknologi dalam NFT, yaitu blockchain, adalah titik vital desentralisasi...</p>
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
