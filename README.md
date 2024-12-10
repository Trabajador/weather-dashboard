# Weather Dashboard 🌤️

A simple Angular-based weather dashboard that displays detailed weather information for multiple cities using the OpenWeatherMap API. The dashboard allows users to add cities, view current weather conditions (including temperature and weather type), and remove cities from the list.

## Features

- Add multiple cities to view their weather details.
- Displays city name, temperature, and weather condition.
- Responsive design using Tailwind CSS for a modern interface.
- Error handling for invalid city names.
- Loading indicators while fetching data.
- Remove cities from the dashboard with a single click.
- Optionally persists the list of cities in local storage.

## Screenshots
![Weather Dashboard Screenshot](path_to_screenshot.jpg)

## Setup Instructions

### Prerequisites

Before you can run this project locally, you need to have the following installed:

  * [Node.js](https://nodejs.org/) (LTS version)
  * [npm](https://www.npmjs.com/) (comes with Node.js)
  * [Angular CLI](https://angular.io/cli) (global Angular command-line interface)

### Installation Steps

1. **Clone the repository:**
  Clone the project to your local machine using Git:

  * `git clone https://github.com/username/weather-dashboard.git`
  * `cd weather-dashboard`

2. **Install the dependencies:**
  Install the required dependencies for the project using npm:

  * `npm install`

3. **Get your OpenWeatherMap API Key:**

  * Go to [OpenWeatherMap](https://openweathermap.org/api).
  * Sign up for a free account.
  * Generate an API key (for free-tier access).
  * Copy the API key.

4. **Add the API key to your application:**
  Open the file src/app/services/weather.service.ts and replace YOUR_API_KEY with your actual API key in the appropriate place:

  * `const apiKey = 'YOUR_API_KEY';`  // Replace with your OpenWeatherMap API key

5. **Start the development server:**
  After completing the setup, run the application locally with

  * `ng serve`

6. **Open the application in your browser:**
  The app should now be running at [localhost](http://localhost:4200).

## Building the App for Production

To build the app for deployment, you need to create an optimized version of the application. This process compiles the app and prepares it for production use.

### Build the Application

Run the following command to generate the production build:

`ng build --prod`

The build artifacts will be stored in the `dist/` directory.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technologies Used
  * Frontend: Angular, Tailwind CSS
  * API: OpenWeatherMap API
  * Unit Testing: Jasmine, Karma

## License
This project is open-source and available under the MIT License. See the [LICENSE](https://github.com/Trabajador/weather-dashboard?tab=MIT-1-ov-file#readme) for more information.

## Author

[Mike Gurba](https://github.com/Trabajador)
