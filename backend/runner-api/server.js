import axios from "axios";
import express from "express";
import _ from "lodash"
import config from "config";

import URLS from "./constants/urls.js";
import TEMPLATE from "./constants/template.js";
import CONSTANTS from "./constants/constants.js";

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: CONSTANTS.MOUNT_MESSAGE
    });
});

app.get('/fact', async (req, res) => {
    try {
        const response = await axios.get(URLS.getFacts);
        const fact = _.get(response, 'data', {});
        res.status(200).send(TEMPLATE.fact(fact));
    } catch (err) {
        const message = _.get(err, 'message', 'Internal server error');
        res.status(502).send({ message });
    } 
})

const port = config.get('port');
app.listen(port, () => {
    console.log(CONSTANTS.SERVER_MESSAGE(port));
});