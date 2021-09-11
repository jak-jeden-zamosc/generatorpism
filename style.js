var nag = document.getElementById("add1");
var pis1 = document.getElementById("add2");
var pis2 = document.getElementById("add3");
var select = document.getElementById("select");

window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("dopobrania");
            console.log(invoice);
            console.log(window);
            var opt = {
                filename: 'pismo.pdf',
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { 
                    dpi: 1200,
                    scale: 4,
                    letterRendering: true,
                    useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
function add1() {
    var element = document.getElementById("add1");
    nag++;
    element.innerHTML = nag;
    var napis = document.getElementById("select-adress")
    switch (nag) {
        case 1:
            napis.innerHTML = "Ministerstwo Edukacji i Nauki";
            break;
        case 2:
            napis.innerHTML = "Ministerstwo Zdrowia";
            break;
        case 3:
            napis.innerHTML = "Kancelaria Prezesa Rady Ministrów";
            break;
        case 4:
            napis.innerHTML = "Kuratorium Oświaty.";
            break;   
    }
}
function remove1() {
    var element = document.getElementById("add1");
    nag--;
    element.innerHTML = nag;
    var napis = document.getElementById("select-adress")
    switch (nag) {
        case 1:
            napis.innerHTML = "Ministerstwo Edukacji i Nauki";
            break;
        case 2:
            napis.innerHTML = "Ministerstwo Zdrowia";
            break;
        case 3:
            napis.innerHTML = "Kancelaria Prezesa Rady Ministrów";
            break;
        case 4:
            napis.innerHTML = "Kuratorium Oświaty.";
            break;   
    }
}
function add2() {
    var element = document.getElementById("add2");
    pis1++;
    element.innerHTML = pis1;
    var napis = document.getElementById("select-pismo1")
    switch (pis1) {
        case 1:
            napis.innerHTML = "Wnoszę o wskazanie mi przez Państwa urząd gdzie jako osoba zainteresowana mogę zakupić maseczki z atestem przeciwwirusowym?  Wnosze także o wskazanie mi gramatury i pozastałych parametrów niezbędnych do tego aby maseczka była skuteczna przeciw Covid-19? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 2:
            napis.innerHTML = "Czy Państwa urząd posiada, bądź ma dostęp, albo też zlecił badania jaki wpływ na zdrowie psychiczne i rozwój ma noszenie maseczek zakrywających nos i usta u dzieci w przedziale wiekowym 6-12 lat. Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 3:
            napis.innerHTML = "Czy Państwa urząd posiada, bądź ma dostęp, albo też zlecił badania jaki wpływ na zdrowie psychiczne i rozwój ma noszenie maseczek zakrywających nos i usta u młodzieży szkolnej w przedziale wiekowym 12-18 lat. Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 4:
            napis.innerHTML = "Czy Państwa urząd dysponuje badaniami, lub wie jaki inny urząd posiada badania dotyczące bezpieczeństwa i zasadności noszenia maseczek zakrywających usta i nos w szkołach ponadpodstawowych? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 5:
            napis.innerHTML = "Czy Państwa urząd dysponuje badaniami, lub wie jaki inny urząd posiada badania dotyczące bezpieczeństwa i zasadności noszenia maseczek zakrywających usta i nos w szkołach podstawowych? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 6:
            napis.innerHTML = "Według jakich wytycznych i rozporządzeń następuje dezynfekcja sprzętu elektronicznego w pracowniach informatycznych i językowych w szkołach i uczelniach w tym słuchawek na uszy, klawiatór, laptopów, tablic interaktywnych i pozostałych urządzeń?";
            break;
        case 7:
            napis.innerHTML = "Czy Państwa urząd posiada informacje lub przeprowadził ankety bądź zlecił badania w jaki sposób praca zdalna wpłynęła na zdrowie psychiczne pracowników administracyjnych w tym szczególnie w Państwa urzędzie?";
            break;
        case 8:
            napis.innerHTML = "Ilu pracowników administracyjnyc Podległych Państwa urzędowi bezpośrednio obsługujących interesantów zachorowało na Covid-19 od stycznia do września 2021, a ilu pracowników administracyjnych podległych Państwa urzędowi nie obsługujących bezpośrednio interesantów zachorowało na Covid-19 w tym samym okresie? ";
            break;  
        case 9:
            napis.innerHTML = "Kto w Państwa urzędzie odpowiada za dostępność pojemników na materiał zakaźny w tym na zużyte maseczki, oraz odpowiada za prawidłowość użytkowania tychże pojemników zlokalizowanych w przestrzeni publicznej?";
            break;
        case 10:
            napis.innerHTML = "Czy urzędnicy administracyjni są zobowiązani do noszenia maseczek w innych instytucjach państwowych i przestrzeni publicznej poza swoim miejscem pracy? Czy jeżeli Państwa urząd otrzyma informację lub dowód o lekceważeniu przez waszego podwładnego, bądź pracownika kwestii noszenia maseczki w przestrzeni publicznej to czy stosujecie Państwo jakąś oficjalną naganę wobec takich osób? Ile takich zgłoszeń otrzymaliście Państwo od początku stycznia 2021 r.?";
            break;
        case 11:
            napis.innerHTML = "Wnosze o udzielenie mi odpowiedzi w jaki skuteczny oficjalny sposób mogę do Państwa wnieść badania świadczące o nieskuteczności noszenia maseczek?";
            break;
        case 12:
            napis.innerHTML = "Wnoszę o wskazanie mi w jaki skuteczny oficjalny sposób mogę do Państwa urzędu wnieść informacje o prawdopodobnym niebezpieczeństwie stosowania u ludzi preparatów genetycznych na Covid-19?";
            break;
        case 13:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy państwa urząd posiada lub powziął informację z właściwych instytucji państwowych o możliwym lub prawdopodonym ryzyku powikłań poszczepiennych po pierwszej dawce oraz po dwóch dawkach zalecanych preparatów Covidowych?";
            break;
        case 14:
            napis.innerHTML = "Wnosze o udzielenie mi informacji w oparciu o jakie analizy, dane bądź informacje zostały wdrożone ograniczenia na lekcjach wychowania fizycznego dotyczących gier zespołowych w szkołach podstawowych?";
            break;
        case 15:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące okulistyki  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 16:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące zdrowia psychicznego  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 17:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące wad postawy  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 18:
            napis.innerHTML = "Wnoszę o informację w opraciu o jakie przepisy prawne, a szczególnie konstytucyjne oraz na podstawie jakich analiz wprowadzono w związku z Covid-19 naukę zdalną w szkołach?";
            break;
        case 19:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji do kogo bądź jakiej instytucji mam zwrócić się o zwrot kosztów w przypadku odmowy udzielenia mi świadczenia zdrowotnego z powodu braku szczepienia, bądź testu na Covid-19?";
            break;
        case 20:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy za odmowę świadczenia zdrowotnego z tytułu braku szczepienia lub testu na Covid-19 odpowiada prawnie i finansowo dana placówka medyczna która odmówiła udzielenia świadczenia, czy organ nadzorujący? Jeżeli organ nadzorujący to wnoszę o wskazanie jaki?";
            break;
        case 21:
            napis.innerHTML = "Wnoszę o udzielenie mi odpowiedzi na jekiej podstawie przekazywane są informacje i materiały reklamowe dotyczące produktów leczniczych i medycznych bezpośrednio do dzieci co jest niezgodne z ustawą o prawie farmaceutycznym. Jakie przepisy uchylają w tej kwestii ustawę o prawie farmaceutycznym?";
            break;
        case 22:
            napis.innerHTML = "Wnoszę o podanie mi na podstawie jakiej obowiązującej ustawy dokładnie z artykułu i paragrafu wporowadzone zostały nakazy i zakazy związane z Covid-19 w okresie od stycznia do września 2021?";
            break;
        case 23:
            napis.innerHTML = "Wnosze o informację jaki włąściwy urząd odpowiedzialny jest za sprawdzenie lub analizę w jaki sposób chociażby procentowy wprowadzone nakazy i zakazy związane z Covid-19 wpłynęły na rozprzestrzenianie się wirusa?";
            break;
        case 24:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji według jakich kryteriów i informacji właściwe urzędy w tym Państwa Urząd stweierdzają w polsce liczbę lub chociażby szacunki dotyczące bezobjawowej postaci choroby Covid-19.";
            break;
        case 25:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji według jakich kryteriów i informacji właściwe urzędy w tym Państwa Urząd stweierdzają w polsce liczbę lub chociażby szacunki dotyczące bezobjawowej postaci choroby Covid-19 u dzieci. W jaki sposób w oparciu o jakie informacje i kryteria określana jest oficjalnie transmisja i zakaźność u dzieci w tym bezobjawowa?";
            break;
        case 26:
            napis.innerHTML = "Wnoszę o informację jaka była zachorowalność na Covid-19 miesiąc do miesiąca od stycznia 2020 do września 2021 u dzieci w wieku 12-15 lat w postaci objawowej oraz także w postaci bezobjawowej?";
            break;
    }
}
function remove2() {
    var element = document.getElementById("add2");
    pis1--;
    element.innerHTML = pis1;
    var napis = document.getElementById("select-pismo1")
    switch (pis1) {
        case 1:
            napis.innerHTML = "Wnoszę o wskazanie mi przez Państwa urząd gdzie jako osoba zainteresowana mogę zakupić maseczki z atestem przeciwwirusowym?  Wnosze także o wskazanie mi gramatury i pozastałych parametrów niezbędnych do tego aby maseczka była skuteczna przeciw Covid-19? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 2:
            napis.innerHTML = "Czy Państwa urząd posiada, bądź ma dostęp, albo też zlecił badania jaki wpływ na zdrowie psychiczne i rozwój ma noszenie maseczek zakrywających nos i usta u dzieci w przedziale wiekowym 6-12 lat. Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 3:
            napis.innerHTML = "Czy Państwa urząd posiada, bądź ma dostęp, albo też zlecił badania jaki wpływ na zdrowie psychiczne i rozwój ma noszenie maseczek zakrywających nos i usta u młodzieży szkolnej w przedziale wiekowym 12-18 lat. Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 4:
            napis.innerHTML = "Czy Państwa urząd dysponuje badaniami, lub wie jaki inny urząd posiada badania dotyczące bezpieczeństwa i zasadności noszenia maseczek zakrywających usta i nos w szkołach ponadpodstawowych? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 5:
            napis.innerHTML = "Czy Państwa urząd dysponuje badaniami, lub wie jaki inny urząd posiada badania dotyczące bezpieczeństwa i zasadności noszenia maseczek zakrywających usta i nos w szkołach podstawowych? Na jakiej podstawie wymaga się noszenia maseczek w stosunku do Covid-19 skoro choroba ta nie jest ujęta  wykazie chorób zakaźnych?";
            break;
        case 6:
            napis.innerHTML = "Według jakich wytycznych i rozporządzeń następuje dezynfekcja sprzętu elektronicznego w pracowniach informatycznych i językowych w szkołach i uczelniach w tym słuchawek na uszy, klawiatór, laptopów, tablic interaktywnych i pozostałych urządzeń?";
            break;
        case 7:
            napis.innerHTML = "Czy Państwa urząd posiada informacje lub przeprowadził ankety bądź zlecił badania w jaki sposób praca zdalna wpłynęła na zdrowie psychiczne pracowników administracyjnych w tym szczególnie w Państwa urzędzie?";
            break;
        case 8:
            napis.innerHTML = "Ilu pracowników administracyjnyc Podległych Państwa urzędowi bezpośrednio obsługujących interesantów zachorowało na Covid-19 od stycznia do września 2021, a ilu pracowników administracyjnych podległych Państwa urzędowi nie obsługujących bezpośrednio interesantów zachorowało na Covid-19 w tym samym okresie? ";
            break;  
        case 9:
            napis.innerHTML = "Kto w Państwa urzędzie odpowiada za dostępność pojemników na materiał zakaźny w tym na zużyte maseczki, oraz odpowiada za prawidłowość użytkowania tychże pojemników zlokalizowanych w przestrzeni publicznej?";
            break;
        case 10:
            napis.innerHTML = "Czy urzędnicy administracyjni są zobowiązani do noszenia maseczek w innych instytucjach państwowych i przestrzeni publicznej poza swoim miejscem pracy? Czy jeżeli Państwa urząd otrzyma informację lub dowód o lekceważeniu przez waszego podwładnego, bądź pracownika kwestii noszenia maseczki w przestrzeni publicznej to czy stosujecie Państwo jakąś oficjalną naganę wobec takich osób? Ile takich zgłoszeń otrzymaliście Państwo od początku stycznia 2021 r.?";
            break;
        case 11:
            napis.innerHTML = "Wnosze o udzielenie mi odpowiedzi w jaki skuteczny oficjalny sposób mogę do Państwa wnieść badania świadczące o nieskuteczności noszenia maseczek?";
            break;
        case 12:
            napis.innerHTML = "Wnoszę o wskazanie mi w jaki skuteczny oficjalny sposób mogę do Państwa urzędu wnieść informacje o prawdopodobnym niebezpieczeństwie stosowania u ludzi preparatów genetycznych na Covid-19?";
            break;
        case 13:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy państwa urząd posiada lub powziął informację z właściwych instytucji państwowych o możliwym lub prawdopodonym ryzyku powikłań poszczepiennych po pierwszej dawce oraz po dwóch dawkach zalecanych preparatów Covidowych?";
            break;
        case 14:
            napis.innerHTML = "Wnosze o udzielenie mi informacji w oparciu o jakie analizy, dane bądź informacje zostały wdrożone ograniczenia na lekcjach wychowania fizycznego dotyczących gier zespołowych w szkołach podstawowych?";
            break;
        case 15:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące okulistyki  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 16:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące zdrowia psychicznego  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 17:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji jakie programy zdrowotne dotyczące wad postawy  dotyczące dzieci po wielomiesięcznej nauce zdalnej zostały zaplanowane lub są wdrażane w moim województwie u dzieci w klasach 0-3, a jakie u dzieci 4-8 oraz w szkołach ponadpodstawowych?";
            break;
        case 18:
            napis.innerHTML = "Wnoszę o informację w opraciu o jakie przepisy prawne, a szczególnie konstytucyjne oraz na podstawie jakich analiz wprowadzono w związku z Covid-19 naukę zdalną w szkołach?";
            break;
        case 19:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji do kogo bądź jakiej instytucji mam zwrócić się o zwrot kosztów w przypadku odmowy udzielenia mi świadczenia zdrowotnego z powodu braku szczepienia, bądź testu na Covid-19?";
            break;
        case 20:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy za odmowę świadczenia zdrowotnego z tytułu braku szczepienia lub testu na Covid-19 odpowiada prawnie i finansowo dana placówka medyczna która odmówiła udzielenia świadczenia, czy organ nadzorujący? Jeżeli organ nadzorujący to wnoszę o wskazanie jaki?";
            break;
        case 21:
            napis.innerHTML = "Wnoszę o udzielenie mi odpowiedzi na jekiej podstawie przekazywane są informacje i materiały reklamowe dotyczące produktów leczniczych i medycznych bezpośrednio do dzieci co jest niezgodne z ustawą o prawie farmaceutycznym. Jakie przepisy uchylają w tej kwestii ustawę o prawie farmaceutycznym?";
            break;
        case 22:
            napis.innerHTML = "Wnoszę o podanie mi na podstawie jakiej obowiązującej ustawy dokładnie z artykułu i paragrafu wporowadzone zostały nakazy i zakazy związane z Covid-19 w okresie od stycznia do września 2021?";
            break;
        case 23:
            napis.innerHTML = "Wnosze o informację jaki włąściwy urząd odpowiedzialny jest za sprawdzenie lub analizę w jaki sposób chociażby procentowy wprowadzone nakazy i zakazy związane z Covid-19 wpłynęły na rozprzestrzenianie się wirusa?";
            break;
        case 24:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji według jakich kryteriów i informacji właściwe urzędy w tym Państwa Urząd stweierdzają w polsce liczbę lub chociażby szacunki dotyczące bezobjawowej postaci choroby Covid-19.";
            break;
        case 25:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji według jakich kryteriów i informacji właściwe urzędy w tym Państwa Urząd stweierdzają w polsce liczbę lub chociażby szacunki dotyczące bezobjawowej postaci choroby Covid-19 u dzieci. W jaki sposób w oparciu o jakie informacje i kryteria określana jest oficjalnie transmisja i zakaźność u dzieci w tym bezobjawowa?";
            break;
        case 26:
            napis.innerHTML = "Wnoszę o informację jaka była zachorowalność na Covid-19 miesiąc do miesiąca od stycznia 2020 do września 2021 u dzieci w wieku 12-15 lat w postaci objawowej oraz także w postaci bezobjawowej?";
            break;
    }
}
function add3() {
    var element = document.getElementById("add3");
    pis2++;
    element.innerHTML = pis2;
    var napis = document.getElementById("napis")
    switch (pis2) {
        case 1:
            napis.innerHTML = "Jakie wymagane prawem dokumenty są konieczne, aby zdrowemu dziecku u którego ani życie ani zdrowie nie jest zagrożone można było podać w obecnym stanie prawnym i faktycznym jakiekolwiek preparaty szczepionkowe będące w fazie eksperymentów medycznych, bądź nie posiadające wymaganych badań?";
            break;
        case 2:
            napis.innerHTML = "Wnoszę o udostępnienie mi raportu skutków zdalnego nauczania i izolacji społecznej uczniów za rok szkolny 2020/2021, jeżeli nie jesteście państwo w posiadaniu takiego raportu to wnoszę o informację jaki właściwy urząd taki raport z pewnością posiada, oraz wnoszę o przekazanie niniejszego pytania do tego właściwego urzędu.";
            break;
        case 3:
            napis.innerHTML = "Wnoszę o przedstawienie mi stanowiska państwa urzędu w sprawie przebywania dzieci klas 1-3 przez wiele godzin w bliskiej odległości od urządzeń elektronicznych w tym monitorów, komputerów dotyczącego zagrożeń i wpływu promieniowania elektromagnetycznego na rozwój psycho-fizyczny małych dzieci?";
            break;
        case 4:
            napis.innerHTML = "Wnoszę o przedstawienie mi stanowiska państwa urzędu w sprawie przebywania dzieci klas 4-8 przez wiele godzin w bliskiej odległości od urządzeń elektronicznych w tym monitorów, komputerów dotyczącego zagrożeń i wpływu promieniowania elektromagnetycznego na rozwój psycho-fizyczny małych dzieci?";
            break;
        case 5:
            napis.innerHTML = "Do którego konkretnie Urzędu składa się wniosek o wydanie zezwolenia na przeprowadzenie badań eksperymentalnych szczepionek na dzieciach poniżej 12 roku życia i pomiędzy 12 i 18 rokiem życia?";
            break;
        case 6:
            napis.innerHTML = "Wnoszę o informację jakie wymagane prawem urzędowe zgody w tym sądowe i w jakiej formie muszą zostać wydane, aby zdrowym dzieciom do 12 i pomiędzy 12 i 18 rokiem życia w polsce w ogóle mogły być podane w jakiejkolwiek dawce eksperymentalne preparaty szczepionkowe, a nawet placebo w celu przeprowadzenia jakichkolwiek badań w tym bezpieczeństwa i skuteczności?";
            break;
        case 7:
            napis.innerHTML = "Jaki urząd przyjmuje i analizuje, bądź jest obowiązany przyjmować i analizować wyniki badań preparatów na dzieciach do 12 roku życia i pomiędzy 12 i 18 rokiem życia?";
            break;
        case 8:
            napis.innerHTML = "Niedopuszczalne jest według mnie traktowanie jako szczepionek proponowanych obecnie zupełnie nowych eksperymentalnych genetycznych preparatów na Covid-19, niby to szczepionkowych bo ktoś tak gdzieś powiedział, ale nie spełniających żadnych dotychczasowych naukowych i choćby nawet historycznych definicji szczepionek. W związku z tym wnoszę o oficjalne stanowisko Państwa urzędu, czy zalecacie te preparaty jako bezpieczne szczepionki do stosowania u ludzi i na jakiej podstawie faktycznej i logicznej opieracie swoje stanowisko?";
            break;  
        case 9:
            napis.innerHTML = "W obecnej sytuacji niezasadne jest moim zdaniem dążenie do szczepień dzieci na Covid-19 szczególnie w świetle prawdziwego stanu rzeczywistego, który jest odmienny od medialnie i urzędowo kreowanego niby to stanu wysoce niszczycielskiej i śmiertelnej epidemi zagrażjącej całej ludzkości. PRZECIEŻ TO NIE PRAWDA.  Na to właśnie wskazują niezależni  lekarze, naukowcy  i prawnicy, to zauważy nawet średnio inteligentny człowiek taki jak ja. W związku z powyższym wnoszę o oficjalne stanowisko Państwa urzędu w oparciu o jakie fakty i jaką rzeczywistość wasz urząd nie neguje bezsensownych działań i zaleceń dotyczących szczepienia dzieci i młodzieży w obliczu bliskiej zeru zachorowalnośći tej grupy społecznej.";
            break;
        case 10:
            napis.innerHTML = "W związku z możliwym i bardzo wysoce prawdopodobnym niebezpieczeństwem wskazywanym przez wielu lekarzy, a także profesorów dotyczącym obecnie proponowanych szczpepionek na Covid-19 oraz według mnie nieakceptowalnym ryzykiem dla mnie i dzieci szkolnych możliwości utraty zdrowia w wyniku zaszczepienia się tymi preparatami o działaniu genetycznym i niezbadanym należycie wpływie na organizmy ludzi, ale przede wszystkim  DZIECI wnoszę o niezwłoczne wystosowanie przez Państwa urząd ostrzeżenia dla ludności o prawdopodobnym niebezpieczeństwie stosowania preparatów na Covid-19. Jeżeli uważacie Państwo, że preparaty te są być może jednak bezpieczne to wnoszę o przedstawienie mi polskich badań bezpieczeństwa, a przynajmniej w języku polskim na podstawie analizy których tak stwierdzacie. ";
            break;
        case 11:
            napis.innerHTML = " w związku z alarmowaniem nie tylko  rodziców ale WSZYSTKICH przez Polskie Stowarzyszenie Niezależnych Lekarzy i Naukowców w liście z dnia 24 czerwca 2021 r. do Dyrekcji, Grona Pedagogicznego, Rady Rodziców o bardzo prawdopodobnym i nieakceptowalnym na dzień dzisiejszy według mnie niebezpieczeństwie i ryzyku występowania na niedopuszczalnym poziomie możliwych groźnych powikłań poszczpiennych mogących wystąpić nie tylko-ale także u dzieci w wyniku zastosowania obecnie bezkrytycznie proponowanych wydaje się że eksperymentalnych preparatów do szczepień na Covid-19 wnoszę o bezzwłoczne przeprowadzenie przez Państwa urząd lub na Państwa wniosek dokładnej ankiety i badania w powiecie w którym urzęduje Państwa urząd u wszystkich zaszczepionych dotychczas na Covid-19 osób pod kątem Nieporządanych Odczynów Poszczepiennych, oraz deklarowanego stanu zdrowia przed zaszczepieniem i po zaszczepieniu.";
            break;
        case 12:
            napis.innerHTML = "W związku ze skrajnie różnymi opiniami i stanowiskami lekarzy w sprawie bezpieczeństwa szczepionek na Covid-19 i odmiennymi stanowiskami w sprawie zasadności szczepienia się lub nie szczepienia się na Covid-19 wnoszę o przedstawienie mi stanowiska Państwa urzędu w czyje słowa i opinie mamy wierzyć, czy  Lekarzy i fachowców, którzy opierając się jak się wydaje na rzetelnych danych i informacjach urzędowych ostrzegają o ryzyku i niebezpieczeństwie stoswownia obecnych szczepionek na Covid-19, za co są ku mojemu zaskoczeniu represjonowani przez Naczelną Radę Lekarską i nie tylko, a niejednokrotnie są za to zawieszani, wzywani przed Sądy lub tracą prawo wykonywania zawodu? Nie otrzymują pieniędzy z tytułu Covid-19. Zastanówcie się Państwo jaki interes poza uczciwością, prawdą i dobrem pocjentów może im przyświecać,  że gotowi są podjąć ryzyko utraty pracy i prawa wykonywania zawodu, aby przekazać społeczeństwu te ostrzegające informacje?  Czy lekarzy, którzy bezkrytycznie masowo z automatu szczepią, w razie konkretnych pytań odsyłają po informacje wszędzie indziej, bo sami nie chcą informować, odsyłają do producenta, do internetu, gdzie się tylko da, a sami nie udzielają odpowiedzi. Bez udzielania należytych informacji namawiają, a nawet straszą tych co mają wątpliwości, lecz za te działania zupełnie nic im nie grozi, a wręcz przeciwnie ich zarobki z tytułu obsługi Covid-19 bardzo znacząco wzrosły. Często także lekarze ci otrzymują różne premie i dopłaty Covidowe do swoich wynagrodzeń oraz prawdopodobnie także środki pieniężne pośrednio lub bezpośrednio od właśnie producentów szczepionek. Zastanówcie się Państwo jaki interes może przyświecać tej grupie lekarzy i telewizorowych ekspertów? Dobro nasze i naszych dzieci, czy pieniążki?  ZATEM WNOSZĘ O PAŃSTWA STANOWISKO W CZYJE SŁOWA JAKO PACJENT I OBYWATEL ORAZ CZŁOWEK ROZUMNY MAM WIERZYĆ?";
            break;
        case 13:
            napis.innerHTML = "W oficjalnym liście otwartym wzorowanym na liście belgijskich 340 lekarzy i 1340 pracowników służby zdrowia wystosowanym przez około 177 polskich lekarzy i pracowników medycznych do właściwych polskich instytucji, w którym to przecież wykształceni medycznie i jak najbardziej mający ku temu kwalifikacje lekarze z polski i zagranicy zapewne mądrzejsi i bardziej wykwalifikowani od nas zwykłych obywateli czy urzędników i polityków zwracają uwagę na nieprawidłowości i nieadekwatność działań oraz ryzyko związane z tymi podejmowanymi przez urzędników działaniami.  Dotyczy to także stosowania maseczek, ograniczeń i nowych  preparatów i to nieprzebadanych tak jak dotychczas stosowane na inne choroby szczepionki.  Zwracają oni uwagę na ryzyko stosowania preparatów genetycznych nie stosowanych wcześniej na masową skalę i nie podlegających dotychczasowym definicjom szczepionek.  O zgrozo drodzy Państwo, bo nie wiem, czy to do was DOCIERA także preparatów dopuszczonych warunkowo do masowych szczepień, ale co jest o wiele bardziej istotne będących dopiero w fazie krótkofalowych badań bezpieczeństwa, które kończą się zgodnie z informacjami producentów dopiero w październiku 2022 i 2023 r. oraz w latach późniejszych . Preparaty te są niesprawdzonymi produktami o nieznanych skutkach średnio i długo falowych i nie znanym stopniu bezpieczeństwa, a już się mówi o masowym szczepieniu dzieci nawet od 6 miesiêcy do 12  roku życia. Co się stanie jeżeli za kilka lat okaże się, że szczepionki te jednak powodują coś niedopuszczalnie negatywnego, a my już zdążyliśmy wyszczepić całe pokolenie dzieci na chorobę na którą te dzieci praktycznie nie chorują? PO CO I W CZYIM INTERESIE? I kto za to odpowie? Jak to się ma do stanowiska i opini lekarzy i telewizyjnych ekspertów,  że szczepionki na Covid-19 są bezpieczne i wszyscy musimy się szczepić mimo że badania dopiero trwają a preparaty te zostały dopuszczone warunkowo?  Wnoszę do Państwa urzędu o natychmiastowe wydanie oświadczenia o zaleceniu wstrzymania szczepień w Polsce do czasu rzetelnego wyjaśnienia sprawy tak, aby obywatel taki jak ja nie musiał podejmować decyzji o szczepieniu w oparciu o tak skrajne opinie środowisk lekarskich. Przecież i jedni i drudzy lekarze ukończyli studia medyczne uzyskali dyplomy i pracują jako medycy. Wnoszę także o oficjalną odpowiedź Państwa urzędu czyje stanowisko jest zatem słuszne?  Musi stanowić o tym przecież to na jakich badaniach, analizach i rzetelnych informacjach jedni i drudzy lekarze się opierają, a nie to przez kogo są opłacani i rekomendowani.";
            break;
        case 14:
            napis.innerHTML = "Powiatowa Państwowa Inspekcja Sanitarna jako URZĄD NADZORUJĄCY szczepienia po rzetelne i właściwe informacje w sprawie szczepień odsyła na stronę internetową PZH-Narodowego Instytutu Zdrowia Publicznego, na której PPIS i PZH zgodnie wskazują że: 'Decyzję o zaszczepieniu najlepiej podjąć po konsultacji z lekarzem, ważąc ryzyko zachorowania na daną chorobę oraz ryzyko nieporządanych odczynów poszczepiennych.' źródło: Szczepienia.pzh.gov.pl/wszystko-o-szczepieniach/plusy-i-minusy-szczepionek/                                                                              Powyższe, rzetelne według właściwych urzędów informacje jasno mówią, że obywatel po konsultacji z lekarzem, czyli po otrzymaniu od właśnie lekarza wszystkich niezbędnych mu jasnych  i zrozumiałych dla niego do zważenia ryzyka i korzyści informacji dotyczących szczepionek, szczepienia i choroby, przed zaszczepieniem powinien zważyć ryzyko i korzyści ze szczepienia na daną chorobę i na tej podstawie podjąć decyzję o szczepieniu.  Zatem w obliczu stosowania się obywateli do wskazań WŁAŚCIWYCH URZĘDÓW nadzorujących szczepienia niedopuszczlna jest jakakolwiek urzędowa segregacja osób na zaszczepione i niezaszczepione i różnicowanie ich statusu w  ośrodkach zdrowia albo jakichkolwiek innych instytucjach także w sklepach i w miejscach pracy. Niedopuszczalne jest także wymaganie od kogokolwiek bądź przez kogokolwiek w tym instytucji szkolnych i medycznych zaszczepienia jeżeli obywatel przecież zgodnie z zaleceniem WŁAŚCIWEGO URZĘDU po zważeniu korzyści i ryzyka postanowił nie wykonywać szczepienia w tym na Covid-19, lub postanowił takie szczepienie wykonać.                                                                          W związku z powyższym wnoszę o stanowisko Państwa urzędu";
            break;
        case 15:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji, czy w Państwa urzędzie stosowana jest procedura, bądź zalecenie świadczenia usług dla obywateli wyłącznie zaszczepionych lub z ważnym testem na Covid-19? Wnoszę o Państwa stanowisko, czy segregacja petentów w jakimkolwiek urzędzie jest prawnie dopuszczalna? Jeżeli tak to proszę o wskazanie mi podstawy prawnej do takiego działania.";
            break;
        case 16:
            napis.innerHTML = "Wnoszę o przedstawienie mi oficjalnego stanowiska na jakiej podstawie prawnej i konstytucyjnej podczas rozmowy kwalifikacyjnej jednym z kluczowych kryteriów zatrudnienia, bądź rozmowy kwalifikacyjnej jest kwestia dobrowolnych szczepień na Covid-19? Czy w państawa urzędzie taka właśnie procedura kwalifikacyjna jest stosowana?";
            break;
        case 17:
            napis.innerHTML = "Wnoszę o państwa oficjalne stanowisko na jakiej podstawie prawnej, konstytucyjnej i moralnej uzależnić można wypłatę jakichkolwiek świadczeń w tym zasiłków według kryterium dobrowolnych szczepień na Covid-19? Czy wiadomo Państwu o takim procederze i czy jest on w Państwa urzędzie stwosowany?";
            break;
        case 18:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy w okresie pandemii państwa pracownicy, aby móc przyjść do pracy musieli przedstawić negatywny wynik testu na Covid-19? Czy obecnie jest to stosowane?";
            break;
        case 19:
            napis.innerHTML = "Wnosze o przedstawienie mi infrormacji jaki jest stosunek pracowników w Państwa urzędzie zaszczepionych do niezaszczepionych na Covid-19?";
            break;
        case 20:
            napis.innerHTML = "Minął cały rok eksperymentalnego stosowania przez społeczeństwo szalików, przyłbic oraz maseczek i wiedza na temat nikłej skutecznoœci oraz miernego wpływu tychże środków (szalików, przyłbic i maseczek) na powstrzymanie rozprzestrzeniania wirusa Covid-19 jest dla mnie wystarczająca do stwierdzenia, że środki oferowane w sprzedaży detalicznej dla obywateli z wielkim prawdopodobieństwem, a wręcz pewnością są mało skuteczne i przynoszą dużo więcej złych skutków niż korzyści dla nas zwykłych obywateli i naszych dzieci.                    W związku z tym wnoszę o przedstawienie mi przez Państwa urząd nazw producentów i modele maseczek, które używane są przez Państwa pracowników, a szczególnie przez urzędników obsługujących bezpośrednio obywateli jako petentów w urzędach, w celu umożliwienia mi zakupu właściwych działających i z odpowiednimi atestami na działanie antywirusowe, a przynajmniej umożliwienie mi sprawdzenia, czy maseczki te mają właściwe atesty na działanie przeciwwirusowe ponieważ ja też chcę korzystać z właściwych i dziłającycych środków ochrony. Strażak do pożaru nie jedzie przecież gasić ognia w kombinezonie do wykonywania oprysków, pomimo że obydwa te stroje dobrze pokrywają ciało to stosowanie kombinezonu do oprysków w akcji gaszenia ognia jest idiotycznym pomysłem i zagraża bezpieczeństwu i zdrowiu użytkownika. Oczywistym jest dla mnie, iż urzędnicy tacy jak Państwa pracownicy nie stosują przecież środków ochrony osobistej, które nie działają i nie mają atestów na to przed czym mają chronić. ";
            break;
        case 21:
            napis.innerHTML = "Najlepsi fachowcy w tym Minister Zdrowia zajmujący się od początku pandemią Covid-19, który dodatkowo jest LEKARZEM stwierdził jasno cytuję, że maseczki nie działają i nie wie dlaczego ludzie je noszą. W związku z tym wnoszę o bezzwłoczne wycofanie zaleceń i wymogów wchodzenia do Państwa urzędu w maseczkach, które według Ministra Zdrowia nie działają.";
            break;
        case 22:
            napis.innerHTML = "";
            break;
        case 23:
            napis.innerHTML = "";
            break;
        case 24:
            napis.innerHTML = "";
            break;
        case 25:
            napis.innerHTML = "";
            break;
        case 26:
            napis.innerHTML = "";
            break;
            
    }
    
}
function remove3() {
    var element = document.getElementById("add3");
    pis2--;
    element.innerHTML = pis2;
    var napis = document.getElementById("napis")
    switch (pis2) {
        case 1:
            napis.innerHTML = "Jakie wymagane prawem dokumenty są konieczne, aby zdrowemu dziecku u którego ani życie ani zdrowie nie jest zagrożone można było podać w obecnym stanie prawnym i faktycznym jakiekolwiek preparaty szczepionkowe będące w fazie eksperymentów medycznych, bądź nie posiadające wymaganych badań?";
            break;
        case 2:
            napis.innerHTML = "Wnoszę o udostępnienie mi raportu skutków zdalnego nauczania i izolacji społecznej uczniów za rok szkolny 2020/2021, jeżeli nie jesteście państwo w posiadaniu takiego raportu to wnoszę o informację jaki właściwy urząd taki raport z pewnością posiada, oraz wnoszę o przekazanie niniejszego pytania do tego właściwego urzędu.";
            break;
        case 3:
            napis.innerHTML = "Wnoszę o przedstawienie mi stanowiska państwa urzędu w sprawie przebywania dzieci klas 1-3 przez wiele godzin w bliskiej odległości od urządzeń elektronicznych w tym monitorów, komputerów dotyczącego zagrożeń i wpływu promieniowania elektromagnetycznego na rozwój psycho-fizyczny małych dzieci?";
            break;
        case 4:
            napis.innerHTML = "Wnoszę o przedstawienie mi stanowiska państwa urzędu w sprawie przebywania dzieci klas 4-8 przez wiele godzin w bliskiej odległości od urządzeń elektronicznych w tym monitorów, komputerów dotyczącego zagrożeń i wpływu promieniowania elektromagnetycznego na rozwój psycho-fizyczny małych dzieci?";
            break;
        case 5:
            napis.innerHTML = "Do którego konkretnie Urzędu składa się wniosek o wydanie zezwolenia na przeprowadzenie badań eksperymentalnych szczepionek na dzieciach poniżej 12 roku życia i pomiędzy 12 i 18 rokiem życia?";
            break;
        case 6:
            napis.innerHTML = "Wnoszę o informację jakie wymagane prawem urzędowe zgody w tym sądowe i w jakiej formie muszą zostać wydane, aby zdrowym dzieciom do 12 i pomiędzy 12 i 18 rokiem życia w polsce w ogóle mogły być podane w jakiejkolwiek dawce eksperymentalne preparaty szczepionkowe, a nawet placebo w celu przeprowadzenia jakichkolwiek badań w tym bezpieczeństwa i skuteczności?";
            break;
        case 7:
            napis.innerHTML = "Jaki urząd przyjmuje i analizuje, bądź jest obowiązany przyjmować i analizować wyniki badań preparatów na dzieciach do 12 roku życia i pomiędzy 12 i 18 rokiem życia?";
            break;
        case 8:
            napis.innerHTML = "Niedopuszczalne jest według mnie traktowanie jako szczepionek proponowanych obecnie zupełnie nowych eksperymentalnych genetycznych preparatów na Covid-19, niby to szczepionkowych bo ktoś tak gdzieś powiedział, ale nie spełniających żadnych dotychczasowych naukowych i choćby nawet historycznych definicji szczepionek. W związku z tym wnoszę o oficjalne stanowisko Państwa urzędu, czy zalecacie te preparaty jako bezpieczne szczepionki do stosowania u ludzi i na jakiej podstawie faktycznej i logicznej opieracie swoje stanowisko?";
            break;  
        case 9:
            napis.innerHTML = "W obecnej sytuacji niezasadne jest moim zdaniem dążenie do szczepień dzieci na Covid-19 szczególnie w świetle prawdziwego stanu rzeczywistego, który jest odmienny od medialnie i urzędowo kreowanego niby to stanu wysoce niszczycielskiej i śmiertelnej epidemi zagrażjącej całej ludzkości. PRZECIEŻ TO NIE PRAWDA.  Na to właśnie wskazują niezależni  lekarze, naukowcy  i prawnicy, to zauważy nawet średnio inteligentny człowiek taki jak ja. W związku z powyższym wnoszę o oficjalne stanowisko Państwa urzędu w oparciu o jakie fakty i jaką rzeczywistość wasz urząd nie neguje bezsensownych działań i zaleceń dotyczących szczepienia dzieci i młodzieży w obliczu bliskiej zeru zachorowalnośći tej grupy społecznej.";
            break;
        case 10:
            napis.innerHTML = "W związku z możliwym i bardzo wysoce prawdopodobnym niebezpieczeństwem wskazywanym przez wielu lekarzy, a także profesorów dotyczącym obecnie proponowanych szczpepionek na Covid-19 oraz według mnie nieakceptowalnym ryzykiem dla mnie i dzieci szkolnych możliwości utraty zdrowia w wyniku zaszczepienia się tymi preparatami o działaniu genetycznym i niezbadanym należycie wpływie na organizmy ludzi, ale przede wszystkim  DZIECI wnoszę o niezwłoczne wystosowanie przez Państwa urząd ostrzeżenia dla ludności o prawdopodobnym niebezpieczeństwie stosowania preparatów na Covid-19. Jeżeli uważacie Państwo, że preparaty te są być może jednak bezpieczne to wnoszę o przedstawienie mi polskich badań bezpieczeństwa, a przynajmniej w języku polskim na podstawie analizy których tak stwierdzacie. ";
            break;
        case 11:
            napis.innerHTML = " w związku z alarmowaniem nie tylko  rodziców ale WSZYSTKICH przez Polskie Stowarzyszenie Niezależnych Lekarzy i Naukowców w liście z dnia 24 czerwca 2021 r. do Dyrekcji, Grona Pedagogicznego, Rady Rodziców o bardzo prawdopodobnym i nieakceptowalnym na dzień dzisiejszy według mnie niebezpieczeństwie i ryzyku występowania na niedopuszczalnym poziomie możliwych groźnych powikłań poszczpiennych mogących wystąpić nie tylko-ale także u dzieci w wyniku zastosowania obecnie bezkrytycznie proponowanych wydaje się że eksperymentalnych preparatów do szczepień na Covid-19 wnoszę o bezzwłoczne przeprowadzenie przez Państwa urząd lub na Państwa wniosek dokładnej ankiety i badania w powiecie w którym urzęduje Państwa urząd u wszystkich zaszczepionych dotychczas na Covid-19 osób pod kątem Nieporządanych Odczynów Poszczepiennych, oraz deklarowanego stanu zdrowia przed zaszczepieniem i po zaszczepieniu.";
            break;
        case 12:
            napis.innerHTML = "W związku ze skrajnie różnymi opiniami i stanowiskami lekarzy w sprawie bezpieczeństwa szczepionek na Covid-19 i odmiennymi stanowiskami w sprawie zasadności szczepienia się lub nie szczepienia się na Covid-19 wnoszę o przedstawienie mi stanowiska Państwa urzędu w czyje słowa i opinie mamy wierzyć, czy  Lekarzy i fachowców, którzy opierając się jak się wydaje na rzetelnych danych i informacjach urzędowych ostrzegają o ryzyku i niebezpieczeństwie stoswownia obecnych szczepionek na Covid-19, za co są ku mojemu zaskoczeniu represjonowani przez Naczelną Radę Lekarską i nie tylko, a niejednokrotnie są za to zawieszani, wzywani przed Sądy lub tracą prawo wykonywania zawodu? Nie otrzymują pieniędzy z tytułu Covid-19. Zastanówcie się Państwo jaki interes poza uczciwością, prawdą i dobrem pocjentów może im przyświecać,  że gotowi są podjąć ryzyko utraty pracy i prawa wykonywania zawodu, aby przekazać społeczeństwu te ostrzegające informacje?  Czy lekarzy, którzy bezkrytycznie masowo z automatu szczepią, w razie konkretnych pytań odsyłają po informacje wszędzie indziej, bo sami nie chcą informować, odsyłają do producenta, do internetu, gdzie się tylko da, a sami nie udzielają odpowiedzi. Bez udzielania należytych informacji namawiają, a nawet straszą tych co mają wątpliwości, lecz za te działania zupełnie nic im nie grozi, a wręcz przeciwnie ich zarobki z tytułu obsługi Covid-19 bardzo znacząco wzrosły. Często także lekarze ci otrzymują różne premie i dopłaty Covidowe do swoich wynagrodzeń oraz prawdopodobnie także środki pieniężne pośrednio lub bezpośrednio od właśnie producentów szczepionek. Zastanówcie się Państwo jaki interes może przyświecać tej grupie lekarzy i telewizorowych ekspertów? Dobro nasze i naszych dzieci, czy pieniążki?  ZATEM WNOSZĘ O PAŃSTWA STANOWISKO W CZYJE SŁOWA JAKO PACJENT I OBYWATEL ORAZ CZŁOWEK ROZUMNY MAM WIERZYĆ?";
            break;
        case 13:
            napis.innerHTML = "W oficjalnym liście otwartym wzorowanym na liście belgijskich 340 lekarzy i 1340 pracowników służby zdrowia wystosowanym przez około 177 polskich lekarzy i pracowników medycznych do właściwych polskich instytucji, w którym to przecież wykształceni medycznie i jak najbardziej mający ku temu kwalifikacje lekarze z polski i zagranicy zapewne mądrzejsi i bardziej wykwalifikowani od nas zwykłych obywateli czy urzędników i polityków zwracają uwagę na nieprawidłowości i nieadekwatność działań oraz ryzyko związane z tymi podejmowanymi przez urzędników działaniami.  Dotyczy to także stosowania maseczek, ograniczeń i nowych  preparatów i to nieprzebadanych tak jak dotychczas stosowane na inne choroby szczepionki.  Zwracają oni uwagę na ryzyko stosowania preparatów genetycznych nie stosowanych wcześniej na masową skalę i nie podlegających dotychczasowym definicjom szczepionek.  O zgrozo drodzy Państwo, bo nie wiem, czy to do was DOCIERA także preparatów dopuszczonych warunkowo do masowych szczepień, ale co jest o wiele bardziej istotne będących dopiero w fazie krótkofalowych badań bezpieczeństwa, które kończą się zgodnie z informacjami producentów dopiero w październiku 2022 i 2023 r. oraz w latach późniejszych . Preparaty te są niesprawdzonymi produktami o nieznanych skutkach średnio i długo falowych i nie znanym stopniu bezpieczeństwa, a już się mówi o masowym szczepieniu dzieci nawet od 6 miesiêcy do 12  roku życia. Co się stanie jeżeli za kilka lat okaże się, że szczepionki te jednak powodują coś niedopuszczalnie negatywnego, a my już zdążyliśmy wyszczepić całe pokolenie dzieci na chorobę na którą te dzieci praktycznie nie chorują? PO CO I W CZYIM INTERESIE? I kto za to odpowie? Jak to się ma do stanowiska i opini lekarzy i telewizyjnych ekspertów,  że szczepionki na Covid-19 są bezpieczne i wszyscy musimy się szczepić mimo że badania dopiero trwają a preparaty te zostały dopuszczone warunkowo?  Wnoszę do Państwa urzędu o natychmiastowe wydanie oświadczenia o zaleceniu wstrzymania szczepień w Polsce do czasu rzetelnego wyjaśnienia sprawy tak, aby obywatel taki jak ja nie musiał podejmować decyzji o szczepieniu w oparciu o tak skrajne opinie środowisk lekarskich. Przecież i jedni i drudzy lekarze ukończyli studia medyczne uzyskali dyplomy i pracują jako medycy. Wnoszę także o oficjalną odpowiedź Państwa urzędu czyje stanowisko jest zatem słuszne?  Musi stanowić o tym przecież to na jakich badaniach, analizach i rzetelnych informacjach jedni i drudzy lekarze się opierają, a nie to przez kogo są opłacani i rekomendowani.";
            break;
        case 14:
            napis.innerHTML = "";
            break;
        case 15:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji, czy w Państwa urzędzie stosowana jest procedura, bądź zalecenie świadczenia usług dla obywateli wyłącznie zaszczepionych lub z ważnym testem na Covid-19? Wnoszę o Państwa stanowisko, czy segregacja petentów w jakimkolwiek urzędzie jest prawnie dopuszczalna? Jeżeli tak to proszę o wskazanie mi podstawy prawnej do takiego działania.";
            break;
        case 16:
            napis.innerHTML = "Wnoszę o przedstawienie mi oficjalnego stanowiska na jakiej podstawie prawnej i konstytucyjnej podczas rozmowy kwalifikacyjnej jednym z kluczowych kryteriów zatrudnienia, bądź rozmowy kwalifikacyjnej jest kwestia dobrowolnych szczepień na Covid-19? Czy w państawa urzędzie taka właśnie procedura kwalifikacyjna jest stosowana?";
            break;
        case 17:
            napis.innerHTML = "Wnoszę o państwa oficjalne stanowisko na jakiej podstawie prawnej, konstytucyjnej i moralnej uzależnić można wypłatę jakichkolwiek świadczeń w tym zasiłków według kryterium dobrowolnych szczepień na Covid-19? Czy wiadomo Państwu o takim procederze i czy jest on w Państwa urzędzie stwosowany?";
            break;
        case 18:
            napis.innerHTML = "Wnoszę o udzielenie mi informacji czy w okresie pandemii państwa pracownicy, aby móc przyjść do pracy musieli przedstawić negatywny wynik testu na Covid-19? Czy obecnie jest to stosowane?";
            break;
        case 19:
            napis.innerHTML = "Wnosze o przedstawienie mi infrormacji jaki jest stosunek pracowników w Państwa urzędzie zaszczepionych do niezaszczepionych na Covid-19?";
            break;
        case 20:
            napis.innerHTML = "Minął cały rok eksperymentalnego stosowania przez społeczeństwo szalików, przyłbic oraz maseczek i wiedza na temat nikłej skutecznoœci oraz miernego wpływu tychże środków (szalików, przyłbic i maseczek) na powstrzymanie rozprzestrzeniania wirusa Covid-19 jest dla mnie wystarczająca do stwierdzenia, że środki oferowane w sprzedaży detalicznej dla obywateli z wielkim prawdopodobieństwem, a wręcz pewnością są mało skuteczne i przynoszą dużo więcej złych skutków niż korzyści dla nas zwykłych obywateli i naszych dzieci.                    W związku z tym wnoszę o przedstawienie mi przez Państwa urząd nazw producentów i modele maseczek, które używane są przez Państwa pracowników, a szczególnie przez urzędników obsługujących bezpośrednio obywateli jako petentów w urzędach, w celu umożliwienia mi zakupu właściwych działających i z odpowiednimi atestami na działanie antywirusowe, a przynajmniej umożliwienie mi sprawdzenia, czy maseczki te mają właściwe atesty na działanie przeciwwirusowe ponieważ ja też chcę korzystać z właściwych i dziłającycych środków ochrony. Strażak do pożaru nie jedzie przecież gasić ognia w kombinezonie do wykonywania oprysków, pomimo że obydwa te stroje dobrze pokrywają ciało to stosowanie kombinezonu do oprysków w akcji gaszenia ognia jest idiotycznym pomysłem i zagraża bezpieczeństwu i zdrowiu użytkownika. Oczywistym jest dla mnie, iż urzędnicy tacy jak Państwa pracownicy nie stosują przecież środków ochrony osobistej, które nie działają i nie mają atestów na to przed czym mają chronić. ";
            break;
        case 21:
            napis.innerHTML = "Najlepsi fachowcy w tym Minister Zdrowia zajmujący się od początku pandemią Covid-19, który dodatkowo jest LEKARZEM stwierdził jasno cytuję, że maseczki nie działają i nie wie dlaczego ludzie je noszą. W związku z tym wnoszę o bezzwłoczne wycofanie zaleceń i wymogów wchodzenia do Państwa urzędu w maseczkach, które według Ministra Zdrowia nie działają.";
            break;
        case 22:
            napis.innerHTML = "";
            break;
        case 23:
            napis.innerHTML = "";
            break;
        case 24:
            napis.innerHTML = "";
            break;
        case 25:
            napis.innerHTML = "";
            break;
        case 26:
            napis.innerHTML = "";
            break;
            
    }
}



