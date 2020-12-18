# Obfuskator HTML

Nasza aplikacja zawiera 3 sposoby obfuskacji kodu HTML jak i deobfuskacje tych metod: 
## [Kodowanie znaków](obfuskacjaHTML/obfuscator.js)

Metoda polega na zamianie znaków z kodu źródłowego HTML na kody znaków ASCII, a następnie wyświetlenie strony dzięki wykorzystaniu funkcji przeglądarki unescape(str) oraz document.write(str). Dzięki temu zamiast wysyłać użytkownikowi kod źródłowy z postaci HTML otrzymuje on kod javascript, którego zadaniem jest wyświetlenie strony. Cały HTML jest przedstawiony za pomocą jednego stringa zakodowanych znaków ASCII i wyświetlona przy pomocy wbudowanej funkcji przeglądarki unescape(str).

## [Dodawanie losowych klas do elementów DOM](obfuskacjaHTML/randomClassNamesObfuscator.js)

Dla każdego tagu pliku html dopisywane są nieistotne klasy ze zbioru wcześniej przez nas ustalonego. Zbiór klas do użycia jest z góry ustalony, aby kod wyglądał “realistycznie” a dodatkowo deobfuskacja będzie opierać się na oczyszczeniu kodu z dokładnie tych predefiniowanych klas. Klasy te są dodawane pomiędzy przypisanymi już klasami do danego elementu DOM. Nasz algorytm również dodaje losowo wygenerowane klasy przed i za oryginalnym zbiorem  klas. Rozwiąże to przypadek, kiedy tag nie będzie miał przypisanej w oryginale żadnej klasy.

## [Dodowanie nowo utworzonych elementów DOM](obfuskacjaHTML/randomContentObfuscator.js)

Rozwiązanie to polega na generowaniu elementów DOM (obecnie jest to tylko div, w przyszłości można rozwinąć to do bardziej skomplikowanej struktury) wraz z losowo wygenerowanym tekstem o ustalonej długości. Utworzone elementy są dodawane do oryginalnego DOM jako ostatnie “dziecko” każdego tagu (w przyszłości - ustalenie prawdopodobieństwa dodania elementu).

Nowo powstałe fragmenty kodu posiadają losowo wygenerowane klasy, co jeszcze bardziej zaciemnia widoczność oryginalnego kodu źródłowego. Wśród tych klas natomiast jest ustalona przez nas klasa, która pomoże nam w procesie deobfuskacji na usunięcie wstawionych elementów.


## Uruchomienie
Wystarczy uruchomić index.html w przeglądarce internetowej.

## Test
W repozytorium dołączony jest plik [test.html](test.html), który jest zobfuskowaną wersją [index.html](index.html). Uruchomienie go w przeglądarce da taki sam efekt jak uruchomienie głównego pliku.
