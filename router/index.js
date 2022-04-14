const ErrorPage = () =>
  import(/* webpackChunkName: "vsf-error" */ 'theme/pages/Error');
const Product = () =>
  import(/* webpackChunkName: "vsf-product" */ 'theme/pages/Product');
const ForeversProduct = () =>
  import(/* webpackChunkName: "vsf-forevers-product" */ 'theme/pages/ForeversProduct');
const PrintedProduct = () =>
  import(/* webpackChunkName: "vsf-printed-product" */ 'theme/pages/PrintedProduct');
const PillowProduct = () =>
  import(/* webpackChunkName: "vsf-pillow-product" */ 'theme/pages/PillowProduct');
const PhrasePillowProduct = () =>
  import(/* webpackChunkName: "vsf-phrase-pillow-product" */ 'theme/pages/PhrasePillowProduct');
const Typography = () =>
  import(/* webpackChunkName: "vsf-product" */ 'theme/pages/Typography');
const Category = () =>
  import(/* webpackChunkName: "vsf-category" */ 'theme/pages/Category');
const Checkout = () =>
  import(/* webpackChunkName: "vsf-checkout" */ 'theme/pages/Checkout');
const DetailedCart = () =>
  import(/* webpackChunkName: "vsf-detailed-cart" */ 'theme/pages/DetailedCart');
const MyAccount = () =>
  import(/* webpackChunkName: "vsf-my-account" */ 'theme/pages/MyAccount');
const Static = () =>
  import(/* webpackChunkName: "vsf-static" */ 'theme/pages/Static');
const CartRecovery = () =>
  import(/* webpackChunkName: "vsf-cart-recovery" */ 'theme/pages/CartRecovery');
const CrossSells = () =>
  import(/* webpackChunkName: "vsf-cross-sells" */ 'theme/pages/CrossSells');
const GiftCards = () =>
  import(/* webpackChunkName: "vsf-gift-cards" */ 'theme/pages/GiftCards');

