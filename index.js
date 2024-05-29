#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
//Class for Account Number
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.withdraw = function (amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            console.log(chalk_1.default.green("Widthdraw Successful! Your Current Balance is $".concat(this.balance, ".")));
        }
        else {
            console.log(chalk_1.default.red("Insificent Balance."));
            console.log(chalk_1.default.yellow("Your Current Balance is $".concat(this.balance, ".")));
        }
        ;
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 100) {
            amount -= 1;
            this.balance += amount; // Update the balance with the amount
            console.log(chalk_1.default.bold.green("Deposit of $".concat(amount, " is Succussfully Done! $1 deposit charges is Deduct From Your Deposit.\n Your New Balance is $").concat(this.balance, ".")));
        }
        else if (amount <= 100) {
            amount -= 0;
            this.balance += amount; // Update the balance with the amount
            console.log(chalk_1.default.bold.green("Deposit of $".concat(amount, " is Successfully Done! Your New Balance is $").concat(this.balance, ".")));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log(chalk_1.default.yellow("Your Balance is $".concat(this.balance, ".")));
    };
    return BankAccount;
}());
//  create class for customers
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
    return Customer;
}());
// create Bank account
var accounts = [
    new BankAccount(1101, 1000),
    new BankAccount(1102, 1500),
    new BankAccount(1103, 2000)
];
//   create Customers
var customers = [
    new Customer("Muhammad", "Faraz", "Male", 28, 3001234567, accounts[0]),
    new Customer("Ayesha", "khan", "Female", 24, 3331244597, accounts[1]),
    new Customer("Qasim", "Shah", "Male", 28, 3132034527, accounts[2])
];
function accountHolder() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var accountNumber, customer, answer, amountDeposit, amountWithdraw;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                                        name: "accountnumber",
                                        type: "input",
                                        message: "Enter Your Account Number:"
                                    })];
                                case 1:
                                    accountNumber = _b.sent();
                                    customer = customers.find(function (customer) { return customer.account.accountNumber == accountNumber.accountnumber; });
                                    if (!customer) return [3 /*break*/, 8];
                                    console.log(chalk_1.default.magenta.bold("Welcome ".concat(customer.firstName, " ").concat(customer.lastName, " to Our OOP Bank.")));
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            name: "select",
                                            type: "list",
                                            message: "Please Enter Your Operation:",
                                            choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                                        })];
                                case 2:
                                    answer = _b.sent();
                                    if (!(answer.select === "Deposit")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            name: "amount",
                                            type: "input",
                                            message: "Enter your Amount To Deposit:"
                                        })];
                                case 3:
                                    amountDeposit = _b.sent();
                                    customer.account.deposit(amountDeposit.amount);
                                    return [3 /*break*/, 7];
                                case 4:
                                    if (!(answer.select === "Withdraw")) return [3 /*break*/, 6];
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            name: "amount",
                                            type: "input",
                                            message: "Enter your Amount To Withdraw:"
                                        })];
                                case 5:
                                    amountWithdraw = _b.sent();
                                    customer.account.withdraw(amountWithdraw.amount);
                                    return [3 /*break*/, 7];
                                case 6:
                                    if (answer.select === "Check Balance") {
                                        console.log(chalk_1.default.yellow("Your Balance is $".concat(customer.account.balance)));
                                    }
                                    else if (answer.select === "Exit") {
                                        console.log(chalk_1.default.blue("Exiting..."));
                                        console.log(chalk_1.default.magenta("*** Thank You For Using Our Services ***"));
                                        return [2 /*return*/, { value: void 0 }];
                                    }
                                    _b.label = 7;
                                case 7: return [3 /*break*/, 9];
                                case 8:
                                    console.log(chalk_1.default.red("Invalid Account Number"));
                                    _b.label = 9;
                                case 9: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1: return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _a.label = 3;
                case 3:
                    if (true) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
accountHolder();
