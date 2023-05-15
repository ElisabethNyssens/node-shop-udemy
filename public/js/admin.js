const deleteProduct = (btn) => {
  console.log("click");
  const csrfToken = btn.parentNode.querySelector("[name=_csrf]").value;
  const productId = btn.parentNode.querySelector("[name=productId]").value;
  // const item = btn.parentNode.parentNode;
  const item = btn.closest("article"); // OMG !!!!!!

  fetch(`/admin/product/${productId}`, {
    method: "DELETE",
    // all the available keys in the "csurf" doc on Github
    headers: {
      "csrf-token": csrfToken,
    },
  })
    .then((result) => {
      return result.json(); // response object
    })
    .then((data) => {
      console.log(data); // json with message
      item.parentNode.removeChild(item);
    })
    .catch((err) => {
      console.log(err);
    });
};
