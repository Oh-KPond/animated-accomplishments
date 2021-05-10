# My Animated List of Acccompishments (11/19 - 05/21)

> This is my animated listing of accomplishments

[Preview](https://oh-kpond.github.io/animated-accomplishments/dist/)

## Accomplishments found inside
- Project Folders - built & implemented
- Red Cap - built, implimented, & admistered
- LIMS Integration - modified & maintaining
- Account Management Data Service - built, implemented, & maintaining
- Ledger & AMDS Mocks - created & maintaining
- Mongo & MySQL - modified & maintaining
- Lab Results - implimentation & maintaining
- Partnerships - maintaining good working relationships with partners & SLIMS staff
- Testing - implmented & ongoing maintaining



## System Requirements
**Node**  -  `>= v4.0`

## Instructions

``` bash
git clone git@github.com:Oh-KPond/animated-accomplishments.git
cd animated-accomplishments
npm install
npm run dev
```

If local dev ```localhost:8080``` does not run in Chrome, try Firefox or another browser

## Deployment method


1. Edit config/index.js，modify line 10 "assetsPublicPath"，where the value is `item_name/dist`. If you have not modified the project name animated-accomplishments，you can skip this step.

2. Compile, upload
    ``` bash
    npm run build
    git add .
    git commit -m "update"
    git push
    ```

3. Open GitHub Pages Features
    https://yourUserName.github.io/animated-accomplishments/dist/

    for example (https://oh-kpond.github.io/animated-accomplishments/dist/)