let routes = [
  { name: 'detailed-cart', path: '/checkout/cart', component: DetailedCart },
  {
    name: 'checkout',
    path: '/checkout/onepage/:success?',
    component: Checkout,
    props: true
  },
  { name: 'legal', path: '/legal', component: Static },
  { name: 'privacy', path: '/privacy', component: Static },
  { name: 'my-account', path: '/my-account', component: MyAccount },
  { name: 'about-us', path: '/about-us', component: Static },
  { name: 'customer-service', path: '/customer-service', component: Static },
  { name: 'store-locator', path: '/store-locator', component: Static },
  { name: 'size-guide', path: '/size-guide', component: Static },
  { name: 'delivery', path: '/delivery', component: Static },
  { name: 'returns', path: '/returns', component: Static },
  { name: 'contact', path: '/contact', component: Static },
  { name: 'typography-text', path: '/typography-text', component: Typography },
  { name: 'typography-form', path: '/typography-form', component: Typography },
  { name: 'typography-other', path: '/typography-other', component: Typography },
  { name: 'page-not-found', path: '*', component: ErrorPage },
  { name: 'error', path: '/error', component: ErrorPage, meta: { layout: 'minimal' } },
  { name: 'virtual-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'bundle-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'simple-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'downloadable-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'grouped-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'configurable-product', path: '/p/:parentSku/:slug/:childSku', component: Product },
  { name: 'plushToyAccessory-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'petsiesStarProduct-product', path: '/p/:parentSku/:slug', component: Product },
  { name: 'product', path: '/p/:parentSku/:slug/:childSku', component: Product },
  { name: 'category', path: '/c/:slug', component: Category },
  { name: 'cms-page', path: '/i/:slug', component: Static },
  {
    name: 'forevers-create',
    path: '/forevers/create',
    component: ForeversProduct
  },
  {
    name: 'forevers-create-alias-1',
    path: '/plushie/index/creationwizard/category_id/13',
    redirect: {
      name: 'forevers-create'
    }
  },
  {
    name: 'forevers-create-alias-2',
    path: '/plushie/index/creationwizard/category_id/13/attributeId/:plushieId',
    redirect: {
      name: 'forevers-create'
    }
  },
  {
    name: 'printed-product',
    path: '/printed/p/:sku',
    component: PrintedProduct,
    props: route => ({
      sku: route.params.sku,
      productDesign: route.query.product_design,
      existingPlushieId: route.query.existingPlushieId
    })
  },
  { name: 'pillow-product', path: '/pillows/create', component: PillowProduct },
  {
    name: 'pillow-product-alias',
    path: '/plushie/index/create/id/:plushieId/type/pillow',
    redirect: {
      name: 'pillow-product'
    }
  },
  { name: 'cross-sells', path: '/cross-sells/p/:parentSku', component: CrossSells },
  {
    name: 'cross-sells-alias',
    path: '/crosssell/index/index/product_id/:productId',
    redirect: ({ params }) => {
      let parentSku = '';

      switch (params.productId) {
        case '73':
          parentSku = 'ForeversDog_bundle';
          break;
        case '253':
          parentSku = 'customPillow_bundle';
          break;
        case '277':
          parentSku = 'customPrintedSocks_bundle';
          break;
        case '333':
          parentSku = 'petsiesPhrasePillow_bundle';
          break;
        case '340':
          parentSku = 'customPrintedMasks_bundle';
          break;
        case '353':
          parentSku = 'customPrintedKeychains_bundle';
          break;
      }

      return {
        name: 'cross-sells',
        params: {
          parentSku
        }
      }
    }
  },
  {
    name: 'printed-socks-creation-page',
    path: '/plushie/index/printedSocks/',
    component: PrintedProduct,
    props: route => ({
      sku: 'customPrintedSocks_bundle',
      productDesign: route.query.product_design
    })
  },
  {
    name: 'printed-masks-creation-page',
    path: '/plushie/index/printedMasks/',
    component: PrintedProduct,
    props: route => ({
      sku: 'customPrintedMasks_bundle',
      productDesign: route.query.product_design
    })
  },
  {
    name: 'printed-keychains-creation-page',
    path: '/plushie/index/printedKeychains/',
    component: PrintedProduct,
    props: route => ({
      sku: 'customPrintedKeychains_bundle',
      productDesign: route.query.product_design
    })
  },
  {
    name: 'felted-magnets-creation-page',
    path: '/plushie/index/feltedMagnets/',
    component: PrintedProduct,
    props: route => ({
      sku: 'customFeltedMagnets_bundle',
      productDesign: route.query.product_design
    })
  },
  {
    name: 'photo-pillows-alias-1',
    path: '/photo-pillow/designs',
    redirect: {
      name: 'category',
      params: {
        slug: 'custom-photo-pillows-80'
      }
    }
  },
  {
    name: 'photo-pillows-alias-2',
    path: '/photo-pillows',
    redirect: {
      name: 'category',
      params: {
        slug: 'custom-photo-pillows-80'
      }
    }
  },
  {
    name: 'accessories-category-alias',
    path: '/accessories',
    redirect: {
      name: 'category',
      params: {
        slug: 'petsies-accessories-11'
      }
    }
  },
  {
    path: '/phrasepillow/index/customize',
    name: 'phrase-pillow-customize',
    component: PhrasePillowProduct,
    props: (route) => ({
      backDesign: route.query.back_design,
      frontDesign: route.query.front_design
    })
  },
  {
    name: 'pillowSideDesign-product',
    path: '/phrase-pillow/p/:parentSku?/:slug?',
    redirect: (route) => ({
      name: 'phrase-pillow-customize',
      query: {
        back_design: route.query.back_design,
        front_design: route.params.parentSku
      }
    })
  },
  { name: 'recover-cart', path: '/alerts/recover/cart/id/:id/code/:code', component: CartRecovery },
  { name: 'gift-cards', path: '/giftcards', component: GiftCards },
  {
    name: 'giftbox',
    path: '/giftbox',
    redirect: {
      name: 'configurable-product',
      params: {
        parentSku: 'gift_box',
        slug: 'gift-box-240',
        childSku: 'gift_box_dog'
      }
    }
  }
];

export default routes;
