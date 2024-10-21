import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Najlepsze polskie blogi podróżnicze. TOP 10.</title>
        <meta
          name="description"
          content="Poznaj najlepsze polskie blogi podróżnicze - TOP 10 według naszego oryginalnego rankingu. Zobacz kogo warto śledzić aby poznać najciekawsze trendy i historie."
        />
        <meta
          property="og:title"
          content="Najlepsze polskie blogi podróżnicze. TOP 10."
        />
        <meta
          property="og:description"
          content="Poznaj najlepsze polskie blogi podróżnicze - TOP 10 według naszego oryginalnego rankingu. Zobacz kogo warto śledzić aby poznać najciekawsze trendy i historie."
        />
      </Helmet>
      <header className="home-header1">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding1">
            <span className="home-text10">Najlepsze blogi podróżnicze</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav1"
            ></nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text11">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image10" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav2"
            >
              <div className="home-top">
                <div className="home-branding2">
                  <span className="home-text12">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text13">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <div className="home-hero">
        <div className="home-header2">
          <h1 className="home-text14">
            Zobacz listę najpopularniejszych polskich blogów podróżniczych 2025.
            TOP10 blogów
          </h1>
          <img alt="image" src="/mouse.svg" className="home-image11" />
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/computer.svg" className="home-image12" />
        </div>
      </div>
      <div className="home-who">
        <div className="home-header3">
          <div className="home-heading1">
            <h2 className="home-text15">
              Najlepsze blogi podróżnicze w Polsce. TOP 10
            </h2>
            <span className="home-text16">
              <span className="home-text17">
                Jakie są najlepsze polskie blogi podróżnicze? Jeśli szukasz
                inspiracji, sprawdź naszą listę TOP 10, na której znajdziesz
                wyjątkowe blogi, pełne praktycznych wskazówek, pięknych zdjęć i
                relacji z najdalszych zakątków świata. Dowiedz się, które z nich
                warto śledzić, aby czerpać inspiracje do kolejnych wypraw!
              </span>
              <br className="home-text18"></br>
            </span>
            <h1>
              1. Gdzie Warto Jechać - blog dla miłośników egzotycznych przygód
            </h1>
            <span>
              Gdzie Warto Jechać to jeden z najlepszych polskich blogów
              podróżniczych, który skupia się na relacjach z egzotycznych miejsc
              na całym świecie. Autorzy bloga, podróżujący po różnych
              kontynentach, regularnie dzielą się relacjami z wypraw do
              odległych krajów, takich jak Birma, Indonezja czy Nowa Zelandia.
              Znajdziesz tu także praktyczne porady, które ułatwią ci
              organizację podobnych wyjazdów – od wskazówek dotyczących
              szczepień po listy rzeczy, które warto zabrać na wyprawę w
              tropiki.Blog wyróżnia się pięknymi fotografiami, które doskonale
              oddają klimat miejsc, w które docierają autorzy. To świetna
              inspiracja zarówno dla tych, którzy planują dalekie, egzotyczne
              podróże, jak i dla tych, którzy uwielbiają podróże „palcem po
              mapie”.
            </span>
            <h1>2. BusemPrzezŚwiat - blog dla fanów podróży vanem</h1>
            <span>
              Busem Przez Świat to prawdziwa gratka dla miłośników podróży vanem
              i życia w drodze. Blog prowadzony jest przez parę, która w swoim
              kamperze przemierzyła już wszystkie kontynenty. Co więcej, dzielą
              się oni szczegółowymi informacjami o tym, jak samodzielnie
              przerobić busa na kampera, jak planować długoterminowe wyprawy
              oraz jakie miejsca warto odwiedzić, podróżując właśnie tym
              sposobem.Blog zawiera mnóstwo porad na temat życia w kamperze – od
              praktycznych trików, jak radzić sobie z ograniczoną przestrzenią,
              po opisy najpiękniejszych tras i miejsc kempingowych w Europie i
              poza nią. Regularnie pojawiają się także materiały wideo, które
              przyciągają uwagę osób chcących spróbować tego stylu podróżowania.
            </span>
            <h1>3. Podróżniccy - blog o podróżach i reportażach</h1>
            <span>
              Podróżniccy to nie tylko blog podróżniczy, ale również przestrzeń
              dla wyjątkowych reportaży z różnych zakątków świata. Autorzy,
              specjalizujący się w dłuższych, refleksyjnych tekstach, dzielą się
              swoimi doświadczeniami z podróży po Polsce i świecie, jednocześnie
              zwracając uwagę na aspekty kulturowe, społeczne i ekologiczne. Ten
              blog przyciąga szczególnie tych, którzy lubią wnikliwe, dłuższe
              teksty, pełne detali i emocji. Relacje z takich miejsc jak
              Kambodża, Iran czy Peru pokazują nie tylko turystyczne atrakcje,
              ale i codzienne życie mieszkańców, co czyni go jednym z
              najbardziej wartościowych źródeł dla tych, którzy szukają
              głębszego spojrzenia na podróże.
            </span>
            <h1>
              4. Miejsce Za Miejscem - blog dla tych, którzy uwielbiają polskie
              krajobrazy
            </h1>
            <span>
              Jeśli interesują cię podróże po Polsce, Miejsce Za Miejscem będzie
              idealnym miejscem na rozpoczęcie poszukiwań inspiracji. Autorzy
              skupiają się na eksplorowaniu polskich krajobrazów, szlaków
              turystycznych i mniej znanych zakątków naszego kraju. Zawiera on
              liczne przewodniki, które pomogą ci zaplanować wyjazd nad morze, w
              góry czy na Mazury.Blog oferuje również bogaty zasób materiałów na
              temat lokalnej gastronomii, regionalnych tradycji oraz wskazówek
              dotyczących aktywności na świeżym powietrzu, jak np. trekking czy
              spływy kajakowe. To doskonałe źródło wiedzy dla każdego, kto chce
              odkrywać Polskę na nowo.
            </span>
            <h1>5. Życie W Podróży - blog o podróżowaniu z dziećmi</h1>
            <span>
              Podróżowanie z dziećmi może być wyzwaniem, ale blog Życie W
              Podróży pokazuje, że jest to nie tylko możliwe, ale także
              niezwykle satysfakcjonujące. Autorzy bloga podróżują ze swoimi
              dziećmi po całym świecie, dzieląc się praktycznymi poradami, jak
              zaplanować rodzinny wyjazd, jakie miejsca są przyjazne rodzinom z
              małymi dziećmi oraz jakie atrakcje warto uwzględnić w planie
              podróży. Blog zawiera również wiele wskazówek dotyczących
              pakowania, przygotowań do podróży i radzenia sobie w sytuacjach
              awaryjnych, takich jak choroby podczas wyjazdu. Dla rodzin
              planujących dłuższe wyprawy, Życie W Podróży to prawdziwa kopalnia
              wiedzy.
            </span>
            <h2>
              6. Anka Od Podróży - blog pełen inspiracji na krótkie wypady
            </h2>
            <span>
              Anka Od Podróży specjalizuje się w relacjach z krótszych,
              kilkudniowych wypadów, które można zrealizować bez długich
              przygotowań. To idealny blog dla tych, którzy chcą szybko
              zaplanować weekendową podróż i szukają inspiracji na wycieczki po
              Europie, a także w Polsce. Na blogu znajdziesz również porady
              dotyczące budżetowego podróżowania oraz przemyślane wskazówki, jak
              zwiedzać popularne miejsca w sposób mniej oczywisty, unikając
              tłumów turystów. Anka dzieli się swoimi doświadczeniami z podróży
              do takich miast jak Paryż, Lizbona czy Budapeszt, pokazując, jak
              maksymalnie wykorzystać krótki czas na wyjeździe.
            </span>
            <h2>7. Wszędobylscy - blog pełen porad o podróżach po Europie</h2>
            <span>
              Wszędobylscy to blog podróżniczy, który koncentruje się na
              podróżach po Europie, ze szczególnym uwzględnieniem mało znanych
              miejsc i tras turystycznych. Autorzy zwracają uwagę na to, że
              Europa kryje wiele ukrytych skarbów, o których nie wspominają
              popularne przewodniki. Ich relacje z podróży do takich miejsc jak
              Słowenia, Czarnogóra czy Estonia zainspirują cię do odkrywania
              mniej uczęszczanych tras. Wszędobylscy publikują także praktyczne
              przewodniki po głównych europejskich stolicach, skupiając się na
              nietypowych atrakcjach i lokalnych zwyczajach. Dzięki ich wpisom,
              twoje europejskie podróże staną się pełniejsze i bardziej
              świadome.
            </span>
            <h2>8. PolskieSzlaki - blog dla miłośników pieszych wędrówek</h2>
            <span>
              PolskieSzlaki to jeden z najlepszych polskich blogów podróżniczych
              poświęconych tematyce pieszych wędrówek. Autorzy bloga skupiają
              się na opisach tras trekkingowych w Polsce i za granicą, w
              szczególności w górach. Na blogu znajdziesz wiele przewodników po
              szlakach w Tatrach, Bieszczadach, a także mniej popularnych
              pasmach, takich jak Góry Sowie czy Pieniny.Oprócz szczegółowych
              opisów szlaków, blog zawiera także praktyczne porady dotyczące
              sprzętu turystycznego, ubrań trekkingowych oraz bezpieczeństwa
              podczas wypraw górskich. Dla miłośników aktywnego wypoczynku
              PolskieSzlaki to cenne źródło informacji.
            </span>
            <h2>9. Tasteaway - blog dla miłośników kulinarnych podróży</h2>
            <span>
              Tasteaway to blog, który łączy pasję do podróżowania z miłością do
              jedzenia. Autorzy bloga przemierzają świat, testując lokalne
              kuchnie i dzieląc się swoimi kulinarnymi odkryciami z
              czytelnikami. Znajdziesz tu relacje z podróży do takich krajów jak
              Włochy, Hiszpania, Tajlandia czy Meksyk, które obfitują w opisy
              tradycyjnych potraw i lokalnych restauracji.Tasteaway to nie tylko
              opowieści o jedzeniu, ale także o kulturze i ludziach, którzy
              tworzą lokalne kulinarne tradycje. Dzięki temu blogowi, podróże
              stają się jeszcze bardziej smakowite i pełne inspiracji
              kulinarnych.
            </span>
            <h2>10. Zależna W Podróży  - blog o slow travel</h2>
            <span>
              Zależna W Podróży to blog poświęcony idei slow travel, czyli
              powolnemu, świadomemu podróżowaniu, skupiającemu się na lokalnych
              doświadczeniach i głębszym poznawaniu odwiedzanych miejsc. Autorka
              bloga opowiada o swoich podróżach po mniej znanych regionach
              Europy, takich jak Toskania, Prowansja czy Bałkany, zachęcając do
              dłuższego pobytu i pełniejszego doświadczenia odwiedzanych
              miejsc.Zależna W Podróży to doskonałe miejsce dla tych, którzy
              chcą uciec od szybkiego tempa życia i cieszyć się podróżami w
              zgodzie z naturą i lokalnymi społecznościami.
            </span>
            <span>Text</span>
          </div>
        </div>
        <div className="home-preview">
          <div className="home-image13">
            <img alt="image" src="/preview.svg" className="home-image14" />
          </div>
          <div className="home-video"></div>
        </div>
      </div>
      <div className="home-information">
        <div className="home-purpose">
          <span className="home-description1">
            Na naszej stronie możesz przeczytać o najciekawszych blogach w
            Polsce i nie tylko. Sprawdź w które miejsca w sieci warto zaglądać
            aby znaleźć niezwykłe inspiracje do poróży, wyjazdów i eskapad.
          </span>
        </div>
        <div className="home-industries">
          <div className="home-list">
            <div data-role="accordion-container" className="home-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title1">Edukacja</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text39">Perspiciatis</span>
                <span className="home-text40">Nemo voluptatem</span>
                <span className="home-text41">Dolore magnam</span>
                <span className="home-text42">Tempora</span>
                <span className="home-text43">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item1">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title2">Wiedza</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text44">Perspiciatis</span>
                <span className="home-text45">Nemo voluptatem</span>
                <span className="home-text46">Dolore magnam</span>
                <span className="home-text47">Tempora</span>
                <span className="home-text48">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item2">
              <div
                data-role="accordion-trigger"
                className="home-trigger3 accordion-trigger accordion-trigger-active"
              >
                <span className="home-title3">Wyzwania</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item3">
              <div
                data-role="accordion-trigger"
                className="home-trigger4 accordion-trigger"
              >
                <span className="home-title4">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text49">Perspiciatis</span>
                <span className="home-text50">Nemo voluptatem</span>
                <span className="home-text51">Dolore magnam</span>
                <span className="home-text52">Tempora</span>
                <span className="home-text53">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item4">
              <div
                data-role="accordion-trigger"
                className="home-trigger5 accordion-trigger"
              >
                <span className="home-title5">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text54">Perspiciatis</span>
                <span className="home-text55">Nemo voluptatem</span>
                <span className="home-text56">Dolore magnam</span>
                <span className="home-text57">Tempora</span>
                <span className="home-text58">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item5">
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text59">Perspiciatis</span>
                <span className="home-text60">Nemo voluptatem</span>
                <span className="home-text61">Dolore magnam</span>
                <span className="home-text62">Tempora</span>
                <span className="home-text63">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item6">
              <div
                data-role="accordion-trigger"
                className="home-trigger6 accordion-trigger"
              ></div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text64">Perspiciatis</span>
                <span className="home-text65">Nemo voluptatem</span>
                <span className="home-text66">Dolore magnam</span>
                <span className="home-text67">Tempora</span>
                <span className="home-text68">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item7">
              <div
                data-role="accordion-trigger"
                className="home-trigger7 accordion-trigger"
              ></div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text69">Perspiciatis</span>
                <span className="home-text70">Nemo voluptatem</span>
                <span className="home-text71">Dolore magnam</span>
                <span className="home-text72">Tempora</span>
                <span className="home-text73">Reprehenderit qui</span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container3">
              <Script
                html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1">
        <div className="home-case-studies">
          <div className="home-caption1">
            <span className="home-text74">Case Studies</span>
            <div className="home-date-range">
              <span className="home-text75">2022</span>
              <span className="home-text76">——</span>
              <span className="home-text77">2019</span>
            </div>
          </div>
          <div className="home-gallery1">
            <div className="home-row1">
              <div className="home-case1">
                <img
                  alt="image"
                  src="/study%20%231-1300w.png"
                  className="home-image15"
                />
                <div className="home-heading3"></div>
              </div>
              <div className="home-case2">
                <img
                  alt="image"
                  src="/study%20%232-1400w.png"
                  className="home-image16"
                />
                <div className="home-heading4"></div>
              </div>
            </div>
            <div className="home-row2">
              <div className="home-case3"></div>
            </div>
            <div className="home-row3">
              <div className="home-case4"></div>
              <div className="home-case5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content2">
          <div className="home-left">
            <h2 className="home-text78">
              Napisz do nas i zobacz co możemy dla Ciebie przygotować
            </h2>
            <button className="home-button button">
              <span className="home-text79">zadzwoń</span>
            </button>
          </div>
          <img alt="image" src="/message.svg" className="home-image17" />
        </div>
      </div>
      <div className="home-section2">
        <div className="home-about-us">
          <div className="home-header4">
            <span className="home-caption2">O nas</span>
            <h2 className="home-description2">
              Rozwijamy się szybciej niż sądzi konkurencja
            </h2>
          </div>
          <div className="home-gallery2">
            <img
              alt="image"
              src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
              className="home-image18"
            />
            <img
              alt="image"
              src="/austin-distel-800w.png"
              className="home-image19"
            />
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-socials">
          <div className="home-row4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row5">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="home-container4">
          <h1>Copyright 2024</h1>
        </div>
      </footer>
    </div>
  )
}

export default Home
