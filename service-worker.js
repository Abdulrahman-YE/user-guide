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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2.0/attribute-family/attribute-families.html",
    "revision": "576055cd3217619d513fe2cb909251ba"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "6db24d770736f934c32634bba364d50b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "dd14e80ffa64031503eb3414545cc12a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "ebbf27720b83a286e33447face2c214f"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "430c8ceef9875d169ec7dae3c7b3f2d5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f6f4de241b6b6df01cae08e793a9a049"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f871a53af69930da56b0561e77b6b82a"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "fadc85599f6357e1e30578b0a6e41771"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9c2fd5e28abdd4412d09878a78c736b4"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "a510d461e9bee380e3246dbb7a9f35a9"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "78996ed5b57c4a616719b389037dc6ec"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "1994d9c78a40e03bc5cdf63188f8009e"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "630b68433b664a058a6f5d642921382a"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "d09511313436e7a2840789266100275c"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "00d483d45dfa30fd9849e7dd917d3120"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "54b6201631cf74577803a5ffd837a018"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "11f6476d6b9741a2792b45b4dc1876b5"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "19ac1de5cedc255796a6402bd27ea84a"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "e405631208e939b18e3789b257c7e01b"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "1e39c959c7434bac5910be3a736bf9cd"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "be59aa452633b0b6ccae4557a2dd2d12"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "b24b40cd8b29d26f2145cbcd71d577f0"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "cedecacbb31dbaf3e987d960102dc889"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "8f3d0acb8ea77c944755ee8352716c32"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "0ecc279ede7e9f431693b3a8121b0d9f"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "574c5240339d721fd56534744495ec12"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "fb54e199cb328a312144769c4ac91ecf"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "3a2e734b872726d4bc835edafe1439ba"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "228317b631616d2d4a0e45e0e6a1c6e2"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "3910495daf69788fc0ee4f4f294fafa7"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "624b961072e4fcf872df63fad5a79fd4"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "581276abf3ec249b328cef02171d1d2a"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "d75e6e7db5a92de5a0e3fbdbfca33b32"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "6643113bf33d3499397276d7ea0487b0"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "c54e82b2cb9cd5f98a327fa307914b15"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "038324837d98a6b11984b0b7d0d8aa17"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "c95ec07ea26e4d69a01096050ecf42e4"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "356a414078d15e09f8a32cba2d530ed0"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "ca59f768b7dc9ea4f484569caa2bb6ca"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "091fa409a8015535269556edbdbd849b"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "feb5d19bbfc3e31f8067d0d8b79528d0"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "2de6fca10daad9a5d46ca5bd210073f5"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "1ef84c8b2695f2c5f79142ca688ae519"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "efabf307ff50f225da961fbbdc913c57"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "440bc2af6b3dae541a7a90c33778ef36"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "1f6d7451cb752ad594343c24be171cbc"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "5ad262796a43238398710b9c8f37ce16"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "c4dab4be1872e1c332027452f6ed1120"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "8f82cd63ea4d1740106915f3cacc6b1c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "b350854e1c11881d288bcc5222397077"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "51bdf22abcd3765c57cab5bddc7b589e"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "6c3f6efbd27fd65f6e5736d3985df418"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "65160ff26d6391cc4f526cebca09053d"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "970adc96fceb90aaf3b793ca5afa52b5"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "fa43b99fd2f08b07ec69ec195d6657fa"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "18ad0a191ed49df563d8736a720d959b"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "b50d0c1a01d9f45d948ea84eb47e7ad2"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "f77fb50679eaa1596c5b6fa457c5e339"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "0095702f88b28d66fdb107a12f9a3491"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "3c7ef0015d30a3ce6adb25dbdaa55341"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "2a647b9cc66c3407bd17f068978f3eb8"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "3eec32bab27d356a79b14d9d66e1f597"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f57bef0c0398e57cff59f9dc4ffd5617"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "af278155488602cb5de0832ddd5b9618"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "37ed6476fe357939f850c89ddcf80538"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "0d455e7bd57a383b0e496c7501799b4f"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "731a17978b929e7369ed97824004426a"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "047208bedf096a105731fd2203ede47e"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "c28b418f258eca93c602efed059d94d3"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f2a9d9499075bbc8342aa744e8f72807"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "a68df78a97bacd00eb8a162dde5c2632"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "99698ab445fdd9b56ee732c639008af3"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "53aab1a70fae708950ea62056cdbf5d4"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7915d4c305e7e864d4b6d6f56aa5eb2b"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "eeea5a255b1b8691288439e041e136a2"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "f309133f5625cc0b0562619594fcdcac"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "f68715c040ae6142318af8b1bf864e73"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "29765a032caff0f6b810ff1e0f290aa3"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "f9e032088eff3a4a4b8043606d8e8874"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "59762422bb57fa30352d4f1124ed5258"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "f5499a2fa0b6c6ae5da6ba0dab2c03f0"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "0d3a5370b0e46679554179a4c0368ddc"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "7e10d2030df940ae442c4e925a5ebad1"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "bec1ea14246d213e2143e3e136c4f52b"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "fffaa4d481575f33ef8bf0547c1169c1"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "11f9aea89c7b0f52dac82f5f6ff4795e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "f9510c2578c06c07e21ff22b0b12bc60"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "eda221e9bef8d7b70ff562e55f2d6d3e"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "a60d5b119df2b9938d621a2d720fcb49"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "dbb4eb8e7fd33df89dad5f2ae1d10892"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "73565be1d6e71d2f14e9aedc4d8e4b26"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "128632268846a3561fe168816ea7488f"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "cd6f0aa420742f7b2b98f0742ec09d15"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "55400c9abd5c9c8e2e8c2d7b117ac1c1"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "97c773b4caa2c539ffaef0cad092ec7c"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "d5823e3530fbaa4468bff41b014b5779"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "2cd7e21863ba46ca59a7c1870055d02a"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "59ef7b3fe5a74214c8ebd4cdc18fb00c"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "7cfc67ea44a2f75a50837de58ea515e3"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "84f8fd0cdce65acb2f2b6447ab363f45"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "e11e54134c87ee8389bb1a92a57a66ff"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "3c44032af4901fd19394c926f9c74eca"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "bcd6bef7f49ba4f56e7ac26b651f9da0"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "33a4aeb65a1bae7834c1eb8ceb01908a"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "22d467b1668994b690f9119c017a60ed"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "c2a92f41ad25a6e4d8de96db4e8e6518"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "6de4a4a0f6da3d04cdf87e0dbbef32b6"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "4fe970997486e96ad8fdec504f9456db"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "668d88fa1c83611be69a1f514113dcb1"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "980e6fc3639ab2d5bc1c0551c265515a"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "30f5e7119c9ad64de826e4aab2f6d6c3"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "66c3d2aa36a3a24e32d011d7570c90aa"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "a4e73a16729c9ad3a8ddf40e1bdeb8e2"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "6b98173aaabaa758bdb13f9a0271b2af"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "ff3e223496c14865acc21e6e0bc33d45"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "c7296bce6aa68d643834ee50ee5b3834"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "bdc2f986c215393620477a16484cf20a"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "4545e822b43991b08ef5b66288f329f2"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "9eb61a7215616ede89f42c71ee1e774d"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "f49f6962016963aabcea068d7d35c1d6"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "a6cb7ac7e1734e85982ffb77f229e713"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "29bdb3ab87e2d0ca505986836c3b0e11"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "3abc83d602a4e824f877d6e5dd3cee5c"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "37ead42c4a8bcf996ef7f0c735cf5317"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "7499e9cef350f3759702a01463b0f3ec"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "6155c9c25dbd9498e482a2562a4e9ebd"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "c5d8595d292cdb830d667d7ab4558f6f"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "3332983d727829745879ad71ce38d87e"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "73bcfcbdf8c27bcaf5afac2284ddfb85"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "ee03adcad09ced240392d1752e081b31"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "d0533616881685c54651ed7fc94d5e77"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "6fb98a4f5b91abe37af14bc507f2f084"
  },
  {
    "url": "404.html",
    "revision": "4cf8f74a4577472a25358e79a74d9f73"
  },
  {
    "url": "assets/css/0.styles.291dbf98.css",
    "revision": "736084e354e64bb15e490036def9f295"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
  },
  {
    "url": "assets/img/address.73f9d9c3.png",
    "revision": "73f9d9c3c0accc57e57c570a4e5e1bd6"
  },
  {
    "url": "assets/img/adjust.167cbf6f.png",
    "revision": "167cbf6fcbb3f92a4f1ce26f03aec4c5"
  },
  {
    "url": "assets/img/adjustFee.d7f3f7e8.png",
    "revision": "d7f3f7e8aeabaa98c1535cfa96b4e917"
  },
  {
    "url": "assets/img/adjustfeeRefund.cc122ee9.png",
    "revision": "cc122ee9d3f39af1766aa0189bb021a6"
  },
  {
    "url": "assets/img/adjustRefund.8d6b314f.png",
    "revision": "8d6b314f9cd68097a791b6d5d79411c2"
  },
  {
    "url": "assets/img/adminOrder.c87ffdf0.png",
    "revision": "c87ffdf09c7707c0396195d25f4a113d"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/allowReorder.bcf70145.png",
    "revision": "bcf701459c18156b50cbeb2789b7addf"
  },
  {
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
  },
  {
    "url": "assets/img/attribute.096f9150.png",
    "revision": "096f9150a23344cbae1bd9105771034c"
  },
  {
    "url": "assets/img/attributeCondition.655b39fd.png",
    "revision": "655b39fd6c08eb73855b1e8eebc63faa"
  },
  {
    "url": "assets/img/attributeFamily.288663af.png",
    "revision": "288663afa26b990715f1742c296a81e8"
  },
  {
    "url": "assets/img/attributeTypes.1a15bed5.png",
    "revision": "1a15bed5d16ae27a096828f27bca331e"
  },
  {
    "url": "assets/img/backorder.ce2cbb76.png",
    "revision": "ce2cbb765a1ab49f0e7e6e1bfab71561"
  },
  {
    "url": "assets/img/backorderOutput.a79776d7.png",
    "revision": "a79776d71b3aa529893f99db22817b03"
  },
  {
    "url": "assets/img/bill.3dc36a38.png",
    "revision": "3dc36a3808a0e6c75efcceb8cc7c0836"
  },
  {
    "url": "assets/img/billAddress.3e38faa1.png",
    "revision": "3e38faa114ff98f1763a700e9b881960"
  },
  {
    "url": "assets/img/billingAddress.89151ce8.png",
    "revision": "89151ce8150f7098db13961aef747ca0"
  },
  {
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
  },
  {
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
  },
  {
    "url": "assets/img/campaign.91fe3411.png",
    "revision": "91fe3411810de28aea525a453a58d967"
  },
  {
    "url": "assets/img/campaignConfigration.e42a9937.png",
    "revision": "e42a99378a914bf01862025b214b79d7"
  },
  {
    "url": "assets/img/campaignOutput.f00bb683.png",
    "revision": "f00bb683ca4455f7e3ca9a38a20f3d21"
  },
  {
    "url": "assets/img/captcha.67275c7f.png",
    "revision": "67275c7f46a825296a8f97e966834997"
  },
  {
    "url": "assets/img/cart.0d42b772.png",
    "revision": "0d42b772a15096e9edc7056fa2fe2d97"
  },
  {
    "url": "assets/img/cartpageConfiguration.2a8cc626.png",
    "revision": "2a8cc6265574d17e2cad9a0b66d1607f"
  },
  {
    "url": "assets/img/cartSummary.ddb14953.png",
    "revision": "ddb14953d3dd65cf481f2c74cda92a64"
  },
  {
    "url": "assets/img/catalogConditions.3f3cf255.png",
    "revision": "3f3cf255fede57553424291559b4e0ac"
  },
  {
    "url": "assets/img/catalogConfigurations.ecca3049.png",
    "revision": "ecca304994b24c73e3fb55130153639b"
  },
  {
    "url": "assets/img/catalogFront.04438821.png",
    "revision": "04438821a4e0bf377024e9a786ac335a"
  },
  {
    "url": "assets/img/catalogOutput.db2a4bb7.png",
    "revision": "db2a4bb7d81cfd5ac38d76b730cef561"
  },
  {
    "url": "assets/img/catalogRule.d389090c.png",
    "revision": "d389090cbd9b5b05a33d7f83f180ac43"
  },
  {
    "url": "assets/img/categories.9654bd7b.png",
    "revision": "9654bd7bc173241027a741805b2bc98a"
  },
  {
    "url": "assets/img/categoryGrid.30d2b5c1.png",
    "revision": "30d2b5c1f28ee421ad2949fbe956fbc4"
  },
  {
    "url": "assets/img/channelGrid.2fb2d268.png",
    "revision": "2fb2d268ad269255efd23c1148ab16e7"
  },
  {
    "url": "assets/img/channels.eadfb45b.png",
    "revision": "eadfb45be94bde3cf14aa99e48f442de"
  },
  {
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
  },
  {
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutMycart.018d49e7.png",
    "revision": "018d49e7529834942d7c85c3287ccda2"
  },
  {
    "url": "assets/img/checkoutPage.d39fa003.png",
    "revision": "d39fa003a222d6dddd99ae40363bd2ca"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
  },
  {
    "url": "assets/img/condition.ab321770.png",
    "revision": "ab32177015ee86d4aa9934cedd5b30e1"
  },
  {
    "url": "assets/img/configurable.9fa6fb76.png",
    "revision": "9fa6fb7664af716acdf07eb82708f5ba"
  },
  {
    "url": "assets/img/configurableAttributes.0341eddd.png",
    "revision": "0341eddd298735466ee157f6485d9706"
  },
  {
    "url": "assets/img/configurations.5d9c124c.png",
    "revision": "5d9c124ce63ba29a935aad5281986e68"
  },
  {
    "url": "assets/img/contactInfo.4d1e076d.png",
    "revision": "4d1e076dfd3113456026a3f539bdbdaf"
  },
  {
    "url": "assets/img/contains.3ed8311c.png",
    "revision": "3ed8311c9895e1cedf09bec880bd00a1"
  },
  {
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
  },
  {
    "url": "assets/img/couponApplied.22a6cb26.png",
    "revision": "22a6cb2644a9db78adb2818f756a4b35"
  },
  {
    "url": "assets/img/couponCode.7f792622.png",
    "revision": "7f7926226eef9ed70ee18bd80dcfd3dd"
  },
  {
    "url": "assets/img/create.757552e8.png",
    "revision": "757552e8c1a3f7f3623eafd87da6e3db"
  },
  {
    "url": "assets/img/createAttribute.bf9dd39a.png",
    "revision": "bf9dd39ae6079ef5613992d6e4812d50"
  },
  {
    "url": "assets/img/createCartrule.f59d3c55.png",
    "revision": "f59d3c55e87645f1ab3bca95d4d9eed6"
  },
  {
    "url": "assets/img/createCurrency.80f5dbec.png",
    "revision": "80f5dbec7e268bf73a29385cbb371f4c"
  },
  {
    "url": "assets/img/createCustomer.a6c9698b.png",
    "revision": "a6c9698b28099326d39cf735ca3468c1"
  },
  {
    "url": "assets/img/createFamily.ba7fc9a9.png",
    "revision": "ba7fc9a9c8e73f8962cad699c47e340d"
  },
  {
    "url": "assets/img/createGroup.08afdc81.png",
    "revision": "08afdc8109ffa43d47e454900e483da5"
  },
  {
    "url": "assets/img/createImport.8a18e6f7.png",
    "revision": "8a18e6f712cebe01f4966ba2cea89567"
  },
  {
    "url": "assets/img/createPage.8392fa25.png",
    "revision": "8392fa251d47307c792bbd8ab88cb9c5"
  },
  {
    "url": "assets/img/createShipment.f1b18478.png",
    "revision": "f1b18478ca01419ad43d14af3c624c9e"
  },
  {
    "url": "assets/img/createSitemap.d3b98b83.png",
    "revision": "d3b98b83b7631a9f494f69c5cd0891f3"
  },
  {
    "url": "assets/img/createSitemap.d6148cff.png",
    "revision": "d6148cff22a71aaaae2df2d116e6077c"
  },
  {
    "url": "assets/img/createTheme.0b94db18.png",
    "revision": "0b94db1864cfe92426a3044bf75cdea3"
  },
  {
    "url": "assets/img/createUser.f36e2467.png",
    "revision": "f36e2467b839a9711fe536a06b5e6f42"
  },
  {
    "url": "assets/img/css.2b4e1926.png",
    "revision": "2b4e19263e7221e2f43c054f7ab1a6d6"
  },
  {
    "url": "assets/img/cssOutput.f20f7109.png",
    "revision": "f20f710933d21bed21ab4f1db6ee9e93"
  },
  {
    "url": "assets/img/currencyLocal.4e83b107.png",
    "revision": "4e83b1073426ccd438831e6d3abb9d40"
  },
  {
    "url": "assets/img/customer.4e4dd06f.png",
    "revision": "4e4dd06f9864f5c9993299da841d35e9"
  },
  {
    "url": "assets/img/customerGrid.3a719b2e.png",
    "revision": "3a719b2e9bd9e2a9e7ba7867800b26c1"
  },
  {
    "url": "assets/img/customerPrice.9d1e5d18.png",
    "revision": "9d1e5d18955dede0d7c9a90fae5e5da9"
  },
  {
    "url": "assets/img/description.0c5cd1d1.png",
    "revision": "0c5cd1d17dd0de93eb5775d38cc824ff"
  },
  {
    "url": "assets/img/description.40848a5f.png",
    "revision": "40848a5f5f247f682852c84998efa3c0"
  },
  {
    "url": "assets/img/description.8a01022f.png",
    "revision": "8a01022faa9c7169b3b464d3b50ae2db"
  },
  {
    "url": "assets/img/description.cf62b04a.png",
    "revision": "cf62b04aa2f445f10339b56579fa52f8"
  },
  {
    "url": "assets/img/description.d969131c.png",
    "revision": "d969131c908608da5860ee182e6229bd"
  },
  {
    "url": "assets/img/description.dcf2688e.png",
    "revision": "dcf2688ee434ac2cfd839e613c73bd5d"
  },
  {
    "url": "assets/img/descriptions.765ffef8.png",
    "revision": "765ffef8e6c1d256cd89e6cd63e8a99e"
  },
  {
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
  },
  {
    "url": "assets/img/downloadable.67051ddc.png",
    "revision": "67051ddc29b8b662b724eddb30ba604e"
  },
  {
    "url": "assets/img/downlodableInfo.b6d199cc.png",
    "revision": "b6d199cc406607e28eaa126d0e1b8b6e"
  },
  {
    "url": "assets/img/editCategory.1e673965.png",
    "revision": "1e673965381721c39d193150c361755d"
  },
  {
    "url": "assets/img/editPage.5ad3e91b.png",
    "revision": "5ad3e91b4ed121bbc11c70665f3a0284"
  },
  {
    "url": "assets/img/editProduct.24b4c21d.png",
    "revision": "24b4c21dd133cc882224853a6be174fd"
  },
  {
    "url": "assets/img/editProduct.a0f174d2.png",
    "revision": "a0f174d28c7d61054863da62174ba8d1"
  },
  {
    "url": "assets/img/editProduct.ccce09c2.png",
    "revision": "ccce09c29ff97353f018001dfac74cd9"
  },
  {
    "url": "assets/img/editProduct.f3d03ba3.png",
    "revision": "f3d03ba38a9663379dd57eb22b49d626"
  },
  {
    "url": "assets/img/editProduct.fff08496.png",
    "revision": "fff0849642df2f8807b13fad295e8837"
  },
  {
    "url": "assets/img/editProducts.1d1ea4f3.png",
    "revision": "1d1ea4f388a0ccd939097fe3c8139328"
  },
  {
    "url": "assets/img/emailSetting.861f2aa4.png",
    "revision": "861f2aa493357812b89efe051baaa4a5"
  },
  {
    "url": "assets/img/emailSettings.39150cea.png",
    "revision": "39150cea1ae9747a18b55493c028cb17"
  },
  {
    "url": "assets/img/enableNewsletter.d0472579.png",
    "revision": "d04725797a67f04091339da2de467b92"
  },
  {
    "url": "assets/img/event.7eb17475.png",
    "revision": "7eb17475b469586397490e70b4dadec0"
  },
  {
    "url": "assets/img/eventName.50f4e068.png",
    "revision": "50f4e0685269914c2d3ff2a0a3887c05"
  },
  {
    "url": "assets/img/eventOutput.ca12f7e6.png",
    "revision": "ca12f7e6e171f8e2945da64a1bde655d"
  },
  {
    "url": "assets/img/exchangeOutput.c1dd511d.png",
    "revision": "c1dd511d49748d1caa1b31e16ccb0b84"
  },
  {
    "url": "assets/img/exchangeRate.6949e640.png",
    "revision": "6949e6408e43a509bad3c4a68dec9b5b"
  },
  {
    "url": "assets/img/exchangerateConfigurations.3fef1f77.png",
    "revision": "3fef1f77ac2ea8c113ad3fee785e79c8"
  },
  {
    "url": "assets/img/exchangerateGrid.18b0f0f7.png",
    "revision": "18b0f0f767a286b8ecec4305e7e015fb"
  },
  {
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
  },
  {
    "url": "assets/img/faviconOutput.0af4ffb5.png",
    "revision": "0af4ffb591592d1e7893fc1a040730ca"
  },
  {
    "url": "assets/img/frontendFavicon.2fb0d95a.png",
    "revision": "2fb0d95aaeb8e6138715620a1599af7a"
  },
  {
    "url": "assets/img/frontendLogos.686a5669.png",
    "revision": "686a5669a7300675dccc77bcc0832cd8"
  },
  {
    "url": "assets/img/frontendOutput.380a6cd1.png",
    "revision": "380a6cd10fc15e240b0ca3e629a661e5"
  },
  {
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
  },
  {
    "url": "assets/img/grouped.2f44c858.png",
    "revision": "2f44c858253f417437320c5c9ea3667c"
  },
  {
    "url": "assets/img/groupGrid.c4785f5f.png",
    "revision": "c4785f5ff2390e4d265850c801bdad2e"
  },
  {
    "url": "assets/img/groupPrice.924928de.png",
    "revision": "924928de7250cc7817f1d014bc84ed09"
  },
  {
    "url": "assets/img/groupProducts.67a99166.png",
    "revision": "67a99166d6e7b65e0fa7777cfabace42"
  },
  {
    "url": "assets/img/guestCheckout.4e097830.png",
    "revision": "4e097830b799d41574e207014b0d6bad"
  },
  {
    "url": "assets/img/image-ai.fd1bf4e0.png",
    "revision": "fd1bf4e02f90dc729016319dbddacadf"
  },
  {
    "url": "assets/img/image.14ecf612.png",
    "revision": "14ecf612cd25f06d6b8e0697ba510c52"
  },
  {
    "url": "assets/img/image.4fb420d5.png",
    "revision": "4fb420d5f271c4c97f186eb11e1dff05"
  },
  {
    "url": "assets/img/image.5fcfa261.png",
    "revision": "5fcfa261a6017b174d1da408d814911f"
  },
  {
    "url": "assets/img/image.6a9cc529.png",
    "revision": "6a9cc529f91e47c9fed2a5bca27de29a"
  },
  {
    "url": "assets/img/image.ac99298b.png",
    "revision": "ac99298bc7c874fc29cd2279398e2655"
  },
  {
    "url": "assets/img/image.b30e57d4.png",
    "revision": "b30e57d4619cab816c7f63f1f039c26a"
  },
  {
    "url": "assets/img/image.e99c275b.png",
    "revision": "e99c275be41933e50a8ebfbb862e0e59"
  },
  {
    "url": "assets/img/imageMagic.3cc5adec.png",
    "revision": "3cc5adeccff6836619050eb055c5e5fd"
  },
  {
    "url": "assets/img/images.4a69d22e.png",
    "revision": "4a69d22e7884b0a3cde7ff619496f46f"
  },
  {
    "url": "assets/img/imageSize.8e066795.png",
    "revision": "8e066795f9129b4fd7da35ec8f8288d1"
  },
  {
    "url": "assets/img/import.724fed65.png",
    "revision": "724fed65d7ed4881824b62c03a95dc11"
  },
  {
    "url": "assets/img/importDone.0d444b37.png",
    "revision": "0d444b374f97ef023c12a81ef49f86ad"
  },
  {
    "url": "assets/img/importOutput.eeb6d038.png",
    "revision": "eeb6d038073f42ffa84377842b7d5270"
  },
  {
    "url": "assets/img/inventoryConfiguration.3d59b832.png",
    "revision": "3d59b832b80fb87801a0fb424a93c2bc"
  },
  {
    "url": "assets/img/inventoryOutput.2b30b856.png",
    "revision": "2b30b856b6f4572dc578e9838781b3c4"
  },
  {
    "url": "assets/img/inventorySetting.bfce85d5.png",
    "revision": "bfce85d5821f613402a25b49b762249e"
  },
  {
    "url": "assets/img/inventorySource.703ce5b3.png",
    "revision": "703ce5b39e6977f9ac933c806b203fb0"
  },
  {
    "url": "assets/img/invoice.befbdba3.png",
    "revision": "befbdba38ad837425e6a20e8278637b7"
  },
  {
    "url": "assets/img/invoicenumberSettings.495f7127.png",
    "revision": "495f712718a7b86806df3307165d04c0"
  },
  {
    "url": "assets/img/invoiceReminder.d09415a1.png",
    "revision": "d09415a145d7bbdb914ae41f9cbd0928"
  },
  {
    "url": "assets/img/invoiceSlip.8d53aba6.png",
    "revision": "8d53aba693968cfbe1f4e6a4dddcf977"
  },
  {
    "url": "assets/img/invoiceSubmit.da097460.png",
    "revision": "da0974603b074d5dd4a66eba35945d63"
  },
  {
    "url": "assets/img/js.c347da35.png",
    "revision": "c347da35f27b670819805af58578695c"
  },
  {
    "url": "assets/img/link.68f3ea34.png",
    "revision": "68f3ea347f52221dab0cfb28f17f3a6e"
  },
  {
    "url": "assets/img/link.ef489c2e.png",
    "revision": "ef489c2ecd25145c1ea738c82eaf4edc"
  },
  {
    "url": "assets/img/localeChannel.61e5efa8.png",
    "revision": "61e5efa86318d439b1d7438389eb3bc2"
  },
  {
    "url": "assets/img/localeGrid.3cc059ab.png",
    "revision": "3cc059ab5b961f59a840fd4f4a24f944"
  },
  {
    "url": "assets/img/locales.1eec3541.png",
    "revision": "1eec3541589c43acfd900c577a90e2cb"
  },
  {
    "url": "assets/img/logoOutputs.3be56cf8.png",
    "revision": "3be56cf8cce9f1405a499e2c5cf7ed82"
  },
  {
    "url": "assets/img/magic.c9b20146.png",
    "revision": "c9b20146402bfb72c7b2b32f67b104f1"
  },
  {
    "url": "assets/img/metaDescription.16764ed9.png",
    "revision": "16764ed924978ceba5e8309f09f5ca78"
  },
  {
    "url": "assets/img/metaDescription.74f66c89.png",
    "revision": "74f66c899f15052cfaaa76033580ef0e"
  },
  {
    "url": "assets/img/metaDescription.afb36600.png",
    "revision": "afb36600eab84ea9868a197a962dde20"
  },
  {
    "url": "assets/img/metaDescription.dd43b5fa.png",
    "revision": "dd43b5fa54988ec0dd492416f63f6deb"
  },
  {
    "url": "assets/img/metaDescription.efc89005.png",
    "revision": "efc890052f6645d6745646af2b18bd40"
  },
  {
    "url": "assets/img/metaDescriptions.4dfbc31b.png",
    "revision": "4dfbc31baabc5bdc385e298bb43d42b2"
  },
  {
    "url": "assets/img/miniCart.c2175151.png",
    "revision": "c2175151f11fc3d41f7b1158ee3dc055"
  },
  {
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
  },
  {
    "url": "assets/img/newCurrency.ad269f28.png",
    "revision": "ad269f28da67564867b6782f90199416"
  },
  {
    "url": "assets/img/newGroup.0ffae93a.png",
    "revision": "0ffae93ad5842d7e77209c73c2ee8f10"
  },
  {
    "url": "assets/img/newLocale.0e9afa70.png",
    "revision": "0e9afa702eff98da246a19e18ee54007"
  },
  {
    "url": "assets/img/newsletterGrid.fe1bd92d.png",
    "revision": "fe1bd92df43b9eef5ebe493650930929"
  },
  {
    "url": "assets/img/newsletterSettings.b9d66c0a.png",
    "revision": "b9d66c0a1c96bf0d50fc15edc511c050"
  },
  {
    "url": "assets/img/notifications.0cf7b2b1.png",
    "revision": "0cf7b2b1537dad395e36ef791eae7e0d"
  },
  {
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/options.725fc8d0.png",
    "revision": "725fc8d0e18059346598f02e4aabf2de"
  },
  {
    "url": "assets/img/orderID.05515d8b.png",
    "revision": "05515d8b0ec724d380e00578091597cf"
  },
  {
    "url": "assets/img/orderID.2c2d3b76.png",
    "revision": "2c2d3b7625544f02c95f3120fdb7ed0c"
  },
  {
    "url": "assets/img/orderInfo.653f834c.png",
    "revision": "653f834c7e13e5eda039763e29a7011b"
  },
  {
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
  },
  {
    "url": "assets/img/orderSettings.f4ab6c13.png",
    "revision": "f4ab6c13c25e37cd93dde2287785c7a8"
  },
  {
    "url": "assets/img/outofstock.383c7271.png",
    "revision": "383c727177947943215434993682c870"
  },
  {
    "url": "assets/img/output.31b099f6.png",
    "revision": "31b099f668578a9215701cbe7e382c5a"
  },
  {
    "url": "assets/img/output.41bd8676.png",
    "revision": "41bd86762890d2f525078bca7e186536"
  },
  {
    "url": "assets/img/output.4778ea36.png",
    "revision": "4778ea36ffc3c72e1c69e17d3b36d50f"
  },
  {
    "url": "assets/img/output.71dc9bec.png",
    "revision": "71dc9bece4c5b15ab5f7dd076fe361cb"
  },
  {
    "url": "assets/img/output.7881c7c4.png",
    "revision": "7881c7c4e6cc64e4163339e667b411d7"
  },
  {
    "url": "assets/img/output.919d1184.png",
    "revision": "919d1184445ccdc6575ac69f96fc81c4"
  },
  {
    "url": "assets/img/output.c8ed1df3.png",
    "revision": "c8ed1df3080c6c55af735ddb1d491ff7"
  },
  {
    "url": "assets/img/output.cc9621ee.png",
    "revision": "cc9621eecc949453e93b99ae86a9ce7e"
  },
  {
    "url": "assets/img/output.df4635e8.png",
    "revision": "df4635e844f2cca421177674a30e307e"
  },
  {
    "url": "assets/img/output.f6302d0e.png",
    "revision": "f6302d0e87674b638a14a9e97e755125"
  },
  {
    "url": "assets/img/pageConfiguration.d4acc9ec.png",
    "revision": "d4acc9ecfa471060a232843411b19558"
  },
  {
    "url": "assets/img/paymentTerms.6bc06672.png",
    "revision": "6bc066729a21ce264d448791c7599b08"
  },
  {
    "url": "assets/img/paypal.08e56b66.png",
    "revision": "08e56b6616a2f58b5f79e2aaf49ad38b"
  },
  {
    "url": "assets/img/paypalStandard.eb088da0.png",
    "revision": "eb088da0fea21d1a77683e6e02549e18"
  },
  {
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
  },
  {
    "url": "assets/img/placeOrder.4b5ab597.png",
    "revision": "4b5ab5978315613992e24f88515d4db7"
  },
  {
    "url": "assets/img/price.4315931a.png",
    "revision": "4315931a1c332f9f20eb322b394f1258"
  },
  {
    "url": "assets/img/price.86fae45c.png",
    "revision": "86fae45cb1a4e4afe4bde5667ab03074"
  },
  {
    "url": "assets/img/price.b32785ac.png",
    "revision": "b32785acffd1121a1079927e0670f95a"
  },
  {
    "url": "assets/img/priceOutput.cd52618f.png",
    "revision": "cd52618fad240d3beeb7fb2f71cbf543"
  },
  {
    "url": "assets/img/pricing.05f6d9d9.png",
    "revision": "05f6d9d9f5e5f4461e1e2ba8b1d36a54"
  },
  {
    "url": "assets/img/product.4402c959.png",
    "revision": "4402c959fad67f9bbeb0855e84b8e541"
  },
  {
    "url": "assets/img/productCarousel.5a334508.png",
    "revision": "5a334508dcf6e400ecd526cf4d74f9bc"
  },
  {
    "url": "assets/img/productCategory.c158016f.png",
    "revision": "c158016f873fce0881518c9e3633878c"
  },
  {
    "url": "assets/img/productInventory.2a6d376b.png",
    "revision": "2a6d376b49a37ba160dd486f55ec3ce1"
  },
  {
    "url": "assets/img/productPage.0913d8b4.png",
    "revision": "0913d8b48fc4906e17f430524af08086"
  },
  {
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
  },
  {
    "url": "assets/img/rating.3679908c.png",
    "revision": "3679908cff55dcc0c0fb4f7a99b500cd"
  },
  {
    "url": "assets/img/refund.09ecb441.png",
    "revision": "09ecb441a72704b1d28a4c8d54fb5789"
  },
  {
    "url": "assets/img/refundGrid.42bc1d1c.png",
    "revision": "42bc1d1c90cc25b6a1f6d4e24d377f70"
  },
  {
    "url": "assets/img/refundShipped.99608d23.png",
    "revision": "99608d23ded540d9778491b0fca93f4b"
  },
  {
    "url": "assets/img/refundShipping.4d8b9070.png",
    "revision": "4d8b90709a1a6f071c8eddf6da1ce0a3"
  },
  {
    "url": "assets/img/reorder.20a44d56.png",
    "revision": "20a44d567c5c2ebc58ee88c05aad13ae"
  },
  {
    "url": "assets/img/reorderAddress.e6723f30.png",
    "revision": "e6723f303700199f3b8ad8ad9c7c2918"
  },
  {
    "url": "assets/img/reorderOutput.38c4eec0.png",
    "revision": "38c4eec04252cdb695e1f47d6810fde8"
  },
  {
    "url": "assets/img/review.91414169.png",
    "revision": "91414169bfcb300e4a48ab09ab60c09d"
  },
  {
    "url": "assets/img/review.97d17f45.png",
    "revision": "97d17f45342502ee075640a128762069"
  },
  {
    "url": "assets/img/reviewMagic.f9bb1189.png",
    "revision": "f9bb1189c73e87d904035c4c923c790f"
  },
  {
    "url": "assets/img/reviewStatus.347d2b17.png",
    "revision": "347d2b17a6d7abc03995c73d55ca0837"
  },
  {
    "url": "assets/img/role.d29f5e51.png",
    "revision": "d29f5e513d513b6bb333491d7716db7a"
  },
  {
    "url": "assets/img/roleGrid.8c856367.png",
    "revision": "8c856367466c7cd785ee13da5856fb5b"
  },
  {
    "url": "assets/img/saveCategory.89f05b5c.png",
    "revision": "89f05b5cf82a626e6691689505f2fba0"
  },
  {
    "url": "assets/img/saveCurrency.d61ef1e7.png",
    "revision": "d61ef1e7e058aaf2df07595c9f15af22"
  },
  {
    "url": "assets/img/saveCurrency.f006311d.png",
    "revision": "f006311d38ecd3502f3a4e82cf9488e0"
  },
  {
    "url": "assets/img/saveFamily.30a732be.png",
    "revision": "30a732be79f350059a629ce8c9fcc461"
  },
  {
    "url": "assets/img/saveSitemap.9d549fa5.png",
    "revision": "9d549fa5eda56a30d0f36770bb69198d"
  },
  {
    "url": "assets/img/saveSitemap.c7785ab4.png",
    "revision": "c7785ab45983693dee9e0b2ee7aa1fb9"
  },
  {
    "url": "assets/img/savetaxRate.30e22c4d.png",
    "revision": "30e22c4d79233052db8f64938aa647bc"
  },
  {
    "url": "assets/img/saveTheme.d74db5b4.png",
    "revision": "d74db5b4d4c3f8885223fcb19f6c6701"
  },
  {
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/searchCustomer.95d5654c.png",
    "revision": "95d5654c56267778606419349014da53"
  },
  {
    "url": "assets/img/searchField.de2dd0e2.png",
    "revision": "de2dd0e25b64eb5052c6c59cfbbfa266"
  },
  {
    "url": "assets/img/searchGrids.05edc08e.png",
    "revision": "05edc08ecf31f7a0344df346d681ec15"
  },
  {
    "url": "assets/img/searchProduct.6f685a4a.png",
    "revision": "6f685a4a8ec35e726ff2cffcfe26a21e"
  },
  {
    "url": "assets/img/searchSynonym.3844db4a.png",
    "revision": "3844db4a8f0c024759d2b7b6b5fb504d"
  },
  {
    "url": "assets/img/searchTerm.848f16e0.png",
    "revision": "848f16e0d25339ad014fd1ce824f00ee"
  },
  {
    "url": "assets/img/seo.0fe2a12e.png",
    "revision": "0fe2a12e28ae684ad59cded993695277"
  },
  {
    "url": "assets/img/seo.43c81d1e.png",
    "revision": "43c81d1e466f44350197e09d98ce17ca"
  },
  {
    "url": "assets/img/settings.bc0811ed.png",
    "revision": "bc0811ed6f10a3efbb433a05c37d80ee"
  },
  {
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
  },
  {
    "url": "assets/img/shipping.c2dae652.png",
    "revision": "c2dae652ee87990725785957fe6b604b"
  },
  {
    "url": "assets/img/shippingMethods.cfa03447.png",
    "revision": "cfa03447db2765d2e65294b8c2b2063a"
  },
  {
    "url": "assets/img/shoppingCart.a89412b1.png",
    "revision": "a89412b1e66c5f066c6f162baccbd2a4"
  },
  {
    "url": "assets/img/simple.548f03a1.png",
    "revision": "548f03a1366af976be5f6baa86428155"
  },
  {
    "url": "assets/img/sitemapOutput.ceffe7ff.png",
    "revision": "ceffe7ffe838b6f514286cef4b25fb0d"
  },
  {
    "url": "assets/img/sitemapOutput.e24ff06d.png",
    "revision": "e24ff06d3165dceebb45c6453657eb5a"
  },
  {
    "url": "assets/img/socialOutput.3896fec4.png",
    "revision": "3896fec4529040dcaac7eb7940371192"
  },
  {
    "url": "assets/img/socialShare.dcf350bd.png",
    "revision": "dcf350bd7c6a69e01a684aa44e9514fb"
  },
  {
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
  },
  {
    "url": "assets/img/storefront.a0695081.png",
    "revision": "a0695081bf6125bf67739945536454b8"
  },
  {
    "url": "assets/img/synonymField.dac8c96a.png",
    "revision": "dac8c96ae4ec7249b2869618909d7d84"
  },
  {
    "url": "assets/img/synonymGrid.72ffd066.png",
    "revision": "72ffd066b60baa41373c2a0926800f85"
  },
  {
    "url": "assets/img/synonymOutput.67432a8c.png",
    "revision": "67432a8c2936f23947b87957dcfa2219"
  },
  {
    "url": "assets/img/taxes.b9e43e0b.png",
    "revision": "b9e43e0b01fad3c1ac734dc697eaa378"
  },
  {
    "url": "assets/img/taxFront.5242347c.png",
    "revision": "5242347c1306003a46e2810d37931087"
  },
  {
    "url": "assets/img/taxRate.023eb978.png",
    "revision": "023eb97817841b7c866ed3a6c6613dbb"
  },
  {
    "url": "assets/img/template.9b486bdd.png",
    "revision": "9b486bdd4d7175b34e132a6df8148c2c"
  },
  {
    "url": "assets/img/templateName.43120a7a.png",
    "revision": "43120a7a054d78614433576051480f3b"
  },
  {
    "url": "assets/img/theme.9274b839.png",
    "revision": "9274b83993edf501f5935d220fed10d0"
  },
  {
    "url": "assets/img/themeOutput.02bd1082.png",
    "revision": "02bd1082e7cbad107c58e4db4b5f1089"
  },
  {
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
  },
  {
    "url": "assets/img/urlFields.51f0b59e.png",
    "revision": "51f0b59e3066f795bfb7060828724db9"
  },
  {
    "url": "assets/img/urlOutput.1a1e6414.png",
    "revision": "1a1e641433cd569d5186488a3513435f"
  },
  {
    "url": "assets/img/urlRewrite.cc5d8f75.png",
    "revision": "cc5d8f75656cac9b722dcf499c9cad94"
  },
  {
    "url": "assets/img/user.506a3658.png",
    "revision": "506a3658ffbe570bb93948b46bc4ec28"
  },
  {
    "url": "assets/img/userOutput.113745b3.png",
    "revision": "113745b35c89cc73195439db94fa4625"
  },
  {
    "url": "assets/img/validation.9c7ee3aa.png",
    "revision": "9c7ee3aae6a85912e64cf5879932b696"
  },
  {
    "url": "assets/img/variations.9be19c16.png",
    "revision": "9be19c168dd7dc86d64dd341abb15832"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.c4984ac7.js",
    "revision": "a0d76548d7706ffef9e069e8a8e4e08d"
  },
  {
    "url": "assets/js/10.72487609.js",
    "revision": "e7a937783c4945d0032eb8b5e395a9b7"
  },
  {
    "url": "assets/js/100.dac0daca.js",
    "revision": "2bbc2b02f3a7b97f6ee142ba578ee53b"
  },
  {
    "url": "assets/js/101.554ab28b.js",
    "revision": "1d360e33d02d8a142d3fc8b409257f4f"
  },
  {
    "url": "assets/js/102.f9f469cb.js",
    "revision": "4352c4b2f479be69b9bc005fc67f9689"
  },
  {
    "url": "assets/js/103.dc302274.js",
    "revision": "4fad2a560c628393b8cc1c0d2e94d679"
  },
  {
    "url": "assets/js/104.92ad6b5b.js",
    "revision": "adb54005c19fe9e94785c4d4e581da86"
  },
  {
    "url": "assets/js/105.0b058114.js",
    "revision": "03ebdd55bf0e7c7199f7d95ff7441445"
  },
  {
    "url": "assets/js/106.9587644e.js",
    "revision": "f58b84b3a76253da93d7ba089b435efd"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.e12e555f.js",
    "revision": "2045544043e070e875a39de8e1d11251"
  },
  {
    "url": "assets/js/109.557851c7.js",
    "revision": "cc4cee7f0a82f9bfd7a7f72738e36e9f"
  },
  {
    "url": "assets/js/11.760cf1b8.js",
    "revision": "2f8471a8e4cad6170e98bb369641d771"
  },
  {
    "url": "assets/js/110.7a8c8575.js",
    "revision": "1fb9fe53d48149bf00dfe5b28dbbb3c4"
  },
  {
    "url": "assets/js/111.1bf1c366.js",
    "revision": "bfc6c7bc6a2d5ee3d9f02cb2ddb76c1a"
  },
  {
    "url": "assets/js/112.aa752989.js",
    "revision": "55ece62daa9a431a5410742d73ae55cd"
  },
  {
    "url": "assets/js/113.1650e934.js",
    "revision": "2f610e8c464adab8cdaa4c05c6eaa1c4"
  },
  {
    "url": "assets/js/114.84f8e811.js",
    "revision": "56bc501f1f5588c7bcd9ec5cbca69b0c"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.c98edf8c.js",
    "revision": "28699ebde259ee30f82cb53ae4e37500"
  },
  {
    "url": "assets/js/117.c8c07209.js",
    "revision": "30d370ff562a2dde98fe347825cacb50"
  },
  {
    "url": "assets/js/118.4b8a4e0d.js",
    "revision": "15359af9857acd0394a97876a89fa54b"
  },
  {
    "url": "assets/js/119.930cd50a.js",
    "revision": "14162c4603d122da8c1ef5cd22d528d0"
  },
  {
    "url": "assets/js/12.f8901d8b.js",
    "revision": "146c29e75e93df3f585969cb6e19b76f"
  },
  {
    "url": "assets/js/120.b018088f.js",
    "revision": "723fd9299249024e96d283edfcb5a254"
  },
  {
    "url": "assets/js/121.684a6a7a.js",
    "revision": "0378c776535ca8c6c65c9bf8d7f5bb1f"
  },
  {
    "url": "assets/js/122.ba95b1b4.js",
    "revision": "6b4ef2488607f9aff1b883f9711d25ee"
  },
  {
    "url": "assets/js/123.c40839e8.js",
    "revision": "6e053f621ca975963ddae061266fd9ad"
  },
  {
    "url": "assets/js/124.4b01c9dc.js",
    "revision": "f4f57d065f6828e7b471be48ec744587"
  },
  {
    "url": "assets/js/125.608830ef.js",
    "revision": "4558727a4303a3fe5d0e95c7162e1bbb"
  },
  {
    "url": "assets/js/126.42f3b102.js",
    "revision": "7d31f24c78b6c537fa2ea7b36d0a31b8"
  },
  {
    "url": "assets/js/127.af538c3d.js",
    "revision": "511b7bcf01341eabbb27a62db3125f37"
  },
  {
    "url": "assets/js/128.c09aa4bd.js",
    "revision": "cf3784a7100aabbaf2156e0b251393e3"
  },
  {
    "url": "assets/js/129.0e1c84f7.js",
    "revision": "2184172aeed3baa55a3cf9b0374f9d7c"
  },
  {
    "url": "assets/js/13.753d2a7f.js",
    "revision": "61319d845f6247a99515a0f6bf2bed91"
  },
  {
    "url": "assets/js/130.a7a98815.js",
    "revision": "aff0a6ee4c640a9f234e87411cd8f62a"
  },
  {
    "url": "assets/js/131.7678a975.js",
    "revision": "851646ba0ceb91774eebcf0b67773c6b"
  },
  {
    "url": "assets/js/132.b0af6da3.js",
    "revision": "f1c9bc1476a1cbb83534a3968585728f"
  },
  {
    "url": "assets/js/133.75ca6e80.js",
    "revision": "e84832087aff2d5de3f86cf852ae3bcd"
  },
  {
    "url": "assets/js/134.f23e7f3b.js",
    "revision": "5cfdd36e03a067e82cb512796ade7c4e"
  },
  {
    "url": "assets/js/135.d8ea5942.js",
    "revision": "ee6764b1c3033a64677f6af3331716a4"
  },
  {
    "url": "assets/js/136.0e54484d.js",
    "revision": "bee8b275849ca093a438df5d02df6832"
  },
  {
    "url": "assets/js/137.7729edd0.js",
    "revision": "390cbe9d0a47030c895d3a81c8bcd93e"
  },
  {
    "url": "assets/js/138.cf086df2.js",
    "revision": "35e5230f8bd21b4fe2cc3cf0614b1399"
  },
  {
    "url": "assets/js/139.80349eac.js",
    "revision": "7c6005cee89859f124aa54204692b53c"
  },
  {
    "url": "assets/js/14.c855f345.js",
    "revision": "0d905803b14d6c7bf09a35671c0e5f9e"
  },
  {
    "url": "assets/js/140.e89502ee.js",
    "revision": "614ded39aa00af549fded7aed1f206fb"
  },
  {
    "url": "assets/js/141.1d583949.js",
    "revision": "526ee2c4889fecb6689a02752fd2b24e"
  },
  {
    "url": "assets/js/142.fa493817.js",
    "revision": "67c8fa195f1f06f0972771907e4e35e5"
  },
  {
    "url": "assets/js/143.7ff2ab5a.js",
    "revision": "c342253c7f39eb03301d5199b44a6176"
  },
  {
    "url": "assets/js/144.cf4bffaf.js",
    "revision": "ef3f1d576ca0d385ed47154b14baf57c"
  },
  {
    "url": "assets/js/145.7614e38e.js",
    "revision": "1d5215702e351dafead65f1a77cf3bd8"
  },
  {
    "url": "assets/js/146.421c1ca1.js",
    "revision": "0abcf7a023f4ca458004fbb30eb988c9"
  },
  {
    "url": "assets/js/147.949b72b3.js",
    "revision": "1d3007a6ae32ed04a54cd187d4906f0b"
  },
  {
    "url": "assets/js/148.fdbad184.js",
    "revision": "51ab49ada127bdb0fae360b5f35e8904"
  },
  {
    "url": "assets/js/149.8e85d5c0.js",
    "revision": "a4b1e1e3601b3a3297ce5f46a2aae494"
  },
  {
    "url": "assets/js/15.7f0ece7f.js",
    "revision": "98e45cbe4b3f1137dbc1dbfaa2fb2976"
  },
  {
    "url": "assets/js/150.b6d12b35.js",
    "revision": "0e12cba169194f099a3fb8dc478720fe"
  },
  {
    "url": "assets/js/151.8ad2c9a1.js",
    "revision": "2c52259c0658adf7bc2cef009d6d08dd"
  },
  {
    "url": "assets/js/152.b80fde4b.js",
    "revision": "bc7fcd964df05cac002642532aef40f5"
  },
  {
    "url": "assets/js/153.c0cb63aa.js",
    "revision": "5b9270aab0801aa748ff81f6b6a5b9fd"
  },
  {
    "url": "assets/js/16.fa1780ff.js",
    "revision": "a2ef51cd7f496e9587f3d457495333be"
  },
  {
    "url": "assets/js/17.53aa5a0b.js",
    "revision": "4c9ca8940eb5df44791ca36057f7b739"
  },
  {
    "url": "assets/js/18.01c6ac09.js",
    "revision": "45ae06a77f199888e0ecbaecede95ceb"
  },
  {
    "url": "assets/js/19.347c3c75.js",
    "revision": "6959cdbf44cec4c2797f002c04f906c6"
  },
  {
    "url": "assets/js/2.f7a3cad0.js",
    "revision": "aae89ddbd7a5e7d041ac09a1a6f1afdf"
  },
  {
    "url": "assets/js/20.f634c177.js",
    "revision": "2565b24453d34d24045a835fc580267d"
  },
  {
    "url": "assets/js/21.b47049b6.js",
    "revision": "68ea10a8d8e9282a5653debe077f4598"
  },
  {
    "url": "assets/js/22.49c11e2d.js",
    "revision": "9c36cf82bbbbc5c4bf57e763b8e5973e"
  },
  {
    "url": "assets/js/23.8161f575.js",
    "revision": "906f8a9877183202b67a05a554bb58b1"
  },
  {
    "url": "assets/js/24.1006edb9.js",
    "revision": "7add2f917ca30fa9454b49377adb0c60"
  },
  {
    "url": "assets/js/25.90eb6069.js",
    "revision": "0ff78a6963909c7dfb790c6776325f51"
  },
  {
    "url": "assets/js/26.c1315510.js",
    "revision": "62fdace3a1b932f6104d01f958be1c93"
  },
  {
    "url": "assets/js/27.47a67127.js",
    "revision": "fe7b7c04bfe28ba0ac79538828d63870"
  },
  {
    "url": "assets/js/28.424a9a88.js",
    "revision": "6de79628e587468a4713b7caf8a9eb0e"
  },
  {
    "url": "assets/js/29.ac75d077.js",
    "revision": "ad5be50e5c275f1ed44eeeb0bfbd034f"
  },
  {
    "url": "assets/js/3.13c58375.js",
    "revision": "40b016b9fe9cbb24a0e1a2d33b29ea75"
  },
  {
    "url": "assets/js/30.69163a3e.js",
    "revision": "ce67c9fdb4ecc92a32152714c6e535c4"
  },
  {
    "url": "assets/js/31.0b152c50.js",
    "revision": "0cd56b6087f6a5bad66a00196a767227"
  },
  {
    "url": "assets/js/32.c1b5c83c.js",
    "revision": "c4387b1138892e2f548faef541e49c0c"
  },
  {
    "url": "assets/js/33.c29dfd98.js",
    "revision": "3298e0a8513edfa8a22fbdc63690b94f"
  },
  {
    "url": "assets/js/34.3d49d82a.js",
    "revision": "0f02b83615fee27285b5aec76653b979"
  },
  {
    "url": "assets/js/35.5cabfae0.js",
    "revision": "8a6a986c0e32f7e83adf79f51b20051b"
  },
  {
    "url": "assets/js/36.00a50dff.js",
    "revision": "bd0c7d2d0ff1479e0869576ebd3cdce5"
  },
  {
    "url": "assets/js/37.ba6895ea.js",
    "revision": "bf12fbcd3e0a647baf18c6806f929ea2"
  },
  {
    "url": "assets/js/38.ff531caa.js",
    "revision": "f08981a192474371550a53d3a44f2e8b"
  },
  {
    "url": "assets/js/39.c7f62342.js",
    "revision": "57c54e343503894ef1856d5c665d9f18"
  },
  {
    "url": "assets/js/4.657fffac.js",
    "revision": "17a8b12d30877a969bd58c2d10a80506"
  },
  {
    "url": "assets/js/40.144f6142.js",
    "revision": "cfec92bbfe86bddc96eb223d1f31c6e6"
  },
  {
    "url": "assets/js/41.140f1f85.js",
    "revision": "5bf5b8284304a983c47ded7721d25b73"
  },
  {
    "url": "assets/js/42.4d612493.js",
    "revision": "f532a109ce0383efea30aefc23e26021"
  },
  {
    "url": "assets/js/43.a66ede0e.js",
    "revision": "a112ff968748cc44367a1eb35c35082f"
  },
  {
    "url": "assets/js/44.0563fb91.js",
    "revision": "50d6457a6cdf104f5dc61ff0d5adebac"
  },
  {
    "url": "assets/js/45.0bad8db7.js",
    "revision": "90a87df6936b3040e24265ebcb0e42b4"
  },
  {
    "url": "assets/js/46.715d0197.js",
    "revision": "4fceef5b03fb2b502e229225c5eb765e"
  },
  {
    "url": "assets/js/47.8412e1c8.js",
    "revision": "96aa1431273574769421fe1b2db0cd2a"
  },
  {
    "url": "assets/js/48.821208a3.js",
    "revision": "c7e3454ee9b9e3287dbbb3257388972f"
  },
  {
    "url": "assets/js/49.dbc34669.js",
    "revision": "339b321946e337cd341e53b1ed6f4fd4"
  },
  {
    "url": "assets/js/5.71cfd8c2.js",
    "revision": "982e67f23e26c1abc49d846f0afd4109"
  },
  {
    "url": "assets/js/50.f254e1d7.js",
    "revision": "3dd1c9744bbeb61fac2d719f367668a1"
  },
  {
    "url": "assets/js/51.3373ff0a.js",
    "revision": "c85c5cd26b83966b5355287fd90bb34b"
  },
  {
    "url": "assets/js/52.e57d7e89.js",
    "revision": "b4c7d4a417d901d4c18a153b33c46605"
  },
  {
    "url": "assets/js/53.5d77850b.js",
    "revision": "8817a7415c0959e870279965b07f1704"
  },
  {
    "url": "assets/js/54.e0da4a9a.js",
    "revision": "a3cba3edd477d20bcd34c430a0838167"
  },
  {
    "url": "assets/js/55.36239ab4.js",
    "revision": "0797a13ae220a623ab91d980c4cbd519"
  },
  {
    "url": "assets/js/56.632dacff.js",
    "revision": "474fda2204388b5c76dca91cf8175a1f"
  },
  {
    "url": "assets/js/57.bad21c12.js",
    "revision": "c61590bb11508fca8c555ec01ab8104a"
  },
  {
    "url": "assets/js/58.afc60922.js",
    "revision": "c8e68c2ba5c090137095b6799738bf45"
  },
  {
    "url": "assets/js/59.a507a817.js",
    "revision": "2324d4b147bcd6a8bd3b4198dc612cd3"
  },
  {
    "url": "assets/js/60.41df3b3a.js",
    "revision": "ad6d477396e36bb02a71cd5a3c344890"
  },
  {
    "url": "assets/js/61.bc251419.js",
    "revision": "fbc6477511a515d7977f8f1de423598c"
  },
  {
    "url": "assets/js/62.db771354.js",
    "revision": "660791dcda21d6204fa8f6ebb8d172e5"
  },
  {
    "url": "assets/js/63.2be7141a.js",
    "revision": "0cf00e522a67e3832fe23e33f4ad8a97"
  },
  {
    "url": "assets/js/64.d7f0219c.js",
    "revision": "4c239ae302cdd89a5cb4711eb9d2e753"
  },
  {
    "url": "assets/js/65.403d14c4.js",
    "revision": "a7c58852a7cc971a4c99edabba3e23fe"
  },
  {
    "url": "assets/js/66.0f4bd77d.js",
    "revision": "43e90d40a5fe1be651bd0d206e3d2230"
  },
  {
    "url": "assets/js/67.3e412c29.js",
    "revision": "e7b7c1d29cb3101e69c2b69e90d15d54"
  },
  {
    "url": "assets/js/68.a0b12332.js",
    "revision": "f7e792dda343cae9a393983af606a7fa"
  },
  {
    "url": "assets/js/69.23beec78.js",
    "revision": "bedda710e5b486cea20a07efbba08a30"
  },
  {
    "url": "assets/js/70.0e932464.js",
    "revision": "fd6d91dc50b9a687027dd8e9ec78d3a9"
  },
  {
    "url": "assets/js/71.7d523139.js",
    "revision": "0c9903c096e34d8dc505ae205c65c714"
  },
  {
    "url": "assets/js/72.c4df07e1.js",
    "revision": "e5eb4a83bd2ead47d240deae102ab977"
  },
  {
    "url": "assets/js/73.e7d15775.js",
    "revision": "04ef18add5d230fd0f3b764db1618137"
  },
  {
    "url": "assets/js/74.1acab27d.js",
    "revision": "fe036d5e2d639a6928e4fa86f91dcaa6"
  },
  {
    "url": "assets/js/75.b1171b2e.js",
    "revision": "1342ed918d94112827d0fd7e840c8bef"
  },
  {
    "url": "assets/js/76.dbdbb516.js",
    "revision": "5cc74d972cc9437c16b2ab414886d562"
  },
  {
    "url": "assets/js/77.b9a1e559.js",
    "revision": "e339d31313881f10c7797ec2e1fb483d"
  },
  {
    "url": "assets/js/78.685c73a4.js",
    "revision": "d9c4935d7e05819c4fe1c45c2c43fa6f"
  },
  {
    "url": "assets/js/79.24cab4a9.js",
    "revision": "e47ce50ae3d52fb398362c4fe2ea57fa"
  },
  {
    "url": "assets/js/8.74427919.js",
    "revision": "5bd6794c1cbef8aab817fe73a4018419"
  },
  {
    "url": "assets/js/80.8ef6bde9.js",
    "revision": "72e146b5bc0044576135a4ceb3aaa2b7"
  },
  {
    "url": "assets/js/81.02f05744.js",
    "revision": "43930fec5f1bdaee226b1897f62c722f"
  },
  {
    "url": "assets/js/82.f61f1281.js",
    "revision": "f0d5344a70d9ef0afd493a5d5cfac736"
  },
  {
    "url": "assets/js/83.0619dd4f.js",
    "revision": "cc11ab3c386dadaf42f95d24cc0df799"
  },
  {
    "url": "assets/js/84.9c7005fb.js",
    "revision": "6662c94cb3889e89db6b9209f844ea21"
  },
  {
    "url": "assets/js/85.3da5f41f.js",
    "revision": "13af2b65a1fba30a82cb2e2ae688ccb1"
  },
  {
    "url": "assets/js/86.c5d831ea.js",
    "revision": "30a8815efd83315f3b2a1df5b6739dd2"
  },
  {
    "url": "assets/js/87.2995f6b6.js",
    "revision": "cc8c27fa87e80b32ee7c90c86bb2d310"
  },
  {
    "url": "assets/js/88.c93eba6e.js",
    "revision": "a7b25325e248b59bdbd5421c4f5f1291"
  },
  {
    "url": "assets/js/89.eb15c939.js",
    "revision": "86da8fd69cc0a9fdbfc34f87807050fa"
  },
  {
    "url": "assets/js/9.e885e43b.js",
    "revision": "becf387950d811cc1ef2b1190e553d0d"
  },
  {
    "url": "assets/js/90.95b764d6.js",
    "revision": "bf2be26a8a32bdd26244eca122a88b3d"
  },
  {
    "url": "assets/js/91.8461c386.js",
    "revision": "6f2efa78602f9b8359651d4844e431dd"
  },
  {
    "url": "assets/js/92.4392300f.js",
    "revision": "21bd6c409f977c4fe8f039cfedec5f51"
  },
  {
    "url": "assets/js/93.d03ca304.js",
    "revision": "b37616080b769231dd87f208daeabe5e"
  },
  {
    "url": "assets/js/94.5eb17915.js",
    "revision": "343d7ddbb6c233d8c718bbecd2a3a79c"
  },
  {
    "url": "assets/js/95.be837afb.js",
    "revision": "11539c95130e5118db2a7fe523395b3c"
  },
  {
    "url": "assets/js/96.dc814882.js",
    "revision": "1bb0fe04ee67a8ef435da6740fc9d275"
  },
  {
    "url": "assets/js/97.eac2bef5.js",
    "revision": "0aea2dd7f9cee5e501b7c2197ad8a393"
  },
  {
    "url": "assets/js/98.0d6e2527.js",
    "revision": "731a4a60befe72467bfbee63758b8d95"
  },
  {
    "url": "assets/js/99.e27d7f57.js",
    "revision": "cb6bebac075f5c0f714e260c0d2323c2"
  },
  {
    "url": "assets/js/app.c3178803.js",
    "revision": "ca007778454e61524c104436a873d992"
  },
  {
    "url": "assets/js/vendors~docsearch.0b0f1502.js",
    "revision": "eca09ec90e6fd31eb06d1d18447f20aa"
  },
  {
    "url": "index.html",
    "revision": "8a9f5c0047a1d97ce25a4b4f4ac28552"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
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
