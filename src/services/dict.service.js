import http from "../http-common";

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
    .post("DictionaryRead/GetPageDapper", query)
    .then(getResponseDataOrThrow);
  }



  // { term, topic, translations}
  create(word) {
    return http
    .post("/DictionaryCommand", word)
    .then(getResponseDataOrThrow);
  }

  // { term, topic, translations}
  update(word) {
    return http
    .put("/DictionaryCommand", word)
    .then(getResponseDataOrThrow);
  }

  delete(term) {
    return http
    .delete(`/DictionaryCommand/${term}`)
    .then(getResponseDataOrThrow);
  }
}

export default new DictService();
