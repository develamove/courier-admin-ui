import { apiProvider } from './provider';

export default class ApiCore {
  constructor(oOptions) {
    if (oOptions.getAll) {
      this.getAll = (oParams) => {
        return apiProvider.getAll(oOptions.url, oParams);
      };
    }
    
    if (oOptions.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(oOptions.url, id);
      };
    }

    if (oOptions.post) {
      this.post = (model) => {
        return apiProvider.post(oOptions.url, model);
      };
    }

    if (oOptions.put) {
      this.put = (model) => {
        return apiProvider.put(oOptions.url, model);
      };
    }

    if (oOptions.patch) {
      this.patch = (model) => {
        return apiProvider.patch(oOptions.url, model);
      };
    }

    if (oOptions.remove) {
      this.remove = (id) => {
        return apiProvider.remove(oOptions.url, id);
      };
    }
  }
}
