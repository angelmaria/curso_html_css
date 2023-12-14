$(document).ready(function () {
  $(".btn-danger").click(function () {
    swal
      .fire({
        title: "Eliminar",
        text: "Estás seguro que deseas eliminar este portátil??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      })
      .then((resultado) => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          $(this).parent().parent().remove();
        } else {
          // Dijeron que no
          return false;
        }
      });
  });

  $("#fabricante").hover(
    function () {
      $(this).attr("size", $("option").length);
    },
    function () {
      $(this).attr("size", 1);
    }
  );

  $("#sesion").click(function () {
    swal
      .fire({
        title: "Cerrar Sesión",
        text: "Estás seguro que deseas cerrar la sesión??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar",
        cancelButtonText: "Cancelar",
      })
      .then((resultado) => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          console.log("A la espera de código.")
        } else {
          // Dijeron que no
          return false;
        }
      });
  });
});
