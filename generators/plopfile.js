module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },

      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/useController.tsx",
        templateFile: "templates/useController.tsx.hbs",
      },

      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
        templateFile: "templates/test.spec.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("domain", {
    description: "application domain logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "domain name in singular please",
      },
    ],
    actions: [
      // Types
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/types/{{pascalCase name}}Domain.ts",
        templateFile: "templates/domain/types/Domain.ts.hbs",
      },
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/types/{{pascalCase name}}Persistence.ts",
        templateFile: "templates/domain/types/Persistence.ts.hbs",
      },
      //Services
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/services/{{pascalCase name}}sService.ts",
        templateFile: "templates/domain/services/Service.ts.hbs",
      },
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/services/{{pascalCase name}}sService.spec.ts",
        templateFile: "templates/domain/services/Service.spec.ts.hbs",
      },
      //Mappers
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/mappers/{{pascalCase name}}Mapper.ts",
        templateFile: "templates/domain/mappers/Mapper.ts.hbs",
      },
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/mappers/{{pascalCase name}}Mapper.spec.ts",
        templateFile: "templates/domain/mappers/Mapper.spec.ts.hbs",
      },
      // Enums
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/enums/{{pascalCase name}}Enum.ts",
        templateFile: "templates/domain/enums/Enum.ts.hbs",
      },
      // Schemas
      {
        type: "add",
        path: "../src/services/app/domain/{{camelCase name}}s/schemas/{{pascalCase name}}ZodSchema.ts",
        templateFile: "templates/domain/schemas/ZodSchema.ts.hbs",
      },
    ],
  });
};
