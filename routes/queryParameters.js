var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  NetflowObj = {
    NETFLOW: {
      availableSources: [
        "source1",
        "source2",
        "source3",
        "source4",
        "source5",
        "source6",
        "source7",
        "source8",
        "source9",
        "source10",
        "source11"
      ],
      availableEnrichments: [
        "enrichment1",
        "enrichment2",
        "enrichment3",
        "enrichment4",
        "enrichment5",
        "enrichment6",
        "enrichment7",
        "enrichment8"
      ]
    }
  };
  res.send(NetflowObj);
});

module.exports = router;
