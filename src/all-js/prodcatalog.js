document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.querySelector('.catalog-button');
  const productItems = document.querySelectorAll('.product-item');
  const itemsToShowInitially = 4; // Показываем первые 4 элемента
  let hiddenItems = [];

  function updateVisibility() {
    // Сбрасываем все элементы
    productItems.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('visible');
    });

    // Определяем какие элементы должны быть видны
    if (window.innerWidth < 768) {
      // Мобильная версия - показываем первые 4
      for (
        let i = 0;
        i < Math.min(itemsToShowInitially, productItems.length);
        i++
      ) {
        productItems[i].style.display = 'block';
        productItems[i].classList.add('visible');
      }

      // Собираем скрытые элементы
      hiddenItems = Array.from(productItems).slice(itemsToShowInitially);

      // Показываем/скрываем кнопку
      if (hiddenItems.length > 0) {
        showMoreBtn.style.display = 'block';
      } else {
        showMoreBtn.style.display = 'none';
      }
    } else {
      // Планшет/десктоп - показываем все
      productItems.forEach(item => {
        item.style.display = 'block';
        item.classList.add('visible');
      });
      showMoreBtn.style.display = 'none';
    }
  }

  // Обработчик клика по кнопке
  showMoreBtn.addEventListener('click', function () {
    hiddenItems.forEach(item => {
      item.style.display = 'block';
      item.classList.add('visible');
    });
    showMoreBtn.style.display = 'none';
  });

  // Обработчик изменения размера окна
  window.addEventListener('resize', function () {
    updateVisibility();
  });

  // Инициализация при загрузке
  updateVisibility();
});
