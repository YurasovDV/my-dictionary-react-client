import http from "./http-common";
import { getResponseDataOrThrow } from "./http-common";

class DictService {

  async getPage(query) {
    const r = await http
      .post("DictionaryRead/GetPageNoTracking", query);
    const page = getResponseDataOrThrow(r);
    return page;
  }

  async create(word) {
    const r = await http
      .post("/DictionaryCommand", word);
    return getResponseDataOrThrow(r);
  }

  async update(word) {
    const r = await http
      .put("/DictionaryCommand", word);
    return getResponseDataOrThrow(r);
  }

  async delete(term) {
    const r = await http
      .delete(`/DictionaryCommand/${term}`);
    return getResponseDataOrThrow(r);
  }
}

export default new DictService();
