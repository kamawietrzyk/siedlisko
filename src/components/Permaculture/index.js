import React from 'react'
import './index.scss'
import perma from './perma.jpg'
import wheel from './wheel.jpg'
import permguild from './permguild.jpg'
import herbSpiral from './herbSpiral.jpeg'
import spiral from './spiral.svg'

const Permaculture = () => (
  <>
    <img src={perma} alt="contact pic" width="100%"/>
    <div className="Permaculture">
      <h1 className="text-center pt-4">Permakultura - co to takiego?</h1>
      <p>Permakultura to interdyscyplinarna nauka i szkoła projektowania trwałych, zrównoważonych ekosystemów - to najbardziej zwięzła definicja, jaką do tej poznaliśmy. Moglibyśmy tutaj silić się na własne jej opisywanie, ale nie ma to najmniejszego sensu, skoro ludzie dużo mądrzejsi od nas już dawno to zrobili, w dodatku świetnie i zrozumiale, zatem po prostu ich zacytujemy.</p>
      <p><span>Bill Mollison</span> -  australijski badacz, autor, naukowiec, wykładowca i naturalista, uważany za ojca permakultury - w 1978r. stworzył definicję, która mówi, że &ldquo;system jest zrównoważony wtedy, gdy w ciągu swojego istnienia wytwarza conajmniej tyle energii, ile jej zużywa&ldquo;. W książce pt. &ldquo;Wprowadzenie do permakultury&ldquo; (polskie wydanie dostępne <a href="https://permakultura.edu.pl/wprowadzenie-do-permakultury/" target="_blank" rel="noopener noreferrer">tutaj</a>) Mollison mówi o permakulturze tak:</p>
      <p className="Permaculture__blockquote"><span>Permakultura</span> jest systemem projektowania, w którym tworzy się trwałe środowiska ludzkie. Słowo &quot;permakultura&quot; powstało z połączenia słowa <span>permanent</span> (&quot;trwałe&quot;, łac. <em>permaneo</em> - &quot;wytrwać&quot; i &quot;utrzymać się&quot;) ze słowem <span>agriculture</span> (&quot;rolnictwo&quot;), a także słowem <em>culture</em> (&quot;kultura&quot;, łac. <em>cultura</em> - &quot;uprawa&quot;, &quot;hodowla&quot;), ponieważ kultura nie może przetrwać bez zrównoważonej bazy rolniczej i etyki użytkowania ziemi. Z jednej strony permakultura zajmuje się roślinami, zwierzętami, budynkami i infrastrukturą (wodną, energetyczną, komunikacyjną), z drugiej nie traktuje o tych elementach ze względu na nie same, lecz ze względu na związki, jakie możemy między nimi ustanowić dzięki odpowiedniemu rozmieszczeniu ich w terenie. Celem tak rozumianej permakultury jest tworzenie przyjaznych dla środowiska i ekonomicznie wydajnych systemów, zaspokajających własne potrzeby, nieeksploatujących ani niezanieczyszczających otoczenia, a co za tym idzie - długotrwałych.</p>
      <div className="Permaculture__two">
        <img className="spiral" src={herbSpiral} alt="herb-spiral" width="75%"/>
        <p className="text-justify">Te ryciny przedstawiają dwa z bardzo wielu elementów charakterystycznych dla projektów permakulturowych - pierwszy to przydomowa <span>spirala ziołowa</span>, drugi - <span>gildia drzewa owocowego</span> wraz z opisem funkcji roślin towarzyszących.</p>
        <img className="guild" src={permguild} alt="permaculture-guild" width="100%" />
      </div>
      <p>Kolejną osobowością, o której nie można nie wspomnieć, mówiąc o podstawach permakultury, jest <span>David Holmgren</span>. Ten australijski inżynier-ekolog i publicysta jest współtwórcą, wraz z Billem Mollisonem, koncepcji permakultury. Sformułował on zasady etyczne warunkujące stosowanie dwunastu reguł projektowania. Etyka stoi na straży ich właściwej realizacji i odpowiedniego wprowadzania w życie.</p>
      <div className="Permaculture__one">
        <div>
          <h3 className="mt-4">Permakulturowe zasady etyczne:</h3>
          <ul>
            <li>Troska o Ziemię,</li>
            <li>Troska o ludzi,</li>
            <li>Sprawiedliwy podział.</li>
          </ul>
          <img src={spiral} className="m-2" alt="design1" width="55%" />
        </div>
        <div>
          <h3 className="mt-4">12 zasad projektowania:</h3>
          <ol>
            <li>Obserwuj i współdziałaj,</li>
            <li>Zbieraj i magazynuj energię,</li>
            <li>Uzyskaj plon,</li>
            <li>Stosuj samoregulację i akceptuj informację zwrotną,</li>
            <li>Stosuj i doceniaj odnawialne źródła energii oraz usługi,</li>
            <li>Nie produkuj odpadów,</li>
            <li>Projektuj od wzorców do detali,</li>
            <li>Łącz zamiast rozdzielać,</li>
            <li>Stosuj małe i powolne rozwiązania,</li>
            <li>Stosuj i doceniaj różnorodność,</li>
            <li>Korzystaj z obszarów granicznych i ceń marginalność,</li>
            <li>Twórczo używaj i reaguj na zmiany.</li>
          </ol>
        </div>
      </div>
      <p className="mt-4">Permakulturowe zasady etyczne oraz 12 zasad projektowania pięknie przedstawia poniższa grafika, a szczegółowy opis każdej z zasad znajdziesz na stronie <a href="https://permacultureprinciples.com/" target="_blank" rel="noopener noreferrer">PermaculturePrinciples.com</a>. Znajdziesz tam również do pobrania broszurę pt. <a href="https://permacultureprinciples.com/resources/free-downloads/" target="_blank" rel="noopener noreferrer">&ldquo;Istota permakultury&ldquo;</a>, która podsumowuje zasady i pojęcia (także w polskiej wersji językowej!). Fun fact - australijski zespół Formidable Vegetable stworzył album pt. &ldquo;Permaculture: A Rhymer`s Manual&ldquo; - 12 utworów, każdy o jednej z 12 zasad Holmgrena (do posłuchania <a href="https://soundcloud.com/formidablevegetable/sets/permaculture-a-rhymers-manual" target="_blank" rel="noopener noreferrer">tutaj</a>).</p>
      <img className="Permaculture__pic" src={wheel} alt="holmgren-permaculture-basics" width="85%" />
      <p>W Polsce ruch permakulturowy rozwija się coraz prężniej. Według nas najbardziej przyczyniają się do tego rozwoju panowie <span>Wojciech Górny</span> (<a href="https://permisie.pl/" target="_blank" rel="noopener noreferrer">Permisie.pl</a>) i <span>Bez Lazar</span> (<a href="https://permakultura.edu.pl/" target="_blank" rel="noopener noreferrer">Permakultura.edu.pl</a>). Obaj posiadają ogromną wiedzę, którą chętnie się dzielą z początkującymi pasjonatami permakultury, a na prowadzonych przez nich platformach znajdziesz mnóstwo szczegółowych informacji, linki do literatury fachowej (w tym polskie wydania &ldquo;Ogrodu Gai&ldquo; Toby`ego Hemenwaya oraz wspomniane już wcześniej &ldquo;Wprowadzenie do permakultury&ldquo; Billa Mollisona & Reny M. Slay), kursy projektowania, webinary i wiele, wiele innych.</p>
      <p className="mt-4">Na koniec odrobina filozofii - bo permakultura to nie tylko projekty, zasady, planowanie, wyliczenia, nasadzenia... To także - a może właśnie przede wszystkim - <span>idea</span>. Wojciech Górny w artykule pt. &ldquo;Perma co? Jaka kultura?&ldquo; (całość do przeczytania w <a href="https://permakultura.edu.pl/wp-content/uploads/2wyTworcy.pdf" target="_blank" rel="noopener noreferrer">Magazynie WyTwórcy</a>, #02/15) opisuje ją tak:</p>
      <p className="Permaculture__blockquote">Permakultura jako <span>dobro</span> intelektualne jest w rozumieniu jej twórcy, Billa Mollisona, własnością całkowicie rozproszoną – każdy absolwent kursu projektowania permakulturowego staje się współwłaścicielem permakultury i może ją praktykować, krzewić i rozwijać w dowolny sposób. Permakultura jest więc społecznością projektantów, nieformalną organizacją o światowym zasięgu, której rozproszenie, brak majątku, centralnych władz, ciał organizacyjnych, budżetów i komitetów czyni praktycznie niezniszczalną. Idei bowiem, przekazywanej w ramach kursów projektowania permakulturowego i zakorzenionej głęboko w absolwentach takich kursów, nie sposób powstrzymać i zniszczyć.</p>
    </div>
  </>
)

export default Permaculture
