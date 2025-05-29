export const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) return c.substring(name.length + 1, c.length);
  }
};

export const setCookie = (cname, cvalue, exday) => {
  var d = new Date();
  d.setTime(d.getTime() + exday * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
};

export const deleteCookie = (cname) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      let del = cname + "=;expires=Thu, 01 Jan 1990 00:00:00 UTC";
      document.cookie = del;
    }
  }
};
