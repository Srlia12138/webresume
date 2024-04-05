window.addEventListener('scroll', function () {
  let top = window.scrollY
  if (top != 0) {
      $('.home-top').css('top', '-100vh')
      $('.home-main').css('top', '0')
  } else {
      $('.home-top').css('top', '0')
      $('.home-main').css('top', '100vh')
  }
})