import { createServer } from "http";

const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "Application/json",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "Umar Falalu",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
