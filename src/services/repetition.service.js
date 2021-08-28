import http from "../http-common";
import { getResponseDataOrThrow } from "./http-common";

class RepetitionService {
  async createRepetitionSet() {
    const r = await http.post("Repetition/CreateRepetitionSet");
    return getResponseDataOrThrow(r);
  }

  async completeRepetition(wordsList) {
    const r = await  http.post("Repetition/CompleteRepetition", wordsList);
    return getResponseDataOrThrow(r);
  }
}

export default new RepetitionService();
