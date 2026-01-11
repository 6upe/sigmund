import Script from 'next/script'

export function Scripts() {
  return (
    <>
      {/* JavaScript Libraries */}
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
      <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/lib/counterup/counterup.min.js" strategy="afterInteractive" />
      {/* Template Javascript */}
      <Script src="/js/main.js" strategy="afterInteractive" />

    </>
  )
}