import { describe, expect, it } from "vitest";
import MenuDomain from "../types/MenuDomain";
import MenuPersistence from "../types/MenuPersistence";
import MenuMapper from "./MenuMapper";

describe("MenuMapper", () => {
    it("should return MenuDomain when toDomain method is called", () => {
        const menuPersistence: MenuPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const menuToDomain = MenuMapper.toDomain(menuPersistence);

        const menuToDomainExpected: MenuDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(menuToDomain).toMatchObject(menuToDomainExpected);
    });

    it("should return MenuPersistence when toPersistence method is called", () => {
        const menuDomain: MenuDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const menuToPersistence =
            MenuMapper.toPersistence(menuDomain);

        const menuToPersistenceExpected: MenuPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(menuToPersistence).toMatchObject(
            menuToPersistenceExpected
        );
    });
});
