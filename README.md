# Nodejs FES Template

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.14.2
- Install [Git](https://git-scm.com/)


# Getting started
- Clone the repository
```
git clone git@github.com:alecorra/exercise-1-to-1.git
```
- Install dependencies
```
cd exercise-1-to-1
npm install
```
- Build and run the project
```
npm run start
```


# TypeScript + Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.




## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies |
| **src**                  | Contains  source code that will be compiled |
| **src/codewars**         | Contains  files with solutions to Codewars kata |
| **src**/index.ts         | Entry point |
| package.json             | Contains npm dependencies |
| tsconfig.json            | Config settings for compiling source code only written in TypeScript |
