const http = require("http");
const fs = require("fs");
const getContentType = (ext) => {
  if (ext === "js") return "text/javascript";
  else if (ext === "css") return "text/css";
  else return "text/plain";
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlArr = req.url.split("/static/");
    const filePath = urlArr[1];
    const extension = filePath.split(".")[1];
    const responseBody = fs.readFileSync(filePath);

    const contentType = getContentType(extension);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(responseBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const responseBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }
});

server.listen(5002, () => console.log(`server running on port 5002`));
