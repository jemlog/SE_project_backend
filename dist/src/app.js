"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./ormconfig/connection"));
const user_1 = __importDefault(require("./router/user"));
const cloth_1 = __importDefault(require("./router/cloth"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3005);
if (process.env.NODE_ENV === 'production') {
    app.use((0, morgan_1.default)('combined'));
    app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
    app.use((0, hpp_1.default)());
}
else {
    app.use((0, morgan_1.default)('dev'));
}
app.use((0, cors_1.default)());
// =================== router ====================
app.use('/', user_1.default);
// 옷장에 들어가는 옷 관련 라우터
app.use('/cloth', cloth_1.default);
// =================== run typeORM ===================
(0, connection_1.default)();
// ================== error handling ====================
app.use((req, res, next) => {
    const error = new Error('not valid uri');
    next(error);
});
const errorHandler = (err, req, res, next) => {
    console.log(err);
};
app.use(errorHandler);
app.listen(app.get('port'), () => {
    console.log(`server start at port ${app.get('port')}`);
});
//# sourceMappingURL=app.js.map