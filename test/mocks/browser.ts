import { setupWorker } from "msw";
// import { documentsApiMocks } from "@/services/domain/documents/mocks/DocumentsApiMock";

export const browser =
  setupWorker();
  //...documentsApiMocks
