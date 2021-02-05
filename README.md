<img src="static/yena.jpg" alt="yena" width='350' align="right">

# Yena
![TypeScript Workflow Status][typescript-workflow-badge]
![Lint Workflow Status][lint-workflow-badge]
[![License][license-badge]](https://github.com/iipom/yena/blob/main/LICENSE)

A Discord bot that isn't very useful right now

## Table of Contents
* [About the Project](#about-the-project)
   * [Built With](#built-with)
   * [Features](#features)
* [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
   * [Installation and Usage](#installation-and-usage)
* [Contributing](#contributing)
* [License](#license)

## About the Project
Kitchen-sink Discord bot with a focus on music and moderation

### Built With
* [discord.js](https://github.com/discordjs/discord.js)
* [discord-akairo](https://github.com/discord-akairo/discord-akairo)
* [prisma](https://github.com/prisma/prisma)

### Features
TODO

## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
* Node.js **>= 12**
* Yarn
* PostgreSQL

### Installation and Usage
* `git clone https://github.com/iipom/yena.git`
* `yarn install`
* Rename `.env.example` => `.env` and change defaults
* `yarn run prisma migrate dev --preview-feature`
* `yarn run prisma generate`
* `yarn run start`

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
> **Yena** © [iipom](https://github.com/iipom), Released under the [MIT](https://github.com/iipom/yena/blob/master/LICENSE) License.

<!-- MARKDOWN LINKS & IMAGES -->
[typescript-workflow-badge]: https://img.shields.io/github/workflow/status/iipom/yena/TypeScript?label=TypeScript&logo=github-actions&logoColor=%23fff&style=flat-square
[lint-workflow-badge]: https://img.shields.io/github/workflow/status/iipom/yena/Lint?label=Lint&logo=github-actions&logoColor=%23fff&style=flat-square
[license-badge]: https://img.shields.io/github/license/iipom/yena?style=flat-square
