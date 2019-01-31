# My Animated Resume

> This is my resume

[Preview](https://oh-kpond.github.io/animated-resume/dist/)



## System Requirements
**Node**  -  `>= v4.0`

## Instructions

``` bash
git clone git@github.com:Oh-KPond/animated-resume.git
cd animated-resume
npm install
npm run dev
```

If local dev ```localhost:8080``` does not run in Chrome, try Firefox or another browser

## Deployment method


1. Edit config/index.js，modify line 10 "assetsPublicPath"，where the value is `item_name/dist`. If you have not modified the project name animated-resume，you can skip this step.

2. Compile, upload
    ``` bash
    npm run build
    git add .
    git commit -m "update"
    git push
    ```

3. Open GitHub Pages Features
    https://yourUserName.github.io/animated-resume/dist/

    for example (https://oh-kpond.github.io/animated-resume/dist/)
