import '../styles/globals.css'
import {wrapper} from '../lib/store/index'
import { Provider } from 'react-redux';


function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return <Provider store={store}><Component {...props.pageProps} /></Provider>
}

export default MyApp;
