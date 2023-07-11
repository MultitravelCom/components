import BannerAyuda from "./components/BannerAyuda";
import BannerTop from "./components/BannerTop";
import ContainerContactos from "./components/ContainerContactos";

function App() {
  return (
    <>
      <div className="main__container__contactos">
        <BannerTop />
        <div className="main__container__contactos__body container">
          <div className="main__container__contactos__BannerAyuda">
            <BannerAyuda />
          </div>
          <div className="main__container__contactos__BannerAyuda__title">
            <div className="main__container__contactos__BannerAyuda__title__h2">
              <h2>Elegí el canal más conveniente para vos</h2>
            </div>
            <div className="main__container__contactos__BannerAyuda">
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/telefono.svg"
                }
                title={"Ventas"}
                number={"0800 3480003"}
                p_text={"Lunes a viernes de 10 a 20 hs Sábados de 10 a 15 hs"}
                span_text={
                  "Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra."
                }
                class_color={"class_color_blue"}
                class_color_background={"class_color_background_blue"}
                text_btn={"Llamar"}
                link="0800 3480003"
                callToPhone={true}
                contactType="whatsapp"
                borderRadius={"border-container-left"}
              />
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/wsp.svg"
                }
                title={"Consultas por venta"}
                number={"11 4979 1877"}
                p_text={
                  "De lunes a viernes de 20 a 10hs Sábados de 15hs a 10hs."
                }
                span_text={
                  "Dejanos tu consulta y te contactaremos en nuestro horario de atención."
                }
                class_color={"class_color_green"}
                class_color_background={"class_color_background_green"}
                text_btn={"Enviar mensaje"}
                link="1149791877"
                callToPhone={false}
                contactType="whatsapp"
                borderRadius={"border-container-center"}
              />
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/Mail.svg"
                }
                title={"Consultas"}
                number={"xxxx@xxxxxxxxx.xxxx"}
                p_text={
                  "Entre em contato com nossos especialistas 24 horas por dia"
                }
                span_text={
                  "Envie-nos sua dúvida por e-mail e responderemos o mais breve possível."
                }
                class_color={"class_color_black"}
                class_color_background={"class_color_background_black"}
                text_btn={"Enviar email"}
                link="info@multitravel.com"
                callToPhone={false}
                contactType="email"
                borderRadius={"border-container-right"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;