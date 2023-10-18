const express = require("express");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { body, validationResult } = require("express-validator");

app.use(
  cors({
    // origin: "https://admirable-queijadas-f1b25d.netlify.app", // Die URL deines React-Projekts
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Statische Dateien bereitstellen
app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

// Validierung
const validateName = [
  body("vorname")
    .trim()
    .isLength({ min: 3, max: 100 })
    .escape()
    .withMessage(
      "dein Vorname muss mindestens 3, darf aber nur max 100 Buchstaben haben."
    ),

  body("nachname")
    .trim()
    .isLength({ min: 3, max: 100 })
    .escape()
    .withMessage(
      "dein Nachname muss mindestens 3, darf aber nur max 100 Buchstaben haben."
    ),

  body("adresse")
    .trim()
    .isLength({ min: 4, max: 100 })
    .escape()
    .withMessage(
      "deine Adresse muss mindestens 4, darf aber nur max 100 Buchstaben haben"
    ),

  body("postleitzahl")
    .trim()
    .isNumeric()
    .isPostalCode("DE")
    .withMessage("deine Postleitzahl muss aus 5 Ziffern bestehen")
    .isLength({ min: 5, max: 5 }),

  body("telefonnummer")
    .trim()
    .escape()
    .isLength({ min: 6, max: 16 })
    .withMessage(
      "deine Postleitzahl muss aus mindestens 6 und maximal 16 Ziffern bestehen"
    ),

  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage("Ungültige E-Mail-Adresse"),

  body("geburtstermin")
    .notEmpty()
    .withMessage("der Geburtstermin darf nicht fehlen")
    .isDate()
    .withMessage("Ungültiges Datum")
    .custom((value) => {
      const currentDate = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(currentDate.getDate() + 1);
      const nextYear = new Date();
      nextYear.setDate(currentDate.getDate() + 365);
      const selectedDate = new Date(value);

      if (selectedDate >= tomorrow && selectedDate <= nextYear) {
        return true;
      }
      throw new Error(
        "Datum muss frühestens dem morgigen Tag und spätestens dem morgigen Tag in einem Jahr entsprechen"
      );
    }),

  body("versicherung")
    .trim()
    .isLength({ min: 3, max: 100 })
    .escape()
    .withMessage(
      "deine Krankenversicherung muss mindestens 3, darf aber maximal nur 100 Buchstaben haben."
    ),
  body("nachricht").optional().trim().isString().escape(),
  body("datensicherheit").custom((value) => {
    if (value === true) {
      return true;
    }
    throw new Error(
      "bitte lies meine Datenschutzerklärung und bestätige mit einem Klick, dass du diese akzeptierst."
    );
  }),
];

app.get("/", (req, res) => {
  // Hier können Sie den entsprechenden Code für die Verarbeitung der Anforderung schreiben
  res.send("Server aktiv!");
});

app.get("/api/validate", (req, res) => {
  res.send("GET-Anforderung an /api/validate erhalten");
});

// Definiere eine API-Route für die Validierung der Formdaten
app.post("/api/validate", validateName, (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  //console.log(req);
  console.log(req.body.vorname);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    return res
      .status(200)

      .json({ message: "Objekt erfolgreich validiert und verarbeitet" });
  }
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
