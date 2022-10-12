const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

// Log each message into file logName.txt
const logEvents = async (message, logName) => {
    // Create a datetime and logItem text from message.
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        // If no logs directory, create new logs directory.
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        // Append logItem to logName.txt
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.error(err);
    }
}

// Logger middleware for logEvents
const logger = (req, res, next) => {
    logEvents(`${req.method}\t#{req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
}

module.exports = { logger, logEvents };