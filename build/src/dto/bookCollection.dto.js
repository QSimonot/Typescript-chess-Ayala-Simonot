"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
exports.getStateFromInteger = getStateFromInteger;
exports.getIntegerFromState = getIntegerFromState;
var State;
(function (State) {
    State["INUTILISABLE"] = "Inutilisable";
    State["MAUVAIS"] = "Mauvais";
    State["PASSABLE"] = "Passable";
    State["BON"] = "Bon";
    State["TRES_BON"] = "Tr\u00E8s bon";
    State["NEUF"] = "Neuf";
})(State || (exports.State = State = {}));
function getStateFromInteger(value) {
    switch (value) {
        case 0:
            return State.INUTILISABLE;
        case 1:
            return State.MAUVAIS;
        case 2:
            return State.PASSABLE;
        case 3:
            return State.BON;
        case 4:
            return State.TRES_BON;
        case 5:
            return State.NEUF;
        default:
            const error = new Error("State out of range");
            error.status = 412;
            throw error;
    }
}
function getIntegerFromState(value) {
    switch (value) {
        case State.INUTILISABLE:
            return 0;
        case State.MAUVAIS:
            return 1;
        case State.PASSABLE:
            return 2;
        case State.BON:
            return 3;
        case State.TRES_BON:
            return 4;
        case State.NEUF:
            return 5;
    }
}
