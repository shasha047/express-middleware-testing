import express from 'express';
import * as path from 'path';
import { routerV1 } from './api/v1/v1';
import http from 'http';
import { __root, node_port } from './config';


const app = express();
const server: http.Server = new http.Server(app);

app.use(express.static(path.join(__root, '../public/dist')));

app.use('/api/v1/', routerV1);

app.use((req, res) => {
    res.sendFile(path.join(__root, "../public", "dist", "index.html"))
})

server.listen(node_port, () => {
    console.log("server up and running on port" + node_port);
})
