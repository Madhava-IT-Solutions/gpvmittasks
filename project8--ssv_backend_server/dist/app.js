"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataSource_1 = require("./dataSource");
// import userRouter from './routes/userRoutes';
// import authMiddleware from './middlewares/authMiddleware';
// import rateLimitMiddleware from './middlewares/rateLimiterMiddleware';
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
// app.use(cors());
// app.use(helmet());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use('/api', rateLimitMiddleware);
// Routes
// app.use('/api/users', userRouter);
// Start the server
const startServer = async () => {
    try {
        await dataSource_1.AppDataSource.initialize();
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    catch (error) {
        console.error("Error connecting to database:", error);
    }
};
startServer();
/* app.use(cors()) -  Cross-Origin Resource Sharing (CORS) allows requests from different origins (domains, protocols, ports) to access resources on your server. This is crucial for modern web applications that often involve interacting with APIs hosted on different domains.

app.use(helmet()) - adds security headers to the HTTP responses sent by your server. provides several middleware functions that help protect your application from common web vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and clickjacking

app.use(express.json()) - to parse incoming JSON data in request bodies. When a client sends a request with a Content-Type of application/json, this middleware will automatically parse the JSON data and make it accessible in the req.body object

app.use(express.urlencoded({ extended: true })) - to parse incoming form data in request bodies. When a client sends a request with a Content-Type of application/x-www-form-urlencoded, this middleware will automatically parse the form data and make it accessible in the req.body object

app.use(cookieParser()) - to parse cookies in the request headers. This middleware will automatically parse the Cookie header and make the cookie data accessible in the req.cookies object

*/
