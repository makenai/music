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
      <div className="appContent">
        <Component {...pageProps} />
      </div>
    </div>
  </SynthContext.Provider>);
}

export default MyApp