# TikTok-MERN stack

## `Iconify`

Install the Iconify library and Then use Icon component with icon name as icon parameter:

```sh
npm install --save-dev @iconify/react
import { Icon } from '@iconify/react';
```
```js
<Icon icon="mdi-light:home" />
<Icon icon="mdi:home" style={{ color: 'red' }} />
```

```js
import React from 'react';

// Import Iconify component
import { Icon } from '@iconify/react';

// Import icon data
import homeIcon from '@iconify-icons/mdi-light/home';

// Sample functional component
export function MyComponent() {
   return (
       <div>
           <Icon icon={homeIcon} />
       </div>
   );
}
```
---
---


## `setting firebase`
make a project in firebase.com
```sh
npm install firebase
```

```js
// src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // The URL constructor is available in all browsers that support SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // This is running on localhost. Let's check if a service worker still exists or not.
          checkValidServiceWorker(swUrl, config);
  
          // Add some additional logging to localhost, pointing developers to the
          // service worker/PWA documentation.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://bit.ly/CRA-PWA'
            );
          });
        } else {
          // Is not localhost. Just register service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but the previous service worker will still serve the older
                // content until all client tabs are closed.
                console.log(
                  'New content is available and will be used when all ' +
                    'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                );
  
                // Execute callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');
  
                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  ```

```js
// /src/firebase.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWQ6tCWp0-92o8T640ZrOOPtK1Pb-5A",
    authDomain: "tiktok-clone-02.firebaseapp.com",
    projectId: "tiktok-clone-02",
    storageBucket: "tiktok-cne-02.appspot.com",
    messagingSenderId: "571191366294",
    appId: "1:571191366294:web:67483cf9bba955c8b7"
  };


  firebase.initializeApp(firebaseConfig);
```



    Steps:
    1. setting firebase
    2. add serviceWorker.js file to /src directory
    3. create a firebase.js file in the /src directory

---
---

## `Main Feed`
```js
// /src/components/Videos.js
import React from 'react'
import 'Videos.css'

function Videos() {
    return (
        <div className="video">
            <video src="http://sck.io/p/5R5yR4Bp" alt=""></video>

            {/* video Footer */}

            {/* video sidebar */}
        </div>
    )
}

export default Videos
```



    Steps:
    1. make a videos.js component
    2. add videos.js component to the App.js file
    3. 



