import Head from 'next/head'
import Image from 'next/image'
import Footer from '../componets/footer'
import Navbar from '../componets/Navbar'
import styles from '../styles/Home.module.css'
import Viewport from '../componets/Welcome'

export default function Home() {
  return (
    <div>
      <Head>
        <title>First Next App</title>
        <meta name="description" content="My first one:)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span  id='home' />

      <Navbar />

      <main>
        <div >
          <img src='https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-a58e6c53fee218623cb26ba39786d1e5.jpg?resize=1&w=1920' className='welcome-image'/>
          {/* <Viewport /> something to figure out for a later time */}
        </div>
        <h1> Welcome to my homepage</h1>
        <div id='body-text'>
          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>
          
          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>
          
          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>
          
          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>
          
          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>

          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>

          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>

          <p>Elit deserunt exercitation sunt sit quis proident sit eiusmod culpa labore tempor. Nostrud laboris quis qui sint magna minim veniam veniam aliquip deserunt adipisicing ea. Magna labore nulla aliquip enim sit mollit labore esse sunt labore veniam. Elit Lorem ipsum aliqua adipisicing deserunt reprehenderit commodo consectetur ea consequat deserunt ad.

  Velit voluptate ullamco ad ad ad proident excepteur in pariatur amet reprehenderit. Sit amet laborum excepteur cupidatat pariatur et pariatur voluptate eiusmod dolor. Veniam nisi voluptate in ipsum cupidatat. Eiusmod anim anim tempor exercitation consectetur amet qui nostrud enim qui commodo anim Lorem cillum. Ad mollit exercitation Lorem proident reprehenderit aliquip amet.

  Minim non esse quis pariatur occaecat occaecat id non pariatur eiusmod aute. Ipsum ut officia nisi consequat magna esse fugiat consequat adipisicing culpa. Amet quis ipsum culpa non sint laboris veniam. Minim excepteur esse exercitation sit dolore consectetur commodo irure culpa eu esse consectetur anim. Officia duis excepteur ullamco qui sunt irure est amet et ad. Elit ipsum nisi duis eiusmod aliquip amet eiusmod.

          Et ea duis duis excepteur velit do ea. Ea do nisi dolore ex minim velit. Esse sunt minim excepteur ex officia nisi irure incididunt velit.</p>
        </div>
      </main>

     <Footer />

    </div>
  )
}
