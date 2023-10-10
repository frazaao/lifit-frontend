import PatientProfileMapper from "../../patientProfiles/mappers/PatientProfileMapper";
import RecipeMapper from "../../recipes/mappers/RecipeMapper";
import MenuDomain from "../types/MenuDomain";
import MenuPersistence from "../types/MenuPersistence";

class MenuMapper {
    toDomain(menu: MenuPersistence): MenuDomain {
        const recipesToDomain = menu.recipes?.map((recipe) =>
            RecipeMapper.toDomain(recipe)
        );

        const patientProfileToDomain = menu.patient_profile
            ? PatientProfileMapper.toDomain(menu.patient_profile)
            : undefined;

        return {
            id: menu.id,
            patientProfileId: menu.patient_profile_id,
            title: menu.title,
            createdBy: menu.created_by,
            createdAt: menu.created_at,
            updatedAt: menu.updated_at,
            deletedAt: menu.deleted_at,

            //Relationships
            patientProfile: patientProfileToDomain,
            recipes: recipesToDomain,
        };
    }

    toPersistence(menu: MenuDomain): MenuPersistence {
        const recipesToPersistence = menu.recipes?.map((recipe) =>
            RecipeMapper.toPersistence(recipe)
        );

        const patientProfileToPersistence = menu.patientProfile
            ? PatientProfileMapper.toPersistence(menu.patientProfile)
            : undefined;

        return {
            id: menu.id,
            patient_profile_id: menu.patientProfileId,
            title: menu.title,
            created_by: menu.createdBy,
            created_at: menu.createdAt,
            updated_at: menu.updatedAt,
            deleted_at: menu.deletedAt,

            //Relationships
            patient_profile: patientProfileToPersistence,
            recipes: recipesToPersistence,
        };
    }
}

export default new MenuMapper();
