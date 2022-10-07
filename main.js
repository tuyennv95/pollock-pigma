window.addEventListener("load", function () {
    const toggle = document.querySelector(".icon-open");
    const menu = document.querySelector(".menu--active");
    toggle && toggle.addEventListener("click", handleToggleMenu);
    function handleToggleMenu(e) {
      menu && menu.classList.add("is-active");
    }
    document.addEventListener("click", handleClickOutside);
    function handleClickOutside(e) {
      if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
        return;
      menu && menu.classList.remove("is-active");
    }
  });
// window.addEventListener("load", function () {
//     const toggleSearch = document.querySelector(".search-outline");
//     const search = document.querySelector(".search");
//     toggleSearch && toggleSearch.addEventListener("click", handleToggleSearch);
//     function handleToggleSearch(e) {
//         search && search.classList.add("is-active-search");
//     }
//     document.addEventListener("click", handleClickOutsideSearch);
//     function handleClickOutsideSearch(e) {
//       if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
//         return;
//         search && search.classList.remove("is-active-search");
//     }
//   });