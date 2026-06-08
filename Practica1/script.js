

document.addEventListener('DOMContentLoaded', async () => {

    const contenedor =
    document.getElementById(
        'contenedor-productos'
    );

    if(contenedor){

        try {

            const response =
            await fetch(
                'http://localhost:8080/api/productos'
            );

            const productos =
            await response.json();

            contenedor.innerHTML = '';

            productos.forEach(prod => {

                contenedor.innerHTML += `
                
                <div class="card">

                    <img 
                    src="${prod.imagen_url}" 
                    alt="${prod.nombre}" 
                    class="producto-img"
                    >

                    <h3>
                        ${prod.nombre}
                    </h3>

                    <p class="marca">
                        ${prod.marca}
                    </p>

                    <p class="precio">
                        $${prod.precio}
                    </p>

                    <button class="btn">
                        Comprar Ahora
                    </button>

                </div>
                `;
            });

        } catch (error) {

            console.error(
                'Error cargando productos:',
                error
            );
        }
    }



    const productosDinamicos = [
        {
            imagen_url: 'iconos/27963.jpg',
            nombre: 'Eau de Luxe',
            marca: 'Master Luxury',
            precio: 95
        },
        {
            imagen_url: 'iconos/front-view-expensive-fragnance-dark-background-color-perfume-gift-present-love-couple-marriage-feeling-scent.jpg',
            nombre: 'Premium Velvet',
            marca: 'Elegance',
            precio: 120
        },
        {
            imagen_url: 'fotos/perfume boss.png',
            nombre: 'Boss Sensation',
            marca: 'Boss',
            precio: 110
        },
        {
            imagen_url: 'fotos/perfume sauvage.png',
            nombre: 'Sauvage Night',
            marca: 'Dior',
            precio: 105
        }
    ];

    const contenedorDinamico = document.getElementById('contenedor-productos-dinamicos');
    if (contenedorDinamico) {
        contenedorDinamico.innerHTML = '';
        productosDinamicos.forEach(prod => {
            contenedorDinamico.innerHTML += `
                <div class="card">
                    <img src="${prod.imagen_url}" alt="${prod.nombre}" class="producto-img">
                    <h3>${prod.nombre}</h3>
                    <p class="marca">${prod.marca}</p>
                    <p class="precio">$${prod.precio}</p>
                    <button class="btn">Comprar Ahora</button>
                </div>
            `;
        });
    }

    const registroForm =
        document.getElementById('registroForm');
    const loginForm =
        document.getElementById('loginForm');
    const loginNombre =
        document.getElementById('loginNombre');
    const loginClave =
        document.getElementById('loginClave');
    const loginButton =
        document.getElementById('loginButton');
    const loginMessage =
        document.getElementById('loginMessage');

    const enableLogin = () => {
        if (loginNombre) loginNombre.disabled = false;
        if (loginClave) loginClave.disabled = false;
        if (loginButton) loginButton.disabled = false;
        if (loginMessage) {
            loginMessage.textContent = 'Registro exitoso. Ahora inicia sesión.';
            loginMessage.style.color = 'var(--gold)';
        }
    };

    if (registroForm) {
        registroForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const clave = document.getElementById('clave').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const direccion = document.getElementById('direccion').value.trim();
            const cedula = document.getElementById('cedula').value.trim();
            const ciudadPais = document.getElementById('ciudadPais').value.trim();

            try {
                const response = await fetch('/api/registro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre,
                        clave,
                        apellido,
                        direccion,
                        cedula,
                        ciudadPais
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || data.mensaje || 'Error en el registro');
                }

                alert(data.mensaje);
                enableLogin();
            } catch (error) {
                console.error('Error:', error);
                alert(error.message || 'Error conectando con el servidor');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const nombre = loginNombre.value.trim();
            const clave = loginClave.value.trim();

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre,
                        clave
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.mensaje || data.error || 'Login fallido');
                }

                alert(data.mensaje);
                window.location.href = 'productos.html';
            } catch (error) {
                console.error('Error:', error);
                alert(error.message || 'Error conectando con el servidor');
            }
        });
    }

    // 3D Perfume Movement
    const perfumeContainer = document.querySelector('.perfume-container');
    if (perfumeContainer) {
        perfumeContainer.addEventListener('mousemove', (e) => {
            const items = document.querySelectorAll('.perfume-item');
            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) / 10;
                const deltaY = (e.clientY - centerY) / 10;
                item.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg) translateZ(20px)`;
            });
        });

        perfumeContainer.addEventListener('mouseleave', () => {
            const items = document.querySelectorAll('.perfume-item');
            items.forEach(item => {
                item.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
            });
        });
    }

});