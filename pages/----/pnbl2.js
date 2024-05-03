import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prof. NOTA for BANANOW.LAND - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Core Team Bananow: V (frontliner, background: creative &amp; graphic design); Pung (art concept, background: animator &amp; editor); Prof. Nota (web3 strategy, background: web3 developer); Zortan (media strategy, background: media &amp; copy writing); Tanzkie (partnership manager, background: advertising); Suwar (community manager, background: cinema community); Novritz (art research, background: photography)"
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://klasika.kompas.id/baca/proyek-bananow/#:~:text=Prof.%20Nota%20(web3%20strategy%2C%20back%3A%20web3%20developer)%3B'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Prof. NOTA for BANANOW.LAND
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://klasika.kompas.id/baca/proyek-bananow/#:~:text=Prof.%20Nota%20(web3%20strategy%2C%20back%3A%20web3%20developer)%3B" target="_blank">
            Bananow: Eksplorasi Web3 Secara Kolektif
          </a>
        </p>

        <social>
          <code>klasika.kompas.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://klasika.kompas.id/baca/proyek-bananow/#:~:text=Prof.%20Nota%20(web3%20strategy%2C%20back%3A%20web3%20developer)%3B"
            className={styles.card}
            target="_blank"
          >
            <h3>Bananow: Eksplorasi Web3... &rarr;</h3>
            <p>Core Team Bananow: V (frontliner, background: creative &amp; graphic design); Pung (art concept, background: animator &amp; editor); Prof. Nota (web3 strategy, background: web3 developer); Zortan (media strategy, background: media &amp; copy writing); Tanzkie (partnership manager, background: advertising); Suwar (community manager, background: cinema community); Novritz (art research, background: photography)</p>
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
