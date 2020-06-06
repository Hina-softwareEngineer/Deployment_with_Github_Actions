# Deployment of ⚛️ React App on Surge :rocket:✨ using Github Actions

1. Create React [Create React App](https://github.com/facebook/create-react-app) or [Docs](https://create-react-app.dev/docs/getting-started).

### Commands 

1. npx create-react-app
2. git add .
3. git commit -m 'comment'
4. git push

## For Deployment on Surge

> #### Note : You must have [Node js](https://nodejs.org/en/download/) installed.

1. Install [Surge](https://nodejs.org/en/download/) by using the below command.

```
npm install surge -g

or # if your are linux user

sudo npm install surge -g
```

2. Generate Surge token by following command.

```
surge token
```

First time, you installed, it takes your gmail and password to create account through terminal.

3. Save this token in a SECRET with name SURGE_TOKEN. For this goto Repo Settings > Secrets > New_secret. Enter Token Name SURGE_TOKEN and paste the token generated in it.

## Deployment using Github Actions

1. create .github/workflows/file_name.yaml file in your root directory.

```
root_directory
    |_.github
        |_workflows
            |_file_name.yaml
    |_other_files_and_folders_of_app
```

2. Copy the below content in your app.

```

name : Name_whatever_you_want

on:
  # Trigger the workflow on push or pull request,
  # but only for the master branch

  push:
    branches:
      - master
  
#A workflow run is made up of one or more jobs. Jobs run in parallel by default. 

jobs:
    # Here job is to build the app

    build:
        #The type of machine to run the job on. The machine can be either a GitHub-hosted runner, or a self-hosted runner.
        Given below more about runs-on environment.\

        runs-on: ubuntu-latest

        #A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action 

        name: Deploying to surge
        steps:
            #This action checks-out your repository under $GITHUB_WORKSPACE, so your workflow can access it.

            - uses: actions/checkout@v2

            #This action sets by node environment for use in actions.A beta release of Node which adds reliability for pulling node distributions.

            - name: Install Node.js
                uses: actions/setup-node@v2-beta
                with:
                   node-version: 12
                
            # Yarn Installation

            - name: Prepare for Yarn Installation
                run: curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            - name: install yarn
                run: sudo apt update && sudo apt install yarn
            - name: Install Packages
                run: yarn install
            - name: Build React App
                run: yarn build

            # Deploying on Surge

            - name: Install Surge
                run: npm install -g surge
            - name: Run surge
                run: surge ./build Your_name_whatever.surge.sh --token ${{ secrets.SURGE_TOKEN }}



```

Runs-on :

|  Virtual environment 	|       YAML workflow label      	|
|:--------------------:	|:------------------------------:	|
| Windows Server 2019  	| windows-latest or windows-2019 	|
| Ubuntu 20.04         	| ubuntu-20.04                   	|
| Ubuntu 18.04         	| ubuntu-latest or ubuntu-18.04  	|
| Ubuntu 16.04         	| ubuntu-16.04                   	|
| macOS Catalina 10.15 	| macos-latest or macos-10.15    	|


##### Now you are done with deployment on Surge 👏👏, Make changes to your local repo ⚡️⚡️ and just pushed and the rest will do by github Actions :fire::fire:.

Happy Coding :)