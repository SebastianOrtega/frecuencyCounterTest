const { performance } = require("perf_hooks");
let count = 0;
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

  flow.time = setInterval((err, value) => {
    //console.log("Entro a flowWatch", count);

    count++;

    mediaVariable.push(performance.now());
    if (mediaVariable.length > 0) {
      const time1 = mediaVariable[mediaVariable.length - 2];
      const time2 = mediaVariable[mediaVariable.length - 1];

      if (count == 100) {
        count = 0;
        for (let n = 0; n < 99; n++) {
          const t1 = mediaVariable[n];
          const t2 = mediaVariable[n + 1];
          const dt = t2 - t1;
          const f = 1000 / dt;
          console.log(
            `t2=${t2}\t t1=${t1}\t Δt=${dt}\t f=${f}\tQ=$${0}\tcount=${n}`
          );
        }

        clearInterval(flow.time);
      }
    }
  }, 16);
};

flowCount(flow);
