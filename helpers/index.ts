import config from 'config'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { isServer } from '@vue-storefront/core/helpers';

export * from './price'

export function getPathForStaticPage (path: string) {
  const { storeCode } = currentStoreView()
  const isStoreCodeEquals = storeCode === config.defaultStoreCode

  return isStoreCodeEquals ? `/i${path}` : path
}

export function createSmoothscroll (from = 0, to = 0, speed = 15) {
  let currentDelta = from > to ? from - to : to - from
  let smoothscroll = () => {
    if (Math.abs(currentDelta) < speed) return
    currentDelta = currentDelta - currentDelta / speed
    window.requestAnimationFrame(smoothscroll);
    window.scrollTo(0, from > to ? to + currentDelta : to - currentDelta);
  }
  return smoothscroll()
}

export function checkWebpSupport (bannersToTransform, isWebpSupported) {
  // In SSR it is not easily known whether webp image is supported by web browser or not.
  // Empty string also cannot be used here, because empty string evaluates to url('')
  // and it is resolved as the base URL (the same as our Homepage), so as a consequence
  // Homepage was requested again.
  // To fix that case, dummy empty data URI is provided just to prevent any unnecessary
  // requests.
  // --- see https://github.com/DivanteLtd/vsf-capybara/issues/168
  const theSmallestDummyImage = 'data:,'
  return bannersToTransform.map(banner => Object.assign(
    {},
    banner,
    { image: isServer ? theSmallestDummyImage : isWebpSupported ? banner.image.webp : banner.image.fallback }
  ))
}
