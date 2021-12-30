![banner](https://raw.githubusercontent.com/bgpvp/discord-last.fm/main/img/banner.png)

## 🎵 A simple Discord RPC for Last.fm


# Steps:

## Step 1: Clone the repository.

Either download the zip by clicking on the green button that says "Code" and then clicking on "Download ZIP" (or even [this link](https://github.com/bgpvp/discord-last.fm/archive/refs/heads/main.zip))

or

Clone this repository by using a command line:

```bash
> git clone https://github.com/bgpvp/discord-last.fm/
```

## Step 2: Last.fm Scrobbler

If you don't already have an account on [last.fm](https://last.fm), create one.

## Using Spotify

Once you have an account on [last.fm](https://last.fm), click on the top right of the screen (click on your avatar) and then click on "Settings".

Click on "Applications" and next to "Spotify Scrobbling", click on "Connect".

Then log into your Spotify account and connect.

## Using other platforms (ex: Apple Music):

Download the Last.fm scrobbler by clicking on this link: https://last.fm/about/trackmymusic.

Launch the scrobbler and log into your profile.

Leave the scrobbler open for [Discord-Last.fm](https://github.com/bgpvp/discord-last.fm) to work.

(You can leave it in the taskbar but make sure to not close it.)

## Step 3: Last.fm API

Once your spotify account linked to last.fm, go to https://www.last.fm/api/account/create and fill in:

        "Contact email": Leave as it is.

        "Application name": discord-last.fm.

        "Application description": 🎵 A simple Discord RPC for Last.fm.

Leave blank the rest blank.

Once you pressed "Submit", you'll get an api key and a shared secret key, note them somewhere safe but don't share these with anyone.

## Step 4: config.json

Once you have your api and secret key, go to the "config.json" file (in the "src" folder) and edit it using a text editor like Visual Studio Code, Atom or even Notepad++.

Next to "apiKey", change "Replace with your own api key." with your own api key.

Next to "secret", change "Replace with your own secret key." with your own secret key.

Next to "username", change "Replace with your own last.fm username." with your own last.fm username (not your spotify username).

Once this is done, save the "config.json" file.

(Make sure the leave the quotation marks.)

## Step 5: Run

Let's see if it works.

First, open a command line and install all the dependencies by typing:

```bash
> npm install
```

then run

```bash
> npm start
```

Make sure that discord is open

If it works, you should see a the app logo in the system tray.

Simply play a song on your platform (Spotify or Apple Music) and within 5 to 10 seconds, you should see that you're "playing a game" on Discord.

To exit the app, right click on the logo in the system tray and click on "Quit".

## Step 6: Building

Now's time to build an app instead of using the command line every time.

The command to do this is different for each Operating System.

**Windows:**

```js
npm run package-win
```

**macOS:**

```js
npm run package-mac
```

**Linux:**

```js
npm run package-linux
```

Once the command run, you'll see a new folder called "release-builds" (only on macOS and Linux).

In there you'll see the "fullscreen-spotify" application!

Run it and enjoy your fullscreen spotify!

# Don't forget to :star: this repo!