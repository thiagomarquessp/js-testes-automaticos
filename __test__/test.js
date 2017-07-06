import nightmare from 'nightmare'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // 10 second timeout


async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time) )
}

describe('When visiting the homepage', function () {

  test('it welcomes the user', async function () {
    let page = nightmare().goto('http://rtfeldman.github.io/elm-spa-example/')
    await sleep(5000)

    let text = await page.evaluate(() => document.querySelector('.nav-link.active').textContent)
                         .end()

    expect(text).toContain('abobora')
  })

})
