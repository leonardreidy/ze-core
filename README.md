# README
Project README for `ze-core` - core services and APIs for the Ze project

## ze-core APIs

### Prerequisites

The pre-requisites for developing with this project are satisfied by the project devcontainer specification. That is, if you have succeeded in importing the devcontainer and running it, then you already have everything you need to begin.

### Getting Started
On first run, make sure to run the `setup` script like so: 

`yarn setup`

On subsequent runs:

`yarn start:dev` starts the development server with hot reloading enabled.

### Workflow

It may be convenient to begin at the service level and work out to the controller. 

### Concepts: Inversion of Control (IOC) / TSyringe

In a TOSA project controllers are auto-generated off-the-shelf. The result is effective but unsophisticated. A better approach would decouple the various components that are called upon to collaborate to manage the request/response lifecycle. TOSA is friendly to inversion of control strategies, and actively supports a small number of mature DI libraries, including, notably, TSyringe.
See the TSyringe [documentation](https://github.com/microsoft/tsyringe)
