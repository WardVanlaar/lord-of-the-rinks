// const router = require("express").Router();
// const sequelize = require("../../config/connection");
// const {Skates, Post } = require("../../models");
// // const withAuth = require("../../utils/auth");

// // get all skates
// router.get("/", (req, res) => {
//   console.log("======================");
//   Skates.findAll({
//     attributes: [
//       "id",
//       "skates_type"
//     ],
//     include: [
//       {
//         model: Post,
//         attributes: ["post_text", "user_id"],
//       },
//     ],
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get("/:id", (req, res) => {
//   Skates.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: [
//       "id",
//       "skates_type"
//     ],
//     include: [
//       {
//         model: Post,
//         attributes: ["post_text", "user_id"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No skates found with this id" });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put("/:id", (req, res) => {
//     Skates.update(
//       {
//         skates_type: req.body.skates_type
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//       .then((dbPostData) => {
//         if (!dbPostData) {
//           res.status(404).json({ message: "No skates found with this id" });
//           return;
//         }
//         res.json(dbPostData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });
  
//   router.delete("/:id", (req, res) => {
//     console.log("id", req.params.id);
//     Skates.destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((dbPostData) => {
//         if (!dbPostData) {
//           res.status(404).json({ message: "No skates found with this id" });
//           return;
//         }
//         res.json(dbPostData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// module.exports = router;