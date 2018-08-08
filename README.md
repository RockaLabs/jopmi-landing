# Jopmi - The Open Donations Platform
<div align="center">
  <a href="https://jopmi.com">
    <img width="130" src="src/images/logo_jopmi.svg">
  </a>
  
  [![Website online](https://img.shields.io/badge/website-online-brightgreen.svg)](https://jopmi.org/)
  [![Node Version](https://img.shields.io/badge/node-%3E%3D6.11.5-brightgreen.svg)](https://nodejs.org/en/)
  [![Webpack](https://img.shields.io/badge/webpack-%3E%3D4.16.5-blue.svg)](https://www.npmjs.com/package/webpack)
  [![Docker CE](https://img.shields.io/badge/docker-estable--18.09-lightgrey.svg)](https://docs.docker.com/install/#supported-platforms)
  [![Twitter Jopmi](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/wearejopmi)
</div>

## Overview

Hi there!

Here you can find the landing page for [Jopmi Project](https://github.com/RockaLabs/jopmi).

Jopmi is an open donations platform that aims to change the way donations work around the world, by integrating practices of transparency and collaboration (as the ones practiced by open source communities) plus cryptocurrencies and blockchain to enhance honesty, traceability and promote *Transparency*.

Jopmi will be acting as a non for profit organization.

We'll be live at Jopmi.com and Jopmi.org.


## Running locally for development

#### Setup your environment

* [Install **npm**](https://www.npmjs.com/get-npm) and [Install **Yarn**](https://yarnpkg.com/en/docs/install#debian-stable)(Optional)

Install Docker (Optional):

* [Install **Docker**](https://docs.docker.com/install/#supported-platforms)
* [Install **Docker compose**](https://docs.docker.com/compose/install/)


#### Run project without docker

```
# Generate bundle using webpack development mode
yarn build:dev

# Run webpack dev server for locally development
yarn build:dev:server

# Generate bundle using webpack production mode
yarn build:prod
```

#### Run project with docker (The easy way)

```
# Generate bundle using webpack development mode
yarn docker:build:dev

# Run webpack dev server for locally development
yarn docker:build:dev:server

# Generate bundle using webpack production mode
yarn docker:build:prod
```

#### **Warning:** Problems with `node_modules` packages?

Try cleaning the `node_modules` if you have tried to install the packages without docker, and you have tried to use them later.
```
yarn build:clean
```


## Acknowledgements

This code is compiled using webpack 4.

## License

See the [LICENSE](LICENSE) file (MIT).
