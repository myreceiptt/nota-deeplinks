import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me for The Profit - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Jumlah modul bisnis yang diperoleh user sebanyak 20 modul bisnis, sama dengan user yang memainkan The Pofit melalui smatphone, timpal Digital Marketing The Profit, Afietadi Kurniawan."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://www.getradius.id/news/90073-mudah-belajar-bisnis-dengan-the-profit-desktop-version#:~:text=%E2%80%9CJumlah%20modul%20bisnis%20yang%20diperoleh%20user%20sebanyak%2020%20modul%20bisnis%2C%20sama%20dengan%20user%20yang%20memainkan%20The%20Pofit%20melalui%20smatphone%2C%E2%80%9D%20timpal%20Digital%20Marketing%20The%20Profit%2C%20Afietadi%20Kurniawan.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Me for The Profit
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://www.getradius.id/news/90073-mudah-belajar-bisnis-dengan-the-profit-desktop-version#:~:text=%E2%80%9CJumlah%20modul%20bisnis%20yang%20diperoleh%20user%20sebanyak%2020%20modul%20bisnis%2C%20sama%20dengan%20user%20yang%20memainkan%20The%20Pofit%20melalui%20smatphone%2C%E2%80%9D%20timpal%20Digital%20Marketing%20The%20Profit%2C%20Afietadi%20Kurniawan." target="_blank">
            Mudah Belajar Bisnis dengan The Profit Desktop Version
          </a>
        </p>

        <social>
          <code>getradius.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://www.getradius.id/news/90073-mudah-belajar-bisnis-dengan-the-profit-desktop-version#:~:text=%E2%80%9CJumlah%20modul%20bisnis%20yang%20diperoleh%20user%20sebanyak%2020%20modul%20bisnis%2C%20sama%20dengan%20user%20yang%20memainkan%20The%20Pofit%20melalui%20smatphone%2C%E2%80%9D%20timpal%20Digital%20Marketing%20The%20Profit%2C%20Afietadi%20Kurniawan."
            className={styles.card}
            target="_blank"
          >
            <h3>Mudah Belajar Bisnis... &rarr;</h3>
            <p>"...sama dengan user yang memainkan The Pofit melalui smatphone," timpal Digital Marketing The Profit, Afietadi Kurniawan.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://docs.endhonesa.com/"
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
