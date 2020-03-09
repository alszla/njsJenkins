module.exports = {
  "src_folders": ["./test"],

  "webdriver": {
    "start_process": true,
    "port": 9515,
    "server_path": "./node_modules/.bin/chromedriver"
  },

  "test_settings": {
    "default": {
      "launch_url": "https://wikipedia.org"
    },

    "desiredCapabilities": {
      "chromeOptions": {
        "args": ["--no-sandbox","--headless","--disable-dev-shm-usage","--whitelisted-ips"]
      }
    }
  }
};
