import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me for MataKota - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Hanya dengan mengetik pengumuman pada fitur ‘Event’ di Matakota, seluruh user akan mengetahui pengumuman tersebut pada saat itu juga, jelas Afietadi Kurniawan Digital Marketing Natek Studio yang akrab disapa dengan sebutan Mamak."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://www.harianbhirawa.co.id/bencana-kriminal-klik-panic-button-matakota-cepat-tertangani/#:~:text=Hanya%20dengan%20mengetik%20pengumuman%20pada%20fitur%20%E2%80%98Event%E2%80%99%20di%20Matakota%2C%20seluruh%20user%20akan%20mengetahui%20pengumuman%20tersebut%20pada%20saat%20itu%20juga%E2%80%9D%2C%20jelas%20Afietadi%20Kurniawan%20Digital%20Marketing%20Natek%20Studio%20yang%20akrab%20disapa%20dengan%20sebutan%20Mamak.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Me for MataKota
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://www.harianbhirawa.co.id/bencana-kriminal-klik-panic-button-matakota-cepat-tertangani/#:~:text=Hanya%20dengan%20mengetik%20pengumuman%20pada%20fitur%20%E2%80%98Event%E2%80%99%20di%20Matakota%2C%20seluruh%20user%20akan%20mengetahui%20pengumuman%20tersebut%20pada%20saat%20itu%20juga%E2%80%9D%2C%20jelas%20Afietadi%20Kurniawan%20Digital%20Marketing%20Natek%20Studio%20yang%20akrab%20disapa%20dengan%20sebutan%20Mamak." target="_blank">
            Bencana-Perkara Kriminal, Klik Panic Button Matakota
          </a>
        </p>

        <social>
          <code>harianbhirawa.co.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://www.harianbhirawa.co.id/bencana-kriminal-klik-panic-button-matakota-cepat-tertangani/#:~:text=Hanya%20dengan%20mengetik%20pengumuman%20pada%20fitur%20%E2%80%98Event%E2%80%99%20di%20Matakota%2C%20seluruh%20user%20akan%20mengetahui%20pengumuman%20tersebut%20pada%20saat%20itu%20juga%E2%80%9D%2C%20jelas%20Afietadi%20Kurniawan%20Digital%20Marketing%20Natek%20Studio%20yang%20akrab%20disapa%20dengan%20sebutan%20Mamak."
            className={styles.card}
            target="_blank"
          >
            <h3>...Panic Button Matakota &rarr;</h3>
            <p>"...pada fitur ‘Event’ di Matakota, seluruh user akan mengetahui pengumuman tersebut pada saat itu juga," jelas Afietadi Kurniawan...</p>
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
