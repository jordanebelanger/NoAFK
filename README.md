# NoAFK
Stay logged in by running this nodejs script

# Installation instructions for Windows
- Install [NodeJS](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi)
- Install the [Microsoft Build Tools 2013](https://www.microsoft.com/en-ca/download/details.aspx?id=40760)
- Install [Python 2.7](https://www.python.org/ftp/python/2.7.16/python-2.7.16.amd64.msi)
- Download the [NoAfk](https://github.com/jordanebelanger/NoAFK/archive/master.zip) and unzip in folder you're familiar with. 
- Open the Windows command line in administrative mode, i.e 'cmd.exe' right click and select 'run as administrator'
- From the command line, navigate to the script directory using the `cd` command, for example: `cd C:\Users\Jordane\Documents\NoAFK\`. Tip, you can drag and drop the script's folder into the command line window to automatically get its file path.

- Once inside the directory in the command line, execute: `npm install`, wait for the command to finish, then execute `npm run build`.

# Usage
Once the `npm run build` command has ran succesfully, from the command line execute: `npm run start` to begin the script then open the World of Warcraft window and you can go afk.

To close the script, press 'ctrl-c' twice in the command line window.
