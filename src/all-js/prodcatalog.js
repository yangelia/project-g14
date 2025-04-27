document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.querySelector('.catalog-button');

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      // Знаходимо всі приховані елементи
      const hiddenItems = document.querySelectorAll(
        '.product-item:nth-child(n + 5)'
      );

      // Показуємо їх
      hiddenItems.forEach(item => {
        item.style.display = 'block';

        // Форсуємо завантаження зображень
        const img = item.querySelector('img');
        if (img) {
          img.loading = 'eager';
          // Додатково для перезавантаження зображення
          const src = img.src;
          img.src = '';
          img.src = src;
        }
      });

      // Ховаємо кнопку
      this.style.display = 'none';
    });
  }
});
