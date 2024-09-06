import path, { dirname } from "path";
import { fileURLToPath } from "url";

function getPicture(req, res, next) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    res.sendFile(path.join(__dirname, "..", "Public", "Umar.png"));
  } catch (error) {
    next(error);
  }
}

export default getPicture;
