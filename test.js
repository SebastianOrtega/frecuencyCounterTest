const { performance } = require("perf_hooks");
let count = 1;
let time2;
let mediaVariable = [];
const NUMERO_LECTURAS = 4;
factorAjuste = 0.9;

const Flow = require("./FlowData");

const flow = new Flow();

const flowCount = (flow) => {
  //console.log("Entro a flowCount");
  let f = 0;
  let q = 0;
  let dt = 0;

  setInterval((err, value) => {
    //console.log("Entro a flowWatch", count);

    if (count % 2 === 0) {
      time2 = performance.now();
      count++;
      dt = time2 - flow.time1;
      f = 1000 / dt;
      q = f / 5.5;

      console.log(
        `t2=${time2}\t t1=${flow.time1}\t Δt=${dt}\t f=${f}\tQ=$${q}`
      );

      mediaVariable = [];
      //}
    } else {
      flow.time1 = performance.now();
      count++;
    }
  }, 18);
};

flowCount(flow);
