const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
    webpack: {
        alias: {
            "@store": resolvePath("./src/features/store.js"),
            "@userSlice": resolvePath("./src/features/slices/userSlice.js"),
            "@fire": resolvePath("./src/features/firebase/fire.js"),
            "@assets": resolvePath("./src/assets"),
        },
    },
};
