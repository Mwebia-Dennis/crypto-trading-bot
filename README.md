# Bitcoin Crypto-bot

This project is a website application that predicts minute to minute bitcoin close prices.

### Features

=> displays real time bitcoin prices
=> 2 powerful Neural network models to help predict the prices
=> predicting the next minute price (if current time is 11:00 AM the model predicts price for 11:01 AM)
=> forms to input and predict from your own custom values

## What it does

the system takes the previous 5 minute to minute bitcoin close prices and predicts the next minute close price with the help of our 2 neural network models (LSTM and GRU) 

### How to install
check react js tutorial to learn on installation and running of react app https://reactjs.org/tutorial/tutorial.html

## Technologies used

the website UI is built in react JS + material UI and the backend api is built in python (Flask)
the backend is based on LSTM and GRU as the prediction models and flask as the API provider

### Backend rest API

https://github.com/Mwebia-Dennis/bitcoin-prediction/tree/main

### Real time bitcoin API

https://docs.coinapi.io/#md-docs
