let DDPClient = require("nativescript-meteor");

const DDP = new DDPClient({
    host: "localhost",
    port: 3000,
    ssl: false,
    autoReconnect: true,
    autoReconnectTimer: 15000,
    maintainCollections: true,
    ddpVersion: '1',
    useSockJs: true
});

exports.DDP = DDP
