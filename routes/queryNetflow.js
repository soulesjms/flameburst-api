var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  NetflowObj = {
    meta: {
      returned_results: 10,
      fetched_results: 46,
      queryDuration: 9010,
      total_elapsed_time: 2144,
      longest_source_query_duration: 1956,
      total_expected_results: 8185192,
      sources: {
        source1: {
          name: "SOURCE1",
          fetched_results: 9,
          query_duration: 1722
        },
        source2: {
          name: "SOURCE2",
          fetched_results: 10,
          query_duration: 1871
        },
        source3: {
          name: "SOURCE3",
          fetched_results: 9,
          query_duration: 2153
        }
      }
    },
    data: {
      aggregations: {},
      data: [
        ["data", "data", "data", "data"],
        ["data", "data", "data", "data"],
        ["data", "data", "data", "data"]
      ]
    },
    column_headers: {
      data: ["field1", "field2", "field3", "field4"]
    }
  };
  res.send(NetflowObj);
});

module.exports = router;
