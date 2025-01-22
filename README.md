# Laravel Shadcn.js Starter

A basic starter template for building web applications with **Laravel** and **Shadcn.js**. This repository serves as a foundation to kickstart your project with Laravel as the backend and Shadcn.js for the frontend.

## Features

- Laravel framework pre-configured.
- Shadcn.js integrated for modern JavaScript-based UI development.
- Ready-to-use setup with minimal configuration required.


## Prerequisites

Before getting started, ensure you have the following installed on your machine:

1. [PHP](https://www.php.net/manual/en/install.php) (>= 8.0)
2. [Composer](https://getcomposer.org/)
3. [Node.js](https://nodejs.org/) (>= 14.0) and [npm](https://www.npmjs.com/)


## Installation Guide

Follow these steps to set up the project locally:

1. **Install Laravel Dependencies**  
   Run the following command to install the required PHP packages via Composer:
   ```bash
   composer install
   ```

2. **Install JavaScript Dependencies**  
   Use npm to install the required frontend packages:
   ```bash
   npm install
   ```

3. **Set Up the Environment File**  
   Copy the `.env.example` file to `.env` and configure your environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database credentials and other necessary settings.

4. **Generate Application Key**  
   ```bash
   php artisan key:generate
   ```

5. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```


## Running the Application

To serve the application locally:

1. Start the Laravel development server:
   ```bash
   php artisan serve
   ```
2. Compile the frontend assets:
   ```bash
   npm run dev
   ```

Your application should now be accessible at `http://localhost:8000`.


### Author

[Syed Abdullah](https://github.com/imsyedabdullah/)