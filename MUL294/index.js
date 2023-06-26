function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}
cambiarTextoBoton();

function findAndAttachClickEvent() {
    const link = document.querySelector('.info-card__action-item');

    link.addEventListener('click', () => {
        const app = document.querySelector('#root');
        app.querySelector('button').click();
    });
}

function App() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    React.useEffect(() => {
        findAndAttachClickEvent();
    }, []);

    return (
        <div>
            <button onClick={openModal}>Abrir Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>Título del Modal</h2>
                <p>Contenido del modal...</p>
                <button onClick={closeModal}>Cerrar Modal</button>
            </Modal>
        </div>
    );
}

const targetDivDesktop = document.querySelector('#main-content');
ReactDOM.render(<App />, targetDivDesktop);