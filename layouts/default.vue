<template>
  <nuxt />
</template>

<style lang="postcss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@font-face {
  font-family: Nunito;
  src: url(/Nunito-Regular.woff2) format('woff2'), url(/Nunito-Regular.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: Nunito;
  src: url(/Nunito-Bold.woff2) format('woff2'), url(/Nunito-Bold.ttf) format('truetype');
  font-weight: bold;
  font-display: swap;
}

@font-face {
  font-family: Nunito;
  src: url(/Nunito-Light.woff2) format('woff2'), url(/Nunito-Light.ttf) format('truetype');
  font-weight: lighter;
  font-display: swap;
}
</style>
