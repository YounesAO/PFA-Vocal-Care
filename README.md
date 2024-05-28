# Vocal Care

![Application logo ](https://github.com/YounesAO/PFA-Vocal-Care/blob/main/vocal-care/assets/uploads/logo1.png)

## Overview

This project is developed as part of the PFA (Projet de Fin d'Année) for the subject of deploying an ML model for detecting vocal pathologies. 
It also focuses on data collection to improve the model.
## Content
- Mobile App using Expo React-Native Toolbox.
- Website for managing the database, exporting data, uploading, and keeping the model updated.
- Flask API connected to the MongoDB in the backend.

## Installation

To get started with this project, clone the repository and install the necessary dependencies: Flask and MongoDB.

## To run the application:

1. Run the Flask API located in `./AdminPanel/App.py`.
2. Open the Expo project file located in `./Vocal-care`.
3. Ensure that the config file in `vocal-care/assets/config.json` has the same IP address and port as the Flask server.
4. Navigate to `/vocal-care` and run `npm install` to install Expo's dependencies.
5. Open an Android emulator and type in the terminal of `/vocal-care` `npx expo start`.
    - To run the application in the emulator, type `a`.
    - To preview the mobile app in a browser, type `w`.
    - To run the application on your phone, install Expo Go and scan the QR code (note: the phone and computer must be on the same network).
6. To access the admin panel, enter the address of the Flask server in the browser: `http://127.0.0.1:5000`.
