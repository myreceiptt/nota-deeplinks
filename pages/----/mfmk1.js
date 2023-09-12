import Head from "next/head";
import styles from "../../styles/Home.module.css";

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
          content="Pemerintah bisa menghemat biaya untuk sosialisasi atau menyampaikan informasi ke publik, dengan mengetik pengumuman pada fitur Event. Seluruh user akan mengetahui pengumuman saat itu juga, kata Afietadi."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://www.jurnalnews.id/teknologi/pr-4303057235/matakota-aplikasi-smart-city-buatan-surabaya#:~:text=%E2%80%9CPemerintah%20bisa%20menghemat%20biaya%20untuk%20sosialisasi%20atau%20menyampaikan%20informasi%20ke%20publik%2C%20dengan%20mengetik%20pengumuman%20pada%20fitur%20Event.%20Seluruh%20user%20akan%20mengetahui%20pengumuman%20saat%20itu%20juga%2C%E2%80%9D%20kata%20Afietadi.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <h1 className={styles.title}>
          Me for MataKota
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://www.jurnalnews.id/teknologi/pr-4303057235/matakota-aplikasi-smart-city-buatan-surabaya#:~:text=%E2%80%9CPemerintah%20bisa%20menghemat%20biaya%20untuk%20sosialisasi%20atau%20menyampaikan%20informasi%20ke%20publik%2C%20dengan%20mengetik%20pengumuman%20pada%20fitur%20Event.%20Seluruh%20user%20akan%20mengetahui%20pengumuman%20saat%20itu%20juga%2C%E2%80%9D%20kata%20Afietadi." target="_blank">
            Matakota, Aplikasi Smart City Buatan Surabaya
          </a>
        </p>

        <social>
          <code>jurnalnews.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://www.jurnalnews.id/teknologi/pr-4303057235/matakota-aplikasi-smart-city-buatan-surabaya#:~:text=%E2%80%9CPemerintah%20bisa%20menghemat%20biaya%20untuk%20sosialisasi%20atau%20menyampaikan%20informasi%20ke%20publik%2C%20dengan%20mengetik%20pengumuman%20pada%20fitur%20Event.%20Seluruh%20user%20akan%20mengetahui%20pengumuman%20saat%20itu%20juga%2C%E2%80%9D%20kata%20Afietadi."
            className={styles.card}
            target="_blank"
          >
            <h3>Matakota, Aplikasi Smart... &rarr;</h3>
            <p>"...dengan mengetik pengumuman pada fitur Event. Seluruh user akan mengetahui pengumuman saat itu juga," kata Afietadi.</p>
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
