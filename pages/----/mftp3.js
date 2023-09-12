import Head from "next/head";
import styles from "../../styles/Home.module.css";

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
          content="Ditempat yang sama Afietadi Kurniawan selaku  Digital Marketing The Profit menambahkan, sekitar 277 strategi bisnis The Profit game bisa diakses lewat user ketika memainkan game."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='http://www.kabarprogresif.com/2017/05/resmi-di-luncurkan-profit-game-bisnis.html#:~:text=Ditempat%20yang%20sama%20Afietadi%20Kurniawan%20selaku%C2%A0%20Digital%20Marketing%20The%20Profit%20menambahkan%2C%20sekitar%20277%20strategi%20bisnis%20The%20Profit%20game%20bisa%20diakses%20lewat%20user%20ketika%20memainkan%20game.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <h1 className={styles.title}>
          Me for The Profit
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="http://www.kabarprogresif.com/2017/05/resmi-di-luncurkan-profit-game-bisnis.html#:~:text=Ditempat%20yang%20sama%20Afietadi%20Kurniawan%20selaku%C2%A0%20Digital%20Marketing%20The%20Profit%20menambahkan%2C%20sekitar%20277%20strategi%20bisnis%20The%20Profit%20game%20bisa%20diakses%20lewat%20user%20ketika%20memainkan%20game." target="_blank">
            Resmi di Luncurkan The Profit Game Bisnis Berbasis Online Mencapai Ribuan Pelanggan
          </a>
        </p>

        <social>
          <code>kabarprogresif.com</code>
        </social>

        <div className={styles.grid}>
          <a
            href="http://www.kabarprogresif.com/2017/05/resmi-di-luncurkan-profit-game-bisnis.html#:~:text=Ditempat%20yang%20sama%20Afietadi%20Kurniawan%20selaku%C2%A0%20Digital%20Marketing%20The%20Profit%20menambahkan%2C%20sekitar%20277%20strategi%20bisnis%20The%20Profit%20game%20bisa%20diakses%20lewat%20user%20ketika%20memainkan%20game."
            className={styles.card}
            target="_blank"
          >
            <h3>Resmi di Luncurkan... &rarr;</h3>
            <p>Ditempat yang sama Afietadi Kurniawan selaku  Digital Marketing The Profit menambahkan, sekitar 277 strategi bisnis The Profit...</p>
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
