// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

import { AppRegistry } from 'react-native';
import { App } from './app/app';

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});