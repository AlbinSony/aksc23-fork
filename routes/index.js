var express = require("express");
var router = express.Router();
var functionHelper = require("../helpers/functionsHelper");

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

router.get("/events", function (req, res, next) {
    let pagename = `Events`;
    let breadcrumbs = {
        head: `Events`,
        links: [
            {
                bc_page: "Events",
            },
        ],
    };
    res.render("events/events", {
        title: `${pagename} | IEEE LINK`,
        breadcrumbs,
    });
});

router.get("/events/:hub", function (req, res, next) {
    let pagename = `Events`;
    let hub = req.params.hub;
    let breadcrumbs = {
        head: `${functionHelper.capitalizeFirstLetter(hub)} Hub`,
        links: [
            {
                bc_link: "/events",
                bc_page: "Events",
            },
            {
                bc_page: `${hub}`,
            },
        ],
    };
    res.render(`events/${hub}/${hub}`, {
        title: `${pagename} | IEEE LINK`,
        breadcrumbs,
    });
});

router.get("/events/:hub/:event", function (req, res, next) {
    let pagename = `Events`;
    let hub = req.params.hub;
    let event = req.params.event;
    let breadcrumbs = {
        head: `${event}`,
        links: [
            {
                bc_link: "/events",
                bc_page: "Events",
            },
            {
                bc_link: `/events/${hub}`,
                bc_page: `${hub}`,
            },
        ],
    };
    res.render(`events/${hub}/${event}`, {
        title: `${pagename} | IEEE LINK`,
        breadcrumbs,
    });
});

router.get("/calendar", function (req, res, next) {
    let pagename = "Calendar";
    let breadcrumbs = {
        head: "Calendar",
        links: [
            {
                bc_page: "Calendar",
            },
        ],
    };
    res.render("pages/calendar", {
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
