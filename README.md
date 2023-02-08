# ArtistSearchAPI

Welcome to my ArtistSearch API using LastFM API! :)

It's a little API with one endpoint: 'artists/artist.search/'. The idea is to send an artist's name as a query param and get, as response, information about all the artists with that name present in the LastFm artists database. If the name doesn't exist, the API will use a random name.

## How to install and run the app

### Download and install Node Version Manager

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

### Install Node.js 16 and npm

```
nvm install v16
```

### Install Node.js Development Tools

```
sudo apt -y install gcc g++ make
```
Install the Yarn package manager.

```
sudo apt install gnupg2
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

### Install Development Dependencies

```
npm install
```

### Run project

```
npm start
```

### Run project's tests
```
npm test
```

