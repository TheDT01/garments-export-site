/* Minimal prototype session */
(function () {
  const key = "demo-user";
  const current = JSON.parse(localStorage.getItem(key) || "null");
  function isLogged() {
    return !!current;
  }
  function requireLogin() {
    if (!isLogged()) {
      alert(
        "Please sign up or log in to access the full database (prototype)."
      );
      location.href = `${ROOT}/pages/auth/register.html`;
      return false;
    }
    return true;
  }
  window.STATE = { isLogged, requireLogin };
})();
