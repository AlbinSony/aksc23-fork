var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "IEEE LINK - Local Integrated Network of Kerala",
    });
});

router.get("/office-bearers/:year", function (req, res, next) {
  let pagename = "Office Bearers";
  let breadcrumbs = {
      head: `Office Bearers ${req.params.year}`,
      links: [
          {
              bc_page: "Office Beearers",
          },
          {
              bc_page: `${req.params.year}`,
          },
      ],
  };
  res.render(`office-bearers/${req.params.year}`, {
      title: `${pagename} | IEEE LINK`,
      breadcrumbs,
  });
});

router.get("/contact", function (req, res, next) {
    let pagename = "Contact";
    let breadcrumbs = {
        head: "Contact",
        links: [
            {
                bc_page: "Contact",
            },
        ],
    };
    res.render("pages/contact", {
        title: `${pagename} | IEEE LINK`,
        breadcrumbs,
    });
});

module.exports = router;
