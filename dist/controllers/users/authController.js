"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
const passwordHash_1 = require("../../services/passwordHash");
const error_1 = require("../../models/error");
const tokenGen_1 = require("../../services/authentication/tokenGen");
exports.authController = {
    async logIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await userMapper_1.userMapper.readUserWithEmail(email);
            const passwordMatch = await (0, passwordHash_1.comparePasswords)(password, user.password);
            if (passwordMatch) {
                const accessToken = await (0, tokenGen_1.generateAccessToken)(user);
                res.status(200).json({
                    user,
                    accessToken,
                    message: 'Login successful',
                });
            }
            else {
                throw new error_1.InvalidCredentialsError();
            }
        }
        catch (error) {
            next(error);
        }
    },
    async logOut(req, res, next) { },
};
