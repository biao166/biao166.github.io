/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce4d8922ecfdf9a30e9b5328ac2e0a27"
  },
  {
    "url": "archives/editorconfig-guideline.html",
    "revision": "6285c21bbdc4b678dbe2fa8130caa809"
  },
  {
    "url": "archives/git-and-ssh-key-multiple-account-configuration.html",
    "revision": "926d0a0ed1d518d2c70a9a1ff37151d2"
  },
  {
    "url": "archives/git-config.html",
    "revision": "b4d41fc9fb97a40197d8fefa02ff66cb"
  },
  {
    "url": "archives/index.html",
    "revision": "625e78bbce902f454531c4eecc70a592"
  },
  {
    "url": "archives/javascript-style.html",
    "revision": "c9387caac20ff47adc671ca11e601d9b"
  },
  {
    "url": "archives/node-pre-gyp-binary.html",
    "revision": "10ed68ddc9733b722a94132b5dc10102"
  },
  {
    "url": "archives/node-production.html",
    "revision": "77bd7928b0eb14813351590d02ff38c1"
  },
  {
    "url": "archives/update-node-and-npm.html",
    "revision": "5c33a03fe8e2cf7236ea8516bc54cf08"
  },
  {
    "url": "archives/work-environment-initialization.html",
    "revision": "eae047cb72b262437e192ce6c675b9ba"
  },
  {
    "url": "assets/css/0.styles.28337c45.css",
    "revision": "a37fcb6d51c31deb7a1010ebea8d50f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0a2b3e4c.js",
    "revision": "eef99db331db998745e46cc26761fbd4"
  },
  {
    "url": "assets/js/11.7ff9a0ca.js",
    "revision": "2a2f993946d927a826920878238d4798"
  },
  {
    "url": "assets/js/12.e11a6f13.js",
    "revision": "d6d027a374af98b7286e38772f42a6df"
  },
  {
    "url": "assets/js/13.3e9ef6ce.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.e69b94cf.js",
    "revision": "d1ffdc9ec2723fed4ad12e696c3bfc65"
  },
  {
    "url": "assets/js/3.973bfbbb.js",
    "revision": "475b91d9ced5810668ed37a4f78df790"
  },
  {
    "url": "assets/js/4.1da5c30b.js",
    "revision": "7f7008b6bc29f6d0afbfec6e62a6a04d"
  },
  {
    "url": "assets/js/5.2a9438c3.js",
    "revision": "116e5111521fc64c12a75e72588307bf"
  },
  {
    "url": "assets/js/6.3cccf5bc.js",
    "revision": "ee22587e5f474140fed7199ab5d92dfe"
  },
  {
    "url": "assets/js/7.b0ba3321.js",
    "revision": "2e664dab3a9d02e2eab65edf5410f41b"
  },
  {
    "url": "assets/js/8.4a74cbff.js",
    "revision": "ef20ef902b39765ffbb7a2f129ecdbf1"
  },
  {
    "url": "assets/js/9.9100e4ee.js",
    "revision": "eeb886646c5bb18c50d587e8c3da1309"
  },
  {
    "url": "assets/js/app.a05bc17e.js",
    "revision": "a1f17f3de788ebaf485a7e8d44c470c4"
  },
  {
    "url": "index.html",
    "revision": "3de816f2f534278b49a3240bf7ce0078"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
