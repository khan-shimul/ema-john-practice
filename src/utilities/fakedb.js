// use local storage as your db for now
const addToDb = id => {
  // call the getDb func
  const exists = getDb();

  let shopping_cart = {};
  // if shopping_cart obj is not exists
  if (!exists) {
    shopping_cart[id] = 1;
  }
  // if shopping_cart obj exists
  else {
    shopping_cart = JSON.parse(exists);
    // if that id already exists
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    // if that id is not exists
    else {
      shopping_cart[id] = 1;
    }
  }
  // set new || update to the local storage
  updateDb(shopping_cart);
};

// get object from local storage
const getDb = () => localStorage.getItem('shopping_cart');

// set new || update to the local storage
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

// delete from local storage
const removeFromDb = id => {
  const exists = getDb();
  // if that id does not exists
  if (!exists) {

  }
  // if that id exists
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];

    updateDb(shopping_cart);
  }
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
