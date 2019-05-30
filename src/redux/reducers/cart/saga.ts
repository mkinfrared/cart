import { all, fork, put, select, takeEvery } from "redux-saga/effects";

import {
  addProductFail,
  addProductSuccess,
  getCartSuccess,
  removeProduct,
  removeProductSuccess,
  updateProduct,
  updateProductSuccess
} from "./actions";
import { getCart, getCounter, getProducts } from "./selectors";
import { Cart, CartActionTypes, Product } from "./types";
import data from "../../../products.json";

const dataProducts: Product[] = data.ProductCollection;

export function* cartSaga() {
  yield all([
    fork(watchAddProductSaga),
    fork(watchGetCartSaga),
    fork(watchRemoveProductSaga),
    fork(watchSaveCartSaga),
    fork(watchUpdateProductSaga)
  ]);
}

function* watchAddProductSaga() {
  yield takeEvery(CartActionTypes.ADD_PRODUCT, addProductSaga);
}

function* addProductSaga() {
  try {
    const products: Product[] = yield select(getProducts);
    const counter: number = yield select(getCounter);

    const product = yield dataProducts[counter];

    if (!product) {
      throw new Error("Index is out of range");
    }

    yield put(addProductSuccess([...products, product]));
  } catch (e) {
    yield put(addProductFail(e.message));
  }
}

function* watchGetCartSaga() {
  yield takeEvery(CartActionTypes.GET_CART, getCartSaga);
}

function* getCartSaga() {
  try {
    const json = localStorage.getItem("cart");

    if (json) {
      const cart = JSON.parse(json);
      yield put(getCartSuccess(cart));
    }
  } catch (e) {}
}

function* watchRemoveProductSaga() {
  yield takeEvery(CartActionTypes.REMOVE_PRODUCT, removeProductSaga);
}

function* removeProductSaga(action: ReturnType<typeof removeProduct>) {
  const { payload } = action;

  let products: Product[] = yield select(getProducts);

  products = products.filter((prod: Product) => prod.ProductId !== payload);

  yield put(removeProductSuccess(products));
}

function* watchUpdateProductSaga() {
  yield takeEvery(CartActionTypes.UPDATE_PRODUCT, updateProductSaga);
}

function* updateProductSaga(action: ReturnType<typeof updateProduct>) {
  const { payload } = action;
  const products: Product[] = yield select(getProducts);

  const updatedProducts = products.map(product => {
    if (product.ProductId === payload.id) {
      return { ...product, Quantity: payload.quantity };
    }
    return product;
  });

  yield put(updateProductSuccess(updatedProducts));
}

function* watchSaveCartSaga() {
  yield takeEvery(CartActionTypes.SAVE_CART, saveCartSaga);
}

function* saveCartSaga() {
  try {
    const cart: Cart = yield select(getCart);

    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {}
}
