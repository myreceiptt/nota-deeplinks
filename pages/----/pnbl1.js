import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

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
          content="Proses pembelajarannya bisa juga berupa kegiatan berbagi, seperti ketika Prof. NOTA (twitter: @myreceiptt) yang menjadi developer Bananow menghadirkan beberapa kasus scam dalam kelas Techno."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://klasika.kompas.id/baca/eksekusi-gelombang-pertama-proyek-bananow/#:~:text=seperti%20ketika%20Prof%20Nota%20(twitter%3A%20%40myreceiptt)%20yang%20menjadi%20developer%20Bananow%20menghadirkan%20beberapa%20kasus%20scam%20dalam%20kelas%20Techno.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Prof. NOTA for BANANOW.LAND
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://klasika.kompas.id/baca/eksekusi-gelombang-pertama-proyek-bananow/#:~:text=seperti%20ketika%20Prof%20Nota%20(twitter%3A%20%40myreceiptt)%20yang%20menjadi%20developer%20Bananow%20menghadirkan%20beberapa%20kasus%20scam%20dalam%20kelas%20Techno." target="_blank">
            Eksekusi Gelombang Pertama Proyek Bananow
          </a>
        </p>

        <social>
          <code>klasika.kompas.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://klasika.kompas.id/baca/eksekusi-gelombang-pertama-proyek-bananow/#:~:text=seperti%20ketika%20Prof%20Nota%20(twitter%3A%20%40myreceiptt)%20yang%20menjadi%20developer%20Bananow%20menghadirkan%20beberapa%20kasus%20scam%20dalam%20kelas%20Techno."
            className={styles.card}
            target="_blank"
          >
            <h3>Eksekusi Gelombang Pertama... &rarr;</h3>
            <p>Proses pembelajarannya bisa juga berupa kegiatan berbagi, seperti ketika Prof. NOTA (twitter: @myreceiptt) yang menjadi developer Bananow menghadirkan beberapa kasus scam dalam kelas Techno.</p>
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
