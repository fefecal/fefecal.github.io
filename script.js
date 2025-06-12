// Configuração do WhatsApp
function setupWhatsApp() {
    // Número do WhatsApp (substitua pelo número real)
    const phoneNumber = '5511971636337'; // Formato: DDI + DDD + Número
    const message = 'Olá! Gostaria de mais informações sobre os serviços jurídicos.';
    
    // Criar o link do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Aplicar o link aos botões do WhatsApp
    const whatsappButtons = document.querySelectorAll('#whatsapp-link, #whatsapp-contact');
    whatsappButtons.forEach(button => {
        button.href = whatsappURL;
        button.target = '_blank';
    });
}

// Animações suaves ao rolar a página
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Manipulação do formulário de contato
function setupContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const message = form.querySelector('textarea').value;
            
            // Validação básica
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simular envio (aqui você pode integrar com um serviço de e-mail)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }
}

// Efeito de digitação no título principal
function setupTypingEffect() {
    const title = document.querySelector('.hero-text h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #ff8c00';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remover cursor após terminar
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Iniciar efeito após um pequeno delay
        setTimeout(typeWriter, 500);
    }
}

// Gerenciamento da imagem do advogado
function setupLawyerImage() {
    const img = document.getElementById('lawyer-photo');
    const placeholder = document.querySelector('.image-placeholder');
    
    if (!img || !placeholder) return;
    
    // Função para mostrar a foto
    function showPhoto() {
        placeholder.style.display = 'none';
        img.style.display = 'block';
        console.log('Foto do advogado carregada com sucesso');
    }
    
    // Função para mostrar o placeholder
    function showPlaceholder() {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
        console.log('Mostrando placeholder da foto');
    }
    
    // Verificar se a imagem já está carregada
    if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) {
        showPhoto();
        return;
    }
    
    // Event listeners para carregamento
    img.onload = function() {
        if (this.naturalHeight !== 0 && this.naturalWidth !== 0) {
            showPhoto();
        } else {
            showPlaceholder();
        }
    };
    
    img.onerror = function() {
        showPlaceholder();
        console.log('Erro ao carregar foto do advogado');
    };
    
    // Verificar se o src está vazio ou é o placeholder
    if (!img.src || img.src.includes('placeholder-lawyer.jpg')) {
        // Tentar carregar a imagem
        const testImg = new Image();
        testImg.onload = function() {
            img.src = this.src;
            showPhoto();
        };
        testImg.onerror = function() {
            showPlaceholder();
        };
        testImg.src = 'placeholder-lawyer.jpg';
    } else {
        showPlaceholder();
    }
}

// Smooth scroll para links internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efeito de esmaecer ao rolar para baixo
function setupFadeEffect() {
    const heroImage = document.querySelector('.hero-image');
    const heroSection = document.querySelector('.hero');
    
    if (!heroImage || !heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const fadeStart = heroHeight * 0.3; // Começa a esmaecer aos 30% da altura do hero
        const fadeEnd = heroHeight * 0.8; // Termina de esmaecer aos 80% da altura do hero
        
        if (scrolled >= fadeStart) {
            const fadeProgress = Math.min((scrolled - fadeStart) / (fadeEnd - fadeStart), 1);
            const opacity = 1 - (fadeProgress * 0.7); // Reduz até 30% da opacidade original
            const translateY = fadeProgress * 30; // Move 30px para baixo
            
            heroImage.style.opacity = opacity;
            heroImage.style.transform = `translateY(${translateY}px)`;
        } else {
            heroImage.style.opacity = 1;
            heroImage.style.transform = 'translateY(0)';
        }
    });
}

// Gerenciamento do logo da empresa
function setupCompanyLogo() {
    const logoImg = document.getElementById('company-logo');
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    
    if (!logoImg || !logoPlaceholder) return;
    
    // Função para mostrar o logo
    function showLogo() {
        logoPlaceholder.style.display = 'none';
        logoImg.style.display = 'block';
        logoImg.classList.add('loaded');
        console.log('Logo carregado com sucesso');
    }
    
    // Função para mostrar o placeholder
    function showPlaceholder() {
        logoImg.style.display = 'none';
        logoImg.classList.remove('loaded');
        logoPlaceholder.style.display = 'flex';
        console.log('Mostrando placeholder do logo');
    }
    
    // Verificar se a imagem já está carregada
    if (logoImg.complete && logoImg.naturalHeight !== 0 && logoImg.naturalWidth !== 0) {
        showLogo();
        return;
    }
    
    // Event listeners para carregamento
    logoImg.onload = function() {
        if (this.naturalHeight !== 0 && this.naturalWidth !== 0) {
            showLogo();
        } else {
            showPlaceholder();
        }
    };
    
    logoImg.onerror = function() {
        showPlaceholder();
        console.log('Erro ao carregar logo');
    };
    
    // Verificar se o src está vazio ou é o placeholder
    if (!logoImg.src || logoImg.src.includes('logo-empresa.png')) {
        // Tentar carregar a imagem
        const testImg = new Image();
        testImg.onload = function() {
            logoImg.src = this.src;
            showLogo();
        };
        testImg.onerror = function() {
            showPlaceholder();
        };
        testImg.src = 'logo-empresa.png';
    } else {
        showPlaceholder();
    }
}

// Scroll suave melhorado
function setupSmoothScroll() {
    // Interceptar todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 20; // Offset para não colar no topo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Melhorar a performance do scroll
    let ticking = false;
    
    function updateOnScroll() {
        // Aqui podemos adicionar outras funcionalidades de scroll se necessário
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Inicializar todas as funcionalidades quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    setupWhatsApp();
    setupScrollAnimations();
    setupContactForm();
    setupTypingEffect();
    setupLawyerImage();
    setupCompanyLogo();
    setupFadeEffect();
    setupSmoothScroll();
});

// Adicionar classe para indicar que o JavaScript foi carregado
document.documentElement.classList.add('js-loaded');



// Configuração do formulário de contato
function setupContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(form);
        const nome = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const telefone = form.querySelector('input[type="tel"]').value;
        const mensagem = form.querySelector('textarea').value;
        
        // Validar campos obrigatórios
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Criar o corpo do e-mail
        const assunto = `Contato do site - ${nome}`;
        const corpo = `Nome: ${nome}%0D%0A` +
                     `E-mail: ${email}%0D%0A` +
                     `Telefone: ${telefone || 'Não informado'}%0D%0A%0D%0A` +
                     `Mensagem:%0D%0A${mensagem}`;
        
        // Criar link mailto
        const mailtoLink = `mailto:felipecaleme@yahoo.com.br?subject=${encodeURIComponent(assunto)}&body=${corpo}`;
        
        // Abrir cliente de e-mail
        window.location.href = mailtoLink;
        
        // Mostrar mensagem de sucesso
        alert('Seu cliente de e-mail será aberto para enviar a mensagem. Se não abrir automaticamente, copie o e-mail: ');
        
        // Limpar formulário
        form.reset();
    });
}


// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    setupWhatsApp();
    setupCompanyLogo();
    setupLawyerImage();
    setupFadeEffect();
    setupSmoothScroll();
    setupContactForm();
    
    // Configurar animações de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.service-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

