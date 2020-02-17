import React from 'react'
import ryjki from './ryjki.jpg'
import URLS from '../../config/urls'
import './index.scss'

const AboutUs = () => (
  <div className="AboutUs">
    <img src={ryjki} alt="about-us-pic"/>
    <div className="AboutUs__text">
      <h1 className="text-center">Cześć!</h1>
      <p>Nazywamy się <span>Kama</span> i <span>Tomek Wietrzyk</span>. Jesteśmy dobrymi przyjaciółmi od stu lat, zakochaną parą od trzynastu, a od ostatnich sześciu - szczęśliwym małżeństwem. Kama - z wykształcenia magister sztuki - skrzypaczka, od niedawna z zawodu programistka FE, miłośniczka szycia, malowania akwareli i wszelkiego rodzaju rękodzieła. Tomek - z wykształcenia technik-leśnik, z zawodu barista z ogromną wiedzą i miłością do kawy, hobbystycznie artysta malarz. Wspólnie postrzegani jesteśmy jako para ekoludków. W 2016 roku do tego duetu dołączył on - syn nasz pierworodny - <span>Tymek</span>. Wywrócił nasze dotychczasowe życie do góry nogami, ale to dzięki niemu jesteśmy tu, gdzie jesteśmy.</p>
      <p>Zawsze przywiązywaliśmy dużą wagę do ekologii, zdrowego jedzenia, troski o Ziemię i spędzania czasu na obcowaniu z naturą. Swoją drogą, słowo &quot;obcowanie&quot; jest bez sensu, bo przecież z tą naturą to trzeba się bratać, a nie &quot;obcować&quot; - ma być nam bliska, a nie obca. No to niech będzie, że spędzaliśmy czas &quot;bratając się z naturą&quot;. Tak czy inaczej, wracając do tematu - po tym, jak urodził się Tymek nosiliśmy się już z zamiarem osiąścia (osiądnięcia..? no, tego no... osiedlenia się!) gdzieś na stałe, a gdy niedługo później Tomek dostał od rodziców piękny kawałek ziemi w Małopolsce stwierdziliśmy, że to już zdecydowanie ten czas, by zakończyć zagraniczne wojaże i po 8 latach przebywania na Zielonej Wyspie zjechać na ojcowiznę (i matkowiznę też!), żeby zapuścić korzenie w rodzimym kraju i zbudować wymarzony dom na wsi. Narodziło się wtedy pytanie, jak sensownie wziąć się za zagospodarowanie otrzymanej ziemi z kawałkiem lasu, łąką, pagórkami, dolinkami i ogromnym, ukrytym potencjałem, by dostarczała nam zdrowej żywności, była miejscem pracy, zabawy i odpoczynku. I wówczas z pomocą przyszła ona - <a href={URLS.PERMACULTURE} target="_blank" rel="noopener noreferrer">PERMAKULTURA</a>! A jak to się zaczęło opowie Tomek - proszsz… :</p>
      <p>Pierwszy raz usłyszałem o permakulturze od taty - opowiedział mi wówczas o grządkach wypełnionych drewnem, które butwiejąc i rozkładając się nie dość, że zasila rośliny rosnące na nich w mikroelementy i składniki odżywcze, to jeszcze zatrzymuje wodę w glebie na dłużej. Pomyślałem sobie wtedy - &quot;No, w sumie fajnie - jak w lesie&quot; - a potem o sprawie zapomniałem, bo akurat byłem na etapie życia pt. praca - impreza - dom - powtórz. Temat powrócił kilka lat później, gdy Kama, wędrując po stronie <a href="https://www.cohabitat.net/" target="_blank" rel="noopener noreferrer">Cohabitatu</a>, natknęła się na kurs permakultury w formie webinarów, prowadzonych przez wędrownego nauczyciela <a href="https://www.facebook.com/ben.amin.lzr" target="_blank" rel="noopener noreferrer">Bena Lazara</a>, i po przeczytaniu opisu postanowiła sprezentować mi rzeczony kurs na urodziny. Okazało się wtedy, że cała filozofia naszego życia, miłość do ekologii  i zdrowej żywności, minimalizm i ogólne poglądy na świat są bardzo spójne z tym, czego wówczas zacząłem się uczyć. Permakultura poukładała moją dotychczasową wiedzę w całość jak puzzle. Z tej drogi nie było już odwrotu!</p>
      <p>
      Dlatego od ponad półtora roku latamy po całym terenie, deszcz czy śnieg czy zawierucha, i zbieramy dane o wodzie (wszystko zaczyna się od retencji!), wiatrach, glebie i rodzimej roślinności. Przed nami jeszcze mnóstwo pracy - budowa domu, zaprojektowanie supergildii, rozmieszczenie grządek i wałów, usytuowanie kurnika, szklarni... Część projektu się uda, część na pewno będzie do poprawy, ale nie wyobrażamy sobie, że moglibyśmy cokolwiek zrobić już inaczej niż w myśl zasad projektowania permakulturowego. To będzie naprawdę piękne siedlisko!</p>
    </div>
  </div>
)

export default AboutUs
