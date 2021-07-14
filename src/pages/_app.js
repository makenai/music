import React from 'react';
import useState from 'react-usestateref';
import { SynthContext } from 'utils/synth';
import Header from 'components/Header'
import 'styles/app.scss';

function MyApp({ Component, pageProps }) {
  const [ notesPlaying, setNotesPlaying, ref ] = useState({});
  return (<SynthContext.Provider value={{ notesPlaying, setNotesPlaying, ref }}>
    <div className="App">
      <Header />
      <Component {...pageProps} />
    </div>
    <a href="https://github.com/makenai/music" className="fork-me">
      <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" alt="Fork me on GitHub" data-recalc-dims="1" />
    </a>
  </SynthContext.Provider>);
}

export default MyApp