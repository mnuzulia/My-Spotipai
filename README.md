# My-Spotipai
This is final project that clone spotify app using react native and redux

## Configuring IP Address

When starting your project, you'll see something like this in folder actions library:

```
http://192.168.43.12:3000/album
```

To get the IP address, you have to check your computer’s IP address using cmd in windows
```$ ipconfig```

Then replace with IPv4 Address in your computer. Make sure your device (mobile and pc) using one connection.

## How to Run

**1.Open terminal, and clone this project**
```
$ git clone https://github.com/mnuzulia/My-Spotipai.git
```
**2.Run Mock API using json-server**

Run the database file on your terminal

```json-server --watch --host {your-IP-address}  db.json```

**3.Mobile Frontend (React Native):**

Make sure you already installed React Native and have emulator or real device running. If not visit this page https://facebook.github.io/react-native/docs/getting-started.html

```$ cd {project-name} ``` to open the project

```$ npm install``` to install project dependencies.

```$ react-native run-android``` to run this command on different terminal with json-server terminal


## Note:
File  ```index.js ``` should be as root reducers. It's located in welcome>reducers>index.js
