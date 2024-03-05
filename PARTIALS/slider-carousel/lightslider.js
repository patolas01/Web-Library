jQuery(document).ready(function ($) {
    $(document).ready(function () {
        $('.slider').each(function () {
            var $this = $(this);
            var $track = $this.find('.slider-track');
            var $items = $this.find('.slider-item');
            var $dotsContainer = $this.find('.slider-nav-dots');
            var totalItems = $items.length;
            var currentIndex = 0;

            // Adiciona os botões indicadores
            for (var i = 0; i < totalItems; i++) {
                var $dot = $('<div class="slider-dot"></div>');
                $dotsContainer.append($dot);
            }

            var $dots = $dotsContainer.find('.slider-dot');

            // Atualiza a classe ativa para o indicador atual
            function updateDots() {
                $dots.removeClass('active').eq(currentIndex).addClass('active');
            }

            // Mover slide
            function moveToSlide(index) {
                var totalItems = $items.length;
                var $cloneSlides = $items.clone(); // Clone os slides originais

                // Adicione os clones no final e início
                $track.append($cloneSlides).prepend($cloneSlides);

                // Mova o slider-track usando translate3d
                var offset = $cloneSlides.eq(index).position().left;
                $track.css('transform', 'translate3d(calc(-' + offset + 'px + 1rem), 0, 0)');

                currentIndex = index;
                updateDots();

                // Remova a classe de transição para evitar flicker
                $track.removeClass('transition-active');

                // Após um pequeno atraso, remova a transição para restaurar o movimento suave
                setTimeout(function () {
                    $track.addClass('transition-active');
                }, 50);
            }




            // Associa os eventos aos botões de navegação
            $this.find('.slider-btn.left').on('click', function () {
                if (currentIndex > 0) {
                    moveToSlide(currentIndex - 1);
                } else {
                    moveToSlide(totalItems - 1); // Volta para o último slide se estiver no primeiro
                }
            });

            $this.find('.slider-btn.right').on('click', function () {
                if (currentIndex < totalItems - 1) {
                    moveToSlide(currentIndex + 1);
                } else {
                    moveToSlide(0); // Volta para o primeiro slide se estiver no último
                }
            });

            // Associa os eventos aos botões indicadores
            $dots.on('click', function () {
                var index = $(this).index();
                moveToSlide(index);
            });

            // Inicializa o slider
            updateDots();



        });

    });






});

