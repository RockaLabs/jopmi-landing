# Jopmi - The Open Donations Platform

##· Overview

Hi there!

Here you can find the landing page for [Jopmi Project](https://github.com/RockaLabs/jopmi).

Jopmi is an open donations platform that aims to change the way donations work around the world, by integrating practices of transparency and collaboration (as the ones practiced by open source communities) plus cryptocurrencies and blockchain to enhance honesty, traceability and promote *Transparency*.

Jopmi will be acting as a non for profit organization.

We'll be live at Jopmi.com and Jopmi.org.


## Running locally for development

### Setup your environment

* [Install **npm**](https://www.npmjs.com/get-npm) and [Install **Yarn**](https://yarnpkg.com/en/docs/install#debian-stable)(Optional)

Install Docker (Optional):

* [Install **Docker**](https://docs.docker.com/install/#supported-platforms)
* [Install **Docker compose**](https://docs.docker.com/compose/install/)


### Run project without docker

```
# Generate bundle using webpack development mode
yarn build:dev

# Run webpack dev server for locally development
yarn build:dev:server

# Generate bundle using webpack production mode
yarn build:prod
```

### Run project with docker (The easy way)

```
# Generate bundle using webpack development mode
yarn docker:build:dev

# Run webpack dev server for locally development
yarn docker:build:dev:server

# Generate bundle using webpack production mode
yarn docker:build:prod
```

### **Warning:** Problems with `node_modules` packages?

Try cleaning the `nod_modules` if you have tried to install the packages without a docker, but you have tried to use them later.
```
yarn build:clean
```


## Acknowledgements

This code is compiled using webpack 4.

## License

See the [LICENSE](LICENSE) file (MIT).