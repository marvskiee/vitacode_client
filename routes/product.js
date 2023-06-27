const router = require("express").Router();
let Product = require("../models/product.model");

router.get("/test", (req, res) => {
  res.json({ status: "Product route test is functioning !" });
});

router.get("/", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json({ status: "error", message: err.message }));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((response) => res.json({ status: "ok", message: response }))
    .catch((err) => res.json({ status: "error", message: err.message }));
});

router.post("/add", async (req, res) => {
  const { username, name, password, sortingType } = req.body;
  const newUser = new Product({ username, name, password, sortingType });

  newUser
    .save()
    .then((response) => {
      res.json({ status: "ok", user: response });
    })
    .catch((err) => {
      if (err.code == "11000") {
        res.json({ status: "error", message: "Username exists" });
      } else {
        res.json({ status: "error", message: err.message });
      }
    });
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((user) => {
      if (req.body.subUpdate === true) {
        user.sortingType *= -1;

        user
          .save()
          .then(() =>
            res.json({ status: "ok", message: "Sorting type has been changed" })
          )
          .catch((err) =>
            res.json({ status: "error", message: "Sorting failed" })
          );
      } else {
        if (req.body.oldPassword != user.password) {
          res.json({ status: "error", message: "Incorrect old password" });
        } else {
          if (req.body.newPassword == user.password) {
            res.json({
              status: "error",
              message: "Old password cannot be used",
            });
          } else {
            user.password = req.body.newPassword;
            user
              .save()
              .then(() =>
                res.json({ status: "ok", message: "Password has been changed" })
              )
              .catch((err) =>
                res.json({ status: "error", message: err.message })
              );
          }
        }
      }
    })
    .catch((err) => res.json({ status: "error", message: err.message }));
});

module.exports = router;
