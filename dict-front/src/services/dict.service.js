import http from "../http-common";

class DictService {
  getPage(query) {
    return http.post("DictionaryRead/GetPageDapper", query);
  }

  // { term, topic, translations}
  create(word) {
    return http.post("/DictionaryCommand", word);
  }

  // { term, topic, translations}
  update(word) {
    return http.put("/DictionaryCommand", word);
  }

  delete(term) {
    return http.delete(`/DictionaryCommand/${term}`);
  }
}

export default new DictService();
