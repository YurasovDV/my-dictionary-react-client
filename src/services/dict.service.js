import http from "./http-common";

const isSuccessful = r => r?.data?.statusCode === 0;

const getResponseDataOrThrow = r =>  {
  if (isSuccessful(r)) {
    return r.data.data;
  } else {
    throw new Error(r.data.errorText);
  }
};

class DictService {

  getPage(query) {
    return http
    .post("DictionaryRead/GetPageNoTracking", query)
    .then(getResponseDataOrThrow);
  }

  // { term, topic, translations}
  async create(word) {
    const r = await http
      .post("/DictionaryCommand", word);
    return getResponseDataOrThrow(r);
  }

  // { term, topic, translations}
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
