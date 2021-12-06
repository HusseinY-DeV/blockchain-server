import "reflect-metadata";
import server from "./server";
import cluster = require("cluster");
import os = require("os");

const cpus : number = os.cpus().length;

if(cluster.isMaster) {
    for(let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    // ? replacing stopped workers with new ones
    cluster.on('exit', (worker, code, signal) => {
        cluster.fork();
      });
} else {
    server();
}

