import http from "./http-common";
import { getResponseDataOrThrow } from "./http-common";
import * as constants from "../constants";
class RepetitionService {
  async createRepetitionSet() {
    const r = await http.post("Repetition/CreateRepetitionSet");
    return getResponseDataOrThrow(r);
  }

  async completeRepetition(wordsList) {
    const r = await http.post("Repetition/CompleteRepetition", wordsList);
    return getResponseDataOrThrow(r);
  }

  drillCompleted(props) {
    return props.results.length === constants.REPETITION_SET_LENGTH;
  }
}

export default new RepetitionService();
