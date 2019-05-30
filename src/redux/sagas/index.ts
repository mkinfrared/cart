import { all, fork } from "redux-saga/effects";

import { cartSaga } from "../reducers/cart/saga";

export function* rootSaga() {
  yield all([fork(cartSaga)]);
}
