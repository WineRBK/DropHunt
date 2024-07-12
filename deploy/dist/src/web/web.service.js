"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let WebService = class WebService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createWeb(name) {
        return this.prisma.web.create({
            data: {
                name,
            },
        });
    }
    async getAllWebs() {
        return this.prisma.web.findMany();
    }
    async getWebById(id) {
        return this.prisma.web.findUnique({
            where: { id },
        });
    }
    async updateWeb(id, data) {
        return this.prisma.web.update({
            where: { id },
            data,
        });
    }
    async deleteWeb(id) {
        return this.prisma.web.delete({
            where: { id },
        });
    }
};
exports.WebService = WebService;
exports.WebService = WebService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WebService);
//# sourceMappingURL=web.service.js.map