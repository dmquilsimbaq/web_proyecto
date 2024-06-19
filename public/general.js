async function consultar(t, r = "GET", n = null, o = "") {
  return await new Promise((s, a) => {
    "ws" == o && (o = "http://localhost/ws_core/public/index.php/"),
      "" == o && (o = "http://localhost/web_proyecto/public/index.php/");
    try {
      $.ajax({
        type: r,
        url: `${o}${t}`,
        data: JSON.stringify(n),
        contentType: "application/json",
        dataType: "json",
        success: function (t) {
          var r = imprimirError("9999", "Error en la consulta JS");
          (r = "string" == typeof t ? JSON.parse(t) : t), s(r);
        },
        error: function (t, r, n) {
          a(
            imprimirError("9999", "Error en la consulta JS, vuelva a intentar")
          );
        },
      });
    } catch ({ name: t, message: r }) {
      a(imprimirError("9999", `${t}: ${r}`));
    }
  });
}
function notificacion(t = "", r = "success", n = "Correcto!") {
  $("#liveToast").html(
    `\n        <div class="toast-header bg-${r} text-white"><strong class="me-auto">${n}</strong><small>${t}</small>\n            <button class="btn-close btn-close-white" type="button" data-bs-dismiss="toast" aria-label="Close"></button>\n        </div>\n        <div class="toast-body">${t}</div>\n    `
  ),
    $("#liveToastBtn").click();
}
function imprimirError(t, r, n = null) {
  return null == n
    ? { error: t, mensaje: r }
    : { error: t, mensaje: r, datos: n };
}
