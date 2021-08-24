import http from "../http-common";

class RepetitionService {
  createRepetitionSet() {
    return http.post("Repetition/CreateRepetitionSet");
  }

  completeRepetition(wordsList) {
    return http.post("Repetition/CompleteRepetition", wordsList);
  }
}

export default new RepetitionService();
