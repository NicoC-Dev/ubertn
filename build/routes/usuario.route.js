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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(usuario_controller_1.UsuarioController);
router.post("/registrar-vehiculo", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield controller.registrarVehiculo(req, res, next);
}));
exports.default = router;
