// ==========================================
// INFORMACIÓN DE LOS COMPONENTES
// ==========================================

    const componentes = {

        // PANTALLA HMI
        hmi: {

            nombre: "Pantalla Táctil (HMI)",

            parte: "MIBRX-DSP-IND-96-8-0-00-C",

            marca: "SELEC",

            tipo: "Interfaz Hombre-Máquina (HMI)",

            funcion: "Visualización, supervisión y control del proceso.",

            descripcion:
                "Interfaz hombre-máquina utilizada para visualizar información del proceso y permitir la interacción con el sistema de automatización.",

            imagen: "",

            caracteristicas: [
                "Pantalla táctil",
                "Interfaz hombre-máquina (HMI)",
                "Visualización de información del proceso",
                "Control y supervisión del sistema"
            ]

        },


        // CONTROLADOR DE TEMPERATURA
        pid: {

            nombre: "Controlador de Temperatura",

            parte: "PID500-U-0-1",

            marca: "SELEC",

            tipo: "Controlador de temperatura",

            funcion: "Medición, regulación y control de la temperatura del proceso.",

            descripcion:
                "Controlador utilizado para medir, regular y supervisar la temperatura de un proceso mediante estrategias de control.",

            imagen: "",

            caracteristicas: [
                "Control de temperatura",
                "Control PID",
                "Visualización de temperatura",
                "Configuración del punto de operación"
            ]

        },
         
    // ==========================================
    // PANEL INDICADOR DE ALARMAS
    // ==========================================

        panelAlarmas: {

            nombre: "Panel Indicador de Alarmas",

            parte: "AN-8-0-0-230V",

            marca: "Por definir",

            tipo: "Panel indicador de alarmas",

            funcion: "Indicación visual del estado de diferentes alarmas del sistema.",

            descripcion:
                "Panel utilizado para indicar visualmente diferentes estados de alarma del sistema de automatización.",

            imagen: "",

            caracteristicas: [
                "Indicadores luminosos",
                "Visualización de estados de alarma",
                "Múltiples canales de indicación",
                "Aplicación en sistemas de automatización"
            ]

        },

    // ==========================================
    // INTERRUPTOR DE LÍMITE
    // ==========================================

    interruptorLimite: {

        nombre: "Interruptor de Límite",

        parte: "L5K13MIP311",

        marca: "OMRON",

        tipo: "Interruptor de límite",

        funcion:
            "Detectar la posición o desplazamiento de un mecanismo mediante accionamiento mecánico.",

        descripcion:
            "Dispositivo electromecánico utilizado para detectar la posición de un elemento mediante un actuador mecánico.",

        imagen: "",

        caracteristicas: [
            "Accionamiento mecánico",
            "Detección de posición",
            "Uso en sistemas de automatización",
            "Contacto eléctrico de conmutación"
        ]

    },

    // ==========================================
    // VENTILADOR
    // ==========================================

    ventilador: {

        nombre: "Ventilador",

        parte: "Por definir",

        marca: "Por definir",

        tipo: "Ventilador",

        funcion:
            "Proporcionar ventilación y circulación de aire dentro del sistema.",

        descripcion:
            "Elemento utilizado para generar circulación de aire y favorecer la ventilación del sistema.",

        imagen: "",

        caracteristicas: [
            "Circulación de aire",
            "Ventilación del sistema",
            "Disipación de calor"
        ]

    },
    // ==========================================
    // SENSOR DE TEMPERATURA TIPO J
    // ==========================================

    sensorJ: {
    nombre: "Sensor de Temperatura Tipo J",
    parte: "Por definir",
    marca: "Por definir",
    tipo: "Sensor de temperatura tipo J",
    funcion:
        "Medir la temperatura del proceso y proporcionar una señal eléctrica proporcional.",
    descripcion:
        "Sensor utilizado para medir temperatura mediante un termopar tipo J.",
    imagen: "",
    caracteristicas: [
        "Termopar tipo J",
        "Medición de temperatura",
        "Señal eléctrica para instrumentación",
        "Aplicación en sistemas de control"
    ]
    },
    // ==========================================
    // DO-X1
    // ==========================================    
    smartDataLogger: {
        nombre: "Smart Data Logger",
        parte: "MX-DO-1",
        marca: "Por definir",
        tipo: "Registrador de datos",
        funcion:
            "Registrar y organizar datos del sistema para facilitar su supervisión y análisis.",
        descripcion:
            "Dispositivo destinado al registro de información del proceso. Las funciones específicas de este modelo están pendientes de confirmar.",
        imagen: "",
        caracteristicas: [
            "Registro de datos",
            "Consulta de información del proceso",
            "Apoyo a la supervisión del sistema",
            "Especificaciones técnicas por confirmar"
        ]
    },
    // ==========================================
    // SENSOR DE TEMPERATURA
    // ==========================================  
    transmisorTemperatura: {
        nombre: "Transmisor de Temperatura/Humedad",
        parte: "PMDL-W-H1/T1.1.0.0",
        marca: "Por definir",
        tipo: "Transmisor de temperatura y humedad",
        funcion:
            "Medir las condiciones ambientales de temperatura y humedad.",
        descripcion:
            "Dispositivo de instrumentación destinado a medir temperatura y humedad. Las características exactas y las salidas disponibles deben confirmarse con la documentación del fabricante.",
        imagen: "",
        caracteristicas: [
            "Medición de temperatura",
            "Medición de humedad",
            "Aplicación en monitoreo ambiental",
            "Tipo de salida por confirmar"
        ]
    },
    // ==========================================
    // MEDIDOR DE ENERGÍA
    // ==========================================  
    medidorEnergia: {
        nombre: "Medidor de Energía Monofásico",
        parte: "EM2M-1P-C-100A-110V",
        marca: "Por definir",
        tipo: "Medidor de energía eléctrica monofásico",
        funcion:
            "Medir variables eléctricas y permitir la supervisión del consumo de energía.",
        descripcion:
            "Instrumento utilizado para supervisar parámetros eléctricos de un sistema monofásico. Las magnitudes medidas y los protocolos disponibles deben verificarse en su ficha técnica.",
        imagen: "",
        caracteristicas: [
            "Aplicación monofásica",
            "Medición eléctrica",
            "Referencia de corriente: 100 A según el modelo indicado",
            "Tensión indicada en el modelo: 110 V",
            "Funciones de medición por confirmar"
        ]
    },
    // ==========================================
    // CONVERTIDOR RS485 A ETHERNET
    // ==========================================  
    convertidorRS485: {
        nombre: "Convertidor RS485 a Ethernet",
        parte: "AC-S2E-02",
        marca: "Por definir",
        tipo: "Convertidor de comunicación industrial",
        funcion:
            "Facilitar la comunicación entre equipos con interfaz RS485 y una red Ethernet compatible.",
        descripcion:
            "Dispositivo de comunicación que permite integrar equipos industriales en una red Ethernet. Los protocolos y parámetros de configuración compatibles deben confirmarse.",
        imagen: "",
        caracteristicas: [
            "Interfaz RS485",
            "Interfaz Ethernet",
            "Integración de equipos industriales",
            "Configuración de comunicación por confirmar"
        ]
    },
    // ==========================================
    // ENTRADAS
    // ==========================================  
    flexysEntradas: {
        nombre: "Tarjeta Flexys de Entradas",
        parte: "Por definir",
        marca: "Por definir",
        tipo: "Módulo de entradas",
        funcion:
            "Recibir señales de campo para que el sistema de control pueda supervisar estados o variables.",
        descripcion:
            "Módulo de entradas perteneciente al sistema Flexys. El tipo de señales admitidas y la cantidad de canales deben verificarse en la documentación del módulo.",
        imagen: "",
        caracteristicas: [
            "Recepción de señales de campo",
            "Integración con el sistema de control",
            "Cantidad de canales por confirmar",
            "Tipo de entradas por confirmar"
        ]
    },
    // ==========================================
    // SALIDAS
    // ==========================================  
    flexysSalidas: {
        nombre: "Tarjeta Flexys de Salidas",
        parte: "Por definir",
        marca: "Por definir",
        tipo: "Módulo de salidas",
        funcion:
            "Enviar señales de control desde el sistema hacia dispositivos externos compatibles.",
        descripcion:
            "Módulo de salidas perteneciente al sistema Flexys. La naturaleza de las señales y la capacidad eléctrica deben verificarse en la ficha técnica.",
        imagen: "",
        caracteristicas: [
            "Envío de señales de control",
            "Integración con el sistema de control",
            "Cantidad de canales por confirmar",
            "Tipo y capacidad de salidas por confirmar"
        ]
    },
    // ==========================================
    // TORRETA MULTINIVEL
    // ==========================================  
    torretaMultinivel: {
        nombre: "Torreta Multinivel",
        parte: "IF5T024XM05",
        marca: "Por definir",
        tipo: "Dispositivo luminoso de señalización",
        funcion:
            "Indicar visualmente estados o condiciones del sistema mediante señales luminosas.",
        descripcion:
            "Dispositivo de señalización multinivel para comunicar estados de funcionamiento o avisos. Los colores, niveles y tensión nominal deben verificarse en la ficha técnica.",
        imagen: "",
        caracteristicas: [
            "Señalización visual",
            "Indicación de estados del sistema",
            "Configuración de niveles por confirmar",
            "Tensión y colores por confirmar"
        ]
    }


    };




    // ==========================================
    // MOSTRAR COMPONENTE
    // ==========================================
    // Componente seleccionado actualmente
    let componenteSeleccionado = null;

    function mostrarComponente(id) {

    const componente = componentes[id];

    if (!componente) {

        console.error("No se encontró el componente:", id);

        return;
    }

    // Quitar el resaltado del componente anterior
    if (componenteSeleccionado) {
        componenteSeleccionado.classList.remove("seleccionado");
    }

    // Buscar la zona del componente actual
    componenteSeleccionado = document.querySelector(
        `.componente[onclick*="mostrarComponente('${id}')"]`
    );

    // Resaltar la zona seleccionada
    if (componenteSeleccionado) {
        componenteSeleccionado.classList.add("seleccionado");
    }

    document.getElementById("nombreComponente").textContent =
        componente.nombre;

    document.getElementById("numeroParte").textContent =
        componente.parte;

    document.getElementById("marcaComponente").textContent =
        componente.marca || "-";

    document.getElementById("tipoComponente").textContent =
        componente.tipo || "-";

    document.getElementById("funcionComponente").textContent =
        componente.funcion || "-";

    document.getElementById("descripcionComponente").textContent =
        componente.descripcion;


    const lista =
        document.getElementById("caracteristicasComponente");

    lista.innerHTML = "";


    componente.caracteristicas.forEach(function(caracteristica) {

        const elemento =
            document.createElement("li");

        elemento.textContent =
            caracteristica;

        lista.appendChild(elemento);

    });


    document.getElementById("ventanaHMI").style.display =
        "block";
}



    // ==========================================
    // MOSTRAR HMI
    // ==========================================

    function mostrarHMI() {

        mostrarComponente("hmi");

    }


    // ==========================================
    // CERRAR VENTANA
    // ==========================================


    function cerrarVentana() {
        document.getElementById("ventanaHMI").style.display = "none";

        // Quitar el resaltado al cerrar la ficha
        if (componenteSeleccionado) {
            componenteSeleccionado.classList.remove("seleccionado");
            componenteSeleccionado = null;
        }
    }

    function cerrarPorFondo(event) {
        if (event.target === event.currentTarget) {
            cerrarVentana();
        }
    }

    // Cerrar con Escape: registrar el evento una sola vez
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            cerrarVentana();
        }
    });


    // ==========================================
    // CERRAR AL HACER CLIC EN EL FONDO
    // ==========================================

    const ventana = document.getElementById("ventanaHMI");

    ventana.addEventListener("click", function(event) {

        if (event.target === ventana) {

            cerrarVentana();

        }

    });


    // ==========================================
    // CERRAR CON LA TECLA ESC
    // ==========================================

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            cerrarVentana();;

        }

    });
    

console.log("PROGRAMA.JS ESTA FUNCIONANDO");

const botonPrueba =
    document.querySelector(".interruptor-limite");

console.log("BOTON INTERRUPTOR:", botonPrueba);

console.log(
    "CANTIDAD DE ZONAS INTERACTIVAS:",
    document.querySelectorAll(".componente").length
);