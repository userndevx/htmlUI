document.querySelectorAll('.parent-btn').forEach(parent => {
    parent.addEventListener('click', () => {
      const submenu = parent.nextElementSibling;
      submenu.classList.toggle('hidden');
      parent.classList.toggle('bg-gray-200');
    });
  });

  document.querySelectorAll('.child-btn').forEach(child => {
    child.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = child.closest('li').querySelector('.parent-btn');
      document.querySelectorAll('.child-btn').forEach(c => c.classList.remove('bg-gray-300'));
      document.querySelectorAll('.parent-btn').forEach(p => p.classList.remove('bg-gray-200'));
      parent.classList.add('bg-gray-200');
      child.classList.add('bg-gray-300');
    });
  });



// function initMenu() {
//   const menuItems = document.querySelectorAll('.menu-item');
//   let activeParent = null;
//   let activeChild = null;

//   function closeAllDropdowns() {
//     menuItems.forEach(item => {
//       const dropdown = item.querySelector('ul');
//       if (dropdown) {
//         dropdown.classList.add('hidden');
//       }
//       item.classList.remove('active');
//     });
//   }

//   function highlightItems(parent, child = null) {
//     if (activeParent) activeParent.classList.remove('active');
//     if (activeChild) activeChild.classList.remove('active');

//     parent.classList.add('active');
//     activeParent = parent;

//     if (child) {
//       child.classList.add('active');
//       activeChild = child;
//     } else {
//       activeChild = null;
//     }
//   }

//   menuItems.forEach(item => {
//     const button = item.querySelector('button');
//     const dropdown = item.querySelector('ul');

//     if (button && dropdown) {
//       button.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (dropdown.classList.contains('hidden')) {
//           closeAllDropdowns();
//           dropdown.classList.remove('hidden');
//           highlightItems(item);
//         } else {
//           dropdown.classList.add('hidden');
//           highlightItems(null);
//         }
//       });

//       const submenuItems = dropdown.querySelectorAll('.submenu-item');
//       submenuItems.forEach(submenuItem => {
//         submenuItem.addEventListener('click', (e) => {
//           e.preventDefault();
//           e.stopPropagation();
//           highlightItems(item, submenuItem);
//         });
//       });
//     } else {
//       item.addEventListener('click', (e) => {
//         e.preventDefault();
//         closeAllDropdowns();
//         highlightItems(item);
//       });
//     }
//   });

//   // Close dropdowns when clicking outside
//   document.addEventListener('click', (e) => {
//     if (!e.target.closest('.menu-item')) {
//       closeAllDropdowns();
//       highlightItems(null);
//     }
//   });
// }

// // This allows the function to be called after the menu is loaded
// window.initMenu = initMenu;

