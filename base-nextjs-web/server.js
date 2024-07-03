const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs');

// Read the config file
let data = fs.readFileSync("config.json", { encoding: "utf-8" });
// Strip BOM if it exists
if (data.charCodeAt(0) === 0xFEFF) {
    data = data.substring(1);
}
const configData = JSON.parse(data);

// Set environment variables
Object.keys(configData).forEach((key) => {
    console.log(`Setting env key '${key}'.`);
    process.env[key] = configData[key];
});

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        handle(req, res, parsedUrl)
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
